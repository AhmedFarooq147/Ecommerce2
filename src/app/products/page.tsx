'use client'
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci"
import {  Product } from "../action/action";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
export default function Page() {
  const [data,setdata] = useState([])
  const [instadata,setinstadata] = useState([])
 
 
  useEffect(() => {
    async function fetchproduct(){
      const fetchdata = await client.fetch(`*[_type == "products" ]{
        _id,
        "slug":slug.current,
        title,
        price,
        "imageUrl":image.asset->url,
        priceWithoutDiscount,
        tags
        }`)
        const featuredProductsQuery =await client.fetch(`*[_type == "products" && "instagram" in tags]{
      _id,
      "slug":slug.current,
      title,
      price,
      "imageUrl":image.asset->url,
      priceWithoutDiscount,
      tags
      }
`);
        setdata(fetchdata)
        setinstadata(featuredProductsQuery)


        
    }
    
  
    fetchproduct();
   },[])
   
   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
  
    if (!product._id) {
      console.error("❌ ERROR: Product ID is missing!", product);
      return;
    }
  
    let cart: Product[] = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (error) {
      console.error("LocalStorage Parsing Error:", error);
    }
  
    const existingProduct = cart.find((item) => item._id === product._id);
  
    if (existingProduct) {
      // ✅ Agar product pehle se hai to quantity barhao aur price update karo
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // ✅ Agar product nahi hai to quantity 1 aur total price set karo
      cart.push({ ...product, quantity: 1, totalPrice: product.price });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    console.table(cart);
  
    Swal.fire({
      title: "Success!",
      text: `${product.title} added to cart!`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  
  return (
    <div className="bg-gray-50">
      {/* Navbar */}




      {/* Product Grid */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold  mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Single Product Card */}
          {
            data.map((item:Product, i:number) => {
              return (
                
                  <div key={i}>
                    <Link  href={`/product/${item.slug}`}>
                    <img
                      src={item.imageUrl}
                      alt="Product Image"
                      className="w-full h-[312px] object-cover rounded-lg mb-4"
                    /></Link>
                    <div className="flex justify-between">
                      <div><h3 className="text-lg font-medium text-gray-700">
                        {item.title}
                      </h3>
                        <div className="flex items-center gap-1 " ><p className="text-black font-bold">{item.price}$</p> <p className="text-[14px] text-[#9A9CAA] line-through ">{item.pricewithoutdiscount}</p></div></div>
                      <button onClick={(e)=>handleAddToCart(e,item)} className="bg-[#F0F2F3] w-[44px] h-[44px] flex justify-center items-center rounded-[8px] hover:bg-[#029FAE] hover:text-white "><CiShoppingCart className="text-[30px] " /></button>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[30px] font-semibold mb-4 ">
            Or Subscribe To The Newsletter
          </h2>
          <form className="flex items-center gap-5 space-x-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-4 py-2 w-2/3 focus:outline-none border-b-2 text-black border-b-black bg-gray-100"
            />
            <button className=" px-4 py-2 focus:outline-none border-b-2 text-black border-b-black bg-gray-100">
              Submit
            </button>
          </form>
        </div>
      </section>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Products and Discounts on Instagram</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 place-items-center place-content-center">
          
            {
              instadata.map((item:Product,i:number)=>{
                return(
                  <Link href={`/product/${item.slug}`} key={i}>
                  <div >
                    <img 
            src={item.imageUrl} // Replace with actual img paths
            alt="Product 1"
            width={200}
            height={200}
            className="rounded-lg shadow h-[200px] w-[200px] "
          />
                  </div></Link>
                )

              })
            }
           </div>
        </div>
      </div>


    </div>
  );
}
