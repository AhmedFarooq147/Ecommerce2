'use client'
import { Headphones, ShieldCheck, Trophy } from "lucide-react";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message,setMessage] = useState('')
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const nameInput = target.elements.namedItem('name') as HTMLInputElement;
    const emailInput = target.elements.namedItem('email') as HTMLInputElement;
    const messageInput = target.elements.namedItem('message') as HTMLTextAreaElement;

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "420dc55c-d50f-4b77-9fd7-9d3be14721b4",

            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        Swal.fire({
            title: "success!",
            text: "Thank you for reaching out! Your message has been received, and I’ll get back to you as soon as possible. Looking forward to connecting with you!",
            icon: "success"
        });
        setemail('');
        setname('')
        setMessage('')

    }
}
  return (
    <div className="min-h-screen bg-white grid place-content-center p-4">
      <div className="bg-white rounded-lg mt-[98px] w-full max-w-4xl p-8">
        <h2 className="text-[36px] font-bold text-center mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-8">
          For more information about our products & services, feel free to drop us an email.
          Our staff is always here to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-start mb-6">
              <span className="text-teal-500 text-2xl mr-4"><FaMapMarkerAlt/></span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>236 5th SE Avenue, New <br /> York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <span className="text-teal-500 text-2xl mr-4"><FaPhoneAlt/></span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-teal-500 text-2xl mr-4"><IoTime/></span>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 mt-6 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                value={name} onChange={(e) => { setname(e.target.value) }}
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                value={email} onChange={(e) => { setemail(e.target.value) }}
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="This is optional"
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about..."
                value={message} onChange={(e) => { setMessage(e.target.value) }}
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 py-12 mt-[50px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex  items-center gap-3">
          <Trophy className="w-12 h-28 text-teal-500 " />
          <div className="grid place-content-start place-items-start"><h3 className="text-xl font-bold">High Quality</h3>
          <p className="text-gray-600">crafted from top materials</p></div>
        </div>

        {/* Feature 2 */}
        <div className="flex  items-center gap-3">
          <ShieldCheck className="w-12 h-12 text-teal-500 " />
          <div  className="grid place-content-start place-items-start"><h3 className="text-xl font-bold">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p></div>
        </div>

        {/* Feature 3 */}
        <div className="flex  items-center gap-3">
          <Headphones className="w-12 h-12 text-teal-500 " />
          <div  className="grid place-content-start place-items-start"><h3 className="text-xl font-bold">24 / 7 Support</h3>
          <p className="text-gray-600">Dedicated support</p></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
