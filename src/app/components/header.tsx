import { IoArrowForwardOutline } from "react-icons/io5"
import { client } from "@/sanity/lib/client";

async function getData(){
    const fetchdata = await client.fetch(`*[_type == "header"]{welcome,about,button,"imageUrl": image.asset->url}`)
    return fetchdata;
}

export async function Header(){
    const data = await getData()
    return(
        <div className="w-full bg-[#F0F2F3] h-[850px] rounded-b-[48px]  grid grid-rows-2 place-items-center place-content-center sm:grid sm:grid-rows-2 md:grid md:grid-cols-2 ">
               <div className=" pt-[180px]  pl-[40px] sm:pt-[200px] sm:pl-[55px] ">
                <p className="font-normal text-[8px] sm:font-normal sm:text-[10px]  text-[#272343]  letter tracking-[2px] md:text-[14px] ">{data[0].welcome} </p>
                <h1 className="text-[30px] font-bold text-[#272343] sm:text[50px] md:text-[60px] ">{data[0].about} </h1>
                <button className="text-white h-[40px] w-[120px] flex rounded-[4px] items-center hover:bg-black duration-[850ms] justify-center mt-[30px] bg-[#029FAE]  sm:text-white sm:bg-[#029FAE] sm:h-[52px] sm:w-[171px] sm:rounded-[8px] sm:text-[16px] sm:flex sm:items-center sm:justify-center sm:mt-[49px] sm:hover:bg-black sm:duration-[850ms] hover:text-white ">{data[0].button} <IoArrowForwardOutline className="ml-[4px]"/></button>
               </div>
               <div className="md:mt-[50%]">
                <img className="h-[300px] w-[200px] sm:h-[400px] sm:mb-40 sm:w-[350px] sm:mt-[140px] md:w-[434px] md:h-[500px]  " src={data[0].imageUrl} alt="" />
               </div>
        </div>
    )
}