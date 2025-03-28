'use client'
import {  Product } from "../action/action";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { client } from "@/sanity/lib/client";
import Link from "next/link"
import { CiShoppingCart } from "react-icons/ci"


export function Ourproduct (){
   const [data,setdata] = useState([])
   useEffect(() => {
     async function fetchproduct(){
       const fetchdata = await client.fetch(`*[_type == "products"][7..16]{
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
      <div className="mt-[189px] ml-4">
        <h1 className=" text-center text-[32px] font-inter text-[#272343] font-bold">OUR PRODUCT</h1>
        <div className=" flex justify-center flex-wrap gap-9  items-center mt-[40px]">
              {data.map((item:Product , i:number)=>{
                return(
                <div key={i}>
                <div>
                  <Link href={`/product/${item.slug}`} >
                <img className="h-[212px] w-[212px] rounded-lg sm:h-[312px] sm:w-[312px] sm:rounded-lg" src={item.imageUrl} alt="" />
                </Link>
               <div className="flex justify-between">
                <div className="h-[51px] w-256px mt-[6px]">
                   <h1 className="text-[16px] font-normal text-black hover:text-[#007580]">{item.title}</h1>
                  <div className="flex gap-1 mt-[10px] items-center"><h1 className="text-[18px] font-bold  ">${item.price}</h1><h1 className="text-[14px]  text-[#9A9CAA] line-through">{item.pricewithoutdiscount}</h1></div> 
                </div>
                <button onClick={(e)=>{handleAddToCart(e,item)}}><CiShoppingCart className="h-[44px] w-[44px] bg-[#F0F2F3] hover:bg-[#029FAE] text-black hover:text-white rounded-lg mt-[15.5px]"/></button>
                </div>
                </div></div>
                )
              })}

            {/* ye dusra start hoa ha */}
               

        
            {/* ye 3 start ha */}
               

            {/* ye 4 start hai */}
              
            
            </div>
                            

      </div>        
    )
}