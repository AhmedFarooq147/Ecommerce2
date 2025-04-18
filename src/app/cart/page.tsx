'use client'
import React, { useEffect, useState } from 'react';
import { getCartItems, Product, removeFromCart, updateCartQuantity } from '../action/action';
import Swal from 'sweetalert2';
import Link from 'next/link';
import AuthGuard from '../components/AuthGuard';


const Cart = () => {
   const [cartItems,setcartitems] = useState<Product[]>([])
    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setcartitems(storedCart);
    
    },[])
    
    const handleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if(result.isConfirmed) {
                removeFromCart(id)
                setcartitems(getCartItems())
                Swal.fire("Removed", "Item has been removed.", "success");
            }
        })
    }
    

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setcartitems(prevItems => prevItems.map(item =>
            item._id === id ? { ...item, quantity } : item
        ));
    };
    
    const handleIncrement = (id: string) => {  
        setcartitems(prevItems => prevItems.map(item => 
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    
        setcartitems(prevItems => {
            const updatedQuantity = prevItems.find(item => item._id === id)?.quantity || 1;
            handleQuantityChange(id, updatedQuantity);
            return prevItems;
        });
    };
    
    const handleDecrement = (id: string) => {
        setcartitems(prevItems => prevItems.map(item => 
            item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    
        setcartitems(prevItems => {
            const updatedQuantity = prevItems.find(item => item._id === id)?.quantity || 1;
            handleQuantityChange(id, updatedQuantity);
            return prevItems;
        });
    };
    
    
    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    
    const handleProceed = () => {
        if (cartItems.length === 0) {  // ✅ Agar cart empty hai
          Swal.fire({
            title: "Cart is Empty!",
            text: "Please add some products to your cart before proceeding.",
            icon: "warning",
            confirmButtonText: "OK",
          });
          return;
        }
        // ✅ Agar cart me products hain, to checkout confirm karein
        Swal.fire({
          title: "Proceed to Checkout?",
          text: "Please review your cart before checkout",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, proceed!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Success", "Your Order has been successfully processed", "success");
            localStorage.removeItem("cart");
            setcartitems([]) // ✅ Cart empty kar do
          }
        });
      };
      
      
    
return(
    <AuthGuard>
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        {/* Cart Items Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2" >
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Bag</h1>
                
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
    {cartItems.length === 0 ? (
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Your cart is empty! 🛒</h1>
            <p className="text-gray-600 mt-2">Add some products to start shopping.</p>
            <Link href='/'><button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
                Browse Products
            </button></Link>
        </div>
    ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {cartItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-14 justify-between border-b border-gray-200 py-4"
          >
            {/* Image and Info Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-md"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                <div className="mt-4 flex items-center justify-center sm:justify-start space-x-3 bg-white/10 backdrop-blur-lg p-2 rounded-xl shadow-lg">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-full shadow-md transition-all duration-300 hover:bg-red-600 active:scale-90"
                  >
                    <span className="text-xl font-bold">−</span>
                  </button>
  
                  <span className="text-lg font-semibold text-gray-200 bg-gray-800 px-3 py-1 rounded-lg shadow-inner">
                    {item.quantity}
                  </span>
  
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-full shadow-md transition-all duration-300 hover:bg-green-600 active:scale-90"
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
  
            {/* Price and Remove Button Section */}
            <div className="text-center sm:text-right w-full sm:w-auto">
              <p className="text-lg text-gray-800 font-semibold">MRP: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex justify-center sm:justify-end mt-2">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="relative px-5 py-2 bg-gradient-to-br from-red-500 to-rose-700 text-white rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-400 hover:scale-105 active:scale-95 transform-gpu group"
                >
                  <span className="absolute left-4 text-xl group-hover:animate-bounce">🗑</span>
                  <span className="relative font-semibold tracking-wide text-white/90 group-hover:text-white transition-all duration-300 block pl-6">
                    Remove
                  </span>
                  <span className="absolute inset-0 rounded-xl border-2 border-red-400/30 group-hover:border-red-400/60 transition-all duration-700"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
</div>
               
            </div>

            {/* Summary Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-fit">
                

                <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-800 font-semibold">${calculatedTotal()}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Estimated Delivery & Handling</p>
                    <p className="text-gray-800 font-semibold">Free</p>
                </div>
                <div className="flex justify-between mb-4 border-t border-gray-200 pt-4">
                    <p className="text-gray-800 font-bold">Total</p>
                    <p className="text-gray-800 font-bold">${calculatedTotal()}</p>
                </div>
                <button onClick={()=>handleProceed()} className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</div>
</AuthGuard>
)

};

export default Cart;
