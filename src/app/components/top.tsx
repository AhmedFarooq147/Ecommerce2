import Link from "next/link";
import { FaAngleDown } from "react-icons/fa"
import { IoMdHelpCircleOutline } from "react-icons/io"
import { FaCheck } from "react-icons/fa"
import { client } from "@/sanity/lib/client";

async function GetData(){
    const fetchdata = await client.fetch(`*[_type == "top-nav"]`);
    return fetchdata;
}

export async function Top(){
    const data = await GetData();
    return(
        <div className="h-[45px] bg-[#272343] text-white flex justify-between  pt-[14px] pb-[14px] pr-[30px] pl-[30px]">      
            <div className="opacity-[70%] font-normal text-[13px] flex">
            <FaCheck className="mt-[3px] mr-[8px] h-[16px] w-[16px]"/><p>{data[0].firstlink}</p>
            </div>
            <div className="flex gap-[24px] opacity-[70%] font-normal text-[13px]">
              <Link href={""} className="flex">{data[0].secondlink}<FaAngleDown className="mt-1 ml-1"/></Link>
              <Link href={"/faq"}>{data[0].thirdlink}</Link>
              <Link href={""} className="flex"><IoMdHelpCircleOutline className="mt-1 mr-1 "/>{data[0].fourthlink}</Link>
              
            </div>

        
        </div>
    )
}