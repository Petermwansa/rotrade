import React, { createContext, useState } from "react";
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext(null);

// the logic for the cart 
const getdefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
            
    }
    return cart; 
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getdefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1 }))
    }

    // we passed it using the context value so that we can access the cartItem data in any component 
    const contextValue = {all_product, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;