import { client } from "@/sanity/lib/client";

async function getData(){
    const fetchdata = await client.fetch(`*[_type == "companylogo"]{
  "imageUrl1": image1.asset->url,
  "imageUrl2": image2.asset->url,
  "imageUrl3": image3.asset->url,
  "imageUrl4": image4.asset->url,
  "imageUrl5": image5.asset->url,
  "imageUrl6": image6.asset->url,
  "imageUrl7": image7.asset->url
}`)
    return fetchdata;
}

export async function CompanyLogo(){
    const data = await getData();
    return(
        <div className="h-[139px] flex flex-wrap sm:justify-between  gap-2 items-center ml-4">
            <img className="h-[50px]" src={data[0].imageUrl1} alt="" />
            <img className="h-[50px] w-[107px]" src={data[0].imageUrl2} alt="" />
            <img className="h-[60px] w-[135px]" src={data[0].imageUrl3} alt="" />
            <img className="h-[80px] w-[63px]" src={data[0].imageUrl4} alt="" />
            <img className="h-[101px] w-[98px]" src={data[0].imageUrl5} alt="" />
            <img className="h-[40px] w-[115px]" src={data[0].imageUrl6} alt="" />
            <img  className="h-[40px] w-[84px]"  src={data[0].imageUrl7} alt="" />
        </div>
    )
}