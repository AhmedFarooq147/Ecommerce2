'use client'
import { Product } from '@/app/action/action';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface ProductPostParams {
  params: Promise<{ slug: string }>;
}

const SingleProductPage = ({ params }: ProductPostParams) => {
  // Unwrap the params promise
  const { slug } = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch main product
        const productData = await client.fetch(
          `*[_type == "products" && slug.current == $slug]{
            _id,
            description,
            title,
            price,
            "imageUrl":image.asset->url,
          }[0]`,
          { slug }
        );
        
        // Fetch featured products
        const featuredData = await client.fetch(
          `*[_type == "products" && "featured" in tags][]{
            _id,
            "slug":slug.current,
            title,
            price,
            "imageUrl":image.asset->url,
            tags
          }`
        );

        setProduct(productData);
        setFeaturedProducts(featuredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
  
    if (!client) return; // Ensure we're on client-side
    if (!product?._id) {
      console.error("❌ Product ID missing:", product);
      Swal.fire("Error", "Product could not be added to cart", "error");
      return;
    }
  
    try {
      // Get existing cart or initialize empty array
      const cartStr = localStorage.getItem("cart");
      const cart: Product[] = cartStr ? JSON.parse(cartStr) : [];
      
      // Check if product already exists in cart
      const existingIndex = cart.findIndex(item => item._id === product._id);
      
      if (existingIndex >= 0) {
        // Update quantity if exists
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
      } else {
        // Add new item if doesn't exist
        cart.push({
          ...product,
          quantity: 1,
          totalPrice: product.price
        });
      }
      
      // Save back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      
      // Show success message
      Swal.fire({
        title: "Added to Cart!",
        text: `${product.title} has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
      });
      
      console.log("Updated Cart:", cart);
    } catch (error) {
      console.error("Cart Error:", error);
      Swal.fire("Error", "Failed to add to cart", "error");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 bg-white rounded-2xl mt-[132px] p-6">
        {/* Product Image */}
        <div className="flex justify-center  items-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="rounded-lg w-auto sm:h-[600px]  h-[400px] "
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col flex-wrap gap-[37px] ">
          <h1 className="text-[60px] font-bold text-gray-800 mb-2">{product.title}</h1>
          <button className="text-[20px] rounded-full w-[30%]  h-[44px] bg-[#029FAE] text-white font-semibold mb-4 cursor-default">${product.price} USD</button>
          <hr />
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <button onClick={(e)=>handleAddToCart(e,product)} className=" w-[40%] h-[63px] bg-[#029FAE] text-white rounded-lg hover:bg-teal-700 transition  " >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className=" mt-12">
        <div className='flex justify-between'><h2 className="text-xl font-semibold text-gray-800 mb-4 text-[28px]">Featured Products</h2><button className="text-black font-bold   ">View all</button></div>
        <div className="flex flex-wrap gap-5 mt-12">
          {featuredProducts.map((item:Product, i: number) => (
           <Link href={`/product/${item.slug}`} key={i}>
           <div
              
              className="  h-[306px] w-[270px] bg-white rounded-lg   "
            >
              <img
                src={item.imageUrl}
                alt="Featured Product"
                className=" h-[263px] w-[270px] rounded-md mb-2"
              />
              <div className='flex justify-between'><h3 className="text-sm font-medium text-gray-700">{item.title}</h3>
                <p className="text-sm text-black font-bold">${item.price}</p>
              </div>
            </div></Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SingleProductPage;
