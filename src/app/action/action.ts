export interface Product{
  totalPrice: number;
  quantity: number;
    imageUrl: string | undefined;
    _id:string ,
    title:string,
    _type :"products"
     slug:{
        _type:"slug"
        current:string;
     },
     price:number,
     pricewithoutdiscount:number,
     badge:string,
     image:string,
     description:string,
     inventory:number

}
export const addToCart = (product:Product) => {
    if (!product || !product._id) {
        console.error("❌ Product ID is missing!", product);
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    console.log("Before Adding:", cart);

    const existingProductIndex = cart.findIndex((item: { _id: string; }) => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1;
    } else {
        cart.push({ ...product, inventory: 1 });
    }

    console.log("After Adding:", cart);
    
    localStorage.setItem("cart", JSON.stringify(cart));
};


  



export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}





































