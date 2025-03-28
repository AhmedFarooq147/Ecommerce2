
import { GiSofa } from "react-icons/gi"
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
 
async function getData(){
    const fetchdata = await client.fetch(`*[_type == "midnav"]`)
    return fetchdata;
}

export async function Middle(){
    const data = await getData();
    return(
        <div className="h-[84px] bg-[#F0F2F3] flex justify-between pt-[11px] pr-[16px] rounded-lg items-center">
            <div className="flex items-center gap-[4.5px]"><GiSofa className="text-[#029FAE] text-[40px]"/> <span className="font-medium text-[26px] text-[#272343] ">{data[0].logoname}</span></div>
            <div className="h-[44px]   w-auto flex justify-evenly items-center rounded-md">
            <SignedIn><UserButton/></SignedIn>
           <SignedOut> <Link href={'/login'} className="px-6 text-[15px] py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Sign In /Sign Up</Link>
           </SignedOut>
           </div>
        </div>
    )
}