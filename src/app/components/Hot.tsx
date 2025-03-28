import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Product } from "../action/action";

async function getData() {
    const fetchdata = await client.fetch(`*[_type == "products"][10]{
   "slug":slug.current,
    "imageUrl":image.asset->url,
    title
    
    }`
    );
    return fetchdata;
}
async function getData1() {
    const fetchdata = await client.fetch(`*[_type == "products"][11..16]{
     "slug":slug.current,
      "imageUrl":image.asset->url,
      title
      
      }`
    );
    return fetchdata;
}
export async function Hot() {
    const data = await getData();
    const data1 = await getData1();
    return (
        <div>
            <div className="mt-[229px]">

                <h1 className="text-[34px] font-bold mb-[20px] text-center font-serif ">EXPLORE NEW AND POPULAR STYLES </h1>
                <div className="flex gap-[24px] justify-center flex-wrap ">
                    <Link href={`/product/${data.slug}`}> <div >
                        <img className="sm:h-[648px] h-[350px] w-[350] sm:w-[648px] rounded-lg" src={data.imageUrl} alt={data.title} />
                    </div>
                    </Link>



                    <div className="grid grid-cols-2 gap-[24px]">
                        {data1.map((item:Product, i: number) => {
                            return (
                               <Link href={`/product/${item.slug}`}key={i}> <img  className="sm:h-[312px] h-[212px] w-[212px] sm:w-[312px] rounded-lg" src={item.imageUrl} alt={item.title} /></Link>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}