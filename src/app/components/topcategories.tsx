import { client } from "@/sanity/lib/client";
import { Product } from "../action/action";


async function getData1() {
   const fetchdata = await client.fetch(`*[_type == "products" && "gallery" in tags][7..10]{
   "slug":slug.current,
     title,
   price,
   "imageUrl":image.asset->url,
   priceWithoutDiscount,
   inventory,
   tags
   }`)
 return fetchdata;
   
 }

export async function TopCategories() {
  const data = await getData1()
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-[32px] text-[#272343] font-normal text-center mb-8">
          Top Categories
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
        data.map((item:Product,i:number) => {
          return(
            <div key={i} className="bg-[#000000B2] rounded-lg ">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="rounded-t-lg   w-full h-[370px]"
            />
            <div className="p-4 ">
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-white opacity-[70%]">{item.inventory} Products</p>
            </div>
          </div>
          )
          
})
        }
      </div>
  
          
  
          {/* Add more categories as needed */}
        </div>
      
    );
  }
  