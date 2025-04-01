'use client'
import { GiSofa } from "react-icons/gi"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

export function Footer(){
    return(
        <div className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
          <div className="flex items-center gap-[4.5px]"><GiSofa className="text-[#029FAE] text-[40px]"/> <span className="font-bold text-[26px] text-[#272343] ">Comforty</span></div>
            <p className="mt-4">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>
            <ul className="flex gap-3 mt-2">
              <li><a href="#" className="p-2 text-[20px] hover:text-[#007580]"><FaFacebook/>  </a></li>
              <li><a href="#" className="p-2 text-[20px] hover:text-[#007580]"><i className="fab fa-twitter"> <FaTwitter/> </i></a></li>
              <li><a href="#" className="p-2 text-[20px] hover:text-[#007580]"><i className="fab fa-instagram"> <FaInstagram/> </i></a></li>
              <li><a href="#" className="p-2 text-[20px] hover:text-[#007580]"><i className="fab fa-youtube"><FaPinterest/> </i></a></li>
              <li><a href="#" className="p-2 text-[20px] hover:text-[#007580]"><i className="fab fa-youtube"><FaYoutube/> </i></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-[#9A9CAA] mb-4">Category</h3>
            <ul>
              <li><a href="#" className="hover:text-[#007580]">Sofa</a></li>
              <li><a href="#" className="hover:text-[#007580]">Armchair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Wing Chair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Desk Chair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Wooden Chair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Park Bench</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-[#9A9CAA] mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-[#007580]">Help & Support</a></li>
              <li><a href="#" className="hover:text-[#007580]">Terms & Support</a></li>
              <li><a href="#" className="hover:text-[#007580]">Privacy & Policy</a></li>
              <li><a href="#" className="hover:text-[#007580]">Help</a></li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg text-[#9A9CAA] mb-4">Newsletter</h3>
            <form className="">
              <div className="sm:flex sm:gap-3">
              <input type="email" placeholder="Your email" className="border border-gray-700 rounded-md px-4 py-2 mb-4 h-10 "  />
              <button className="bg-[#029FAE] text-white  py-2 px-4 rounded-md h-10">Subscribe</button>
             </div> <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </form>
          </div>
        </div>
        <hr />
        
      </div>)
   }