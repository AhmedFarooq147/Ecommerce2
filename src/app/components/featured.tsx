'use client'
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci"
import {  Product } from "../action/action";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'


export  function Featured(){
  

const [data,setdata] = useState([])
useEffect(() => {
  async function fetchproduct(){
    const fetchdata = await client.fetch(`*[_type == "products" && "featured" in tags]{
      _id,
      "slug":slug.current,
      title,
      price,
      "imageUrl":image.asset->url,
      priceWithoutDiscount,
      tags
      }`)
      setdata(fetchdata)
      
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



   
   return(
        <div className=" ml-4 mt-20">
            <h1 className="text-[32px] font-bold  text-[#272343] text-center ">Featured Products</h1>
            <div className=" flex flex-wrap gap-9 justify-center  items-center mt-[40px]">
              {data.map((item:Product , i:number)=>{
                return(
               
                <div key={i}>
                   <Link href={`/product/${item.slug}`}>
                        <img className="h-[212px] w-[212px] rounded-lg sm:h-[312px] sm:w-[312px] sm:rounded-lg" src={item.imageUrl} alt="" /> </Link>
               <div className="flex justify-between">
                <div className="h-[51px] w-256px mt-[6px]">
                <Link href={`/product/${item.slug}`}> <h1 className="text-[16px] font-normal text-black hover:text-[#007580]">{item.title}</h1></Link>
                  <div className="flex gap-1 mt-[10px] items-center"><h1 className="text-[18px] font-bold  ">${item.price}</h1><h1 className="text-[14px]  text-[#9A9CAA] line-through">{item.pricewithoutdiscount}</h1></div> 
                </div>
                <button onClick={(e)=>handleAddToCart(e,item)}><CiShoppingCart className="h-[44px] w-[44px] bg-[#F0F2F3] hover:bg-[#029FAE] text-black hover:text-white rounded-lg mt-[15.5px]"/></button>
                </div>
                </div>
                
                )
              })}

              
            
            </div>
            </div>
        
    )
}
