import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci"
import { GoCreditCard } from "react-icons/go"
import { LuSprout } from "react-icons/lu"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start px-6 py-12 md:py-20 text-white">
        <div className="md:w-1/2 space-y-6 bg-[#007580]">
          <div className="mt-[64px] ml-[64px] mr-[113px]"><h1 className="text-3xl md:text-5xl font-bold">About Us - Comforty</h1>
          <p className="text-lg mt-[12px] md:text-xl">
            At Comforty, we believe that the right chair can transform your space
            and elevate your comfort. Specializing in ergonomic design, premium
            materials, and modern aesthetics, we craft chairs that seamlessly
            blend style with functionality.
          </p></div>
          <div className="mt-[143px] pb-[54px]"><button className="bg-[#F9F9F926] h-[56px] mt-[143px] ml-[64px]  text-white text-[16px] pt-[16px] pr-[32px] pl-[32px] pb-[16px]  hover:bg-gray-200">
            View collection
          </button></div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/d37e/124a/23bc7512aabb96d158dbac6d898734fb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y8e-BCSS5rCgcjuhYQ1-hfgvlWfwztmdL4rSHBJTta3vTS8rdUJBDhjPCvb2uwCFUqIDS0p4oBqKr29HiqDcLCcKbDiDYbSGN92-~63u7T2eRyf~Cx5NuAfO9Tf5UU0z-Mh6JRLrTHGXVgWlFsKj~xVG7sQzeNBPoiX4EBM42FOgsFtjcy-CMIQ3l6HZ4mLTy0DvV05aRxbHungIF-zVx0J7YUuMtaj0nE1S5DoGUx5H9ggtZcBszh-2wXaWpKpb~c7b~BoZMPXeqOLds8RLAC1PeYvRN4C-NpR3E8645w8zZNxsDDEsyiwfU0bQ97e03og6QVzq~rkkXMy-iz5pPQ__"
            alt="Comforty Chair"
            className=" h-[515px]   "
          />
        </div>
      </section>

      {/* What Makes Our Brand Different Section */}
      <section className="px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg h-[244px]">
            <div className="text-teal-700 text-4xl pl-[48px] mt-[36px] mb-4">
              <i className="fas fa-shipping-fast"><TbTruckDelivery/></i>
            </div>
            <h3 className="text-xl text-teal-700 mb-2 ml-[48px]">Next day as standard</h3>
            <p className="text-teal-700 ml-[44px]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="bg-[#F9F9F9]  p-6 rounded-lg shadow-lg ">
            <div className="text-teal-700 text-4xl mb-4 pl-[48px] ">
              <i className="fas fa-hand-holding-heart ml-[44px]"><CiCircleCheck/></i>
            </div>
            <h3 className="text-xl  mb-2 ml-[44px] text-teal-700">Made by true artisans</h3>
            <p className="text-teal-700 ml-[44px]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg ">
            <div className="text-teal-700 text-4xl pt-[36px] pl-[44px] mb-4">
              <i className="fas fa-tag "><GoCreditCard/></i>
            </div>
            <h3 className="text-xl  mb-2 ml-[44px] text-teal-700">Unbeatable prices</h3>
            <p className="text-teal-700 ml-[44px]">
              For our materials and quality you wont find better prices
              anywhere.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg ">
            <div className="text-teal-700 text-4xl pl-[44px] pt-[36px] mb-4">
              <i className="fas fa-recycle"><LuSprout/></i>
            </div>
            <h3 className="text-xl  mb-2 text-teal-700 ml-[44px]">Recycled packaging</h3>
            <p className="text-teal-700 ml-[44px]">
              We use 100% recycled materials to ensure our footprint is more
              manageable.
            </p>
          </div>
        </div>
      </section>
    {/* our popular product */}
      <section className="px-6 py-12 md:py-20 ">
        <h2 className="text-2xl md:text-4xl  font-bold mb-12">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
          <div className="text-start md:col-span-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/5633/5375/b19dc98ccde98dc5e1e2fb1bd0dc3b72?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3FQHpqm6HiDYL7sc7vHgVJh5PiGF4Fmt7tLFVLAm3xCqS0hgGqz8vmguSaQEQi07XxUeGfjIFlkpP2h-54jeQmR0-tUSIGiHFLXDkodpu8p~sqXenVea3-quEoAQUkfNtjQu65r71sT3Gz1EZf6I0GimuA-ceefKaKLHmKOkYXzf4UtF5n0yytua3A-l5lhkyG4yGwyki07a0SmsnX405cmUDVEU2IKJR5tc3CcTWP3KjZo21b9qP-yjDLcCx5Xfd2bZVnd~wKthh-2XKjXk5WzewWChcyR79hTR9kzAPTPchLCZ9deDyVpvhy~TG7nM7Oh7CSC0the89wdC11z1g__"
              alt="The Poplar suede sofa"
              className="  w-full h-[375px] mb-4"
            />
            <h3 className="text-xl font-semibold">The Poplar suede sofa</h3>
            <p className="text-lg font-medium">$99.00</p>
          </div>
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WvfXne36-7HgPekcLSHnsQnmzXJsPtuX51hCwBUNqeZ-W4jgB7VxGehCnnihi2HOJr6kugOOThTdO-qiNlrtCPoUP5czH70tK0xj4nxSCa2YZW4knu0CV0csfeXzV7pvVUpcA03MC3n80ZkRbi53mdJYel~fIJ6xW7Gc4Bsoh2J7UycTQLCvQA~mMC~wsfmeTaVpPyvQKqFnKRxNjQTRZmUgbzjpzqHdibIukjqsE9XbvHQx8VuxJZU-rqzcNhHwznJCAPMG89f0XPjlq6JmCZrYoNiImyG1VPcd-N1WNPSn~DfYkuo1empPW2S8DuaCDU8AccwwwHSxc~uV76veUg__"
              alt="The Dandy chair"
              className="  w-[305px] h-[375px] mb-4"
            />
            <h3 className="text-xl font-semibold">The Dandy chair</h3>
            <p className="text-lg font-medium">$99.00</p>
          </div>
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/78e7/5abe/f99fff09807c6e277a683cd469bb041d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQ6wJ4eIhKwYuA5V~pqnD~tOyRkq3vxkfcAF38lj4~tX1N6yL3Rlm8xfng6IYZZk9TVJAts9S1oWx90iDR84bDF4V1HjO8TjNyQDyMVC0PVfIZoZS7xRKw4MnNHrO0M2ZlOOQVv67u7wKpCSaVYTcSLjcwCcFlwdcWdj85LtJngbaNofCXa9Fuv57Cf~qshwg8uMRA0V~ACv8Oh3lq4eBqoRnc8FS2IuYaUFc-5W0mmFmKXGWLZJMDdqucs-4HBkE8IaLAeNqf0Y3RMyYIbjRhQpdu8NpoM0qb31djmpwM-DPQcG0PpjGjXM3PTFI1WP3tVpPVfuft9-5E~eB-JSxw__"
              alt="The Dandy chair"
              className=" w-[305px] h-[375px] mb-4"
            />
            <h3 className="text-xl font-semibold">The Dandy chair</h3>
            <p className="text-lg font-medium">$99.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
