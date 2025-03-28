'use client'
import { useEffect, useState } from "react";

export function Navbar(){
  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    const storedCart = localStorage.getItem("cart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    setCartCount(cartItems.length);
  };

  useEffect(() => {
    updateCartCount(); // Initial load

    // Listen for cart update event
    const handleCartUpdate = () => {
      updateCartCount();
    };
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

    return(
        <div>
            <header className="text-[#636270] body-font bg-white  relative z-10">
  <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto text-[14px] font-medium" >
      <a className="mr-5 hover:text-[#007580]" href={'/'}>Home</a>
      <a className="mr-5 hover:text-[#007580]" href={'/products'}>Products</a>
      <a className="mr-5 hover:text-[#007580]" href={'/about'} > About </a>
      <a className="mr-5 hover:text-[#007580]" href={"/contact"}> Contact </a>
      <a className="mr-5 hover:text-[#007580] relative" href={"/cart"}>
              Cart
              {cartCount > 0 && (
                <span className="absolute top-[-8px] right-[-10px] bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2">
      <span className="text-[14px] font-medium">Contact:</span>
      <span className="text-black text-[14px] font-bold">0314-0333513 </span>
    </div>
  </div>
  <hr />
</header>

        </div>
    )
}