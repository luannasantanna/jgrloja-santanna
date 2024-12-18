import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useCart() {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
    }

    return context;
}

export default function CartProvider( {children} ) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if(existingItem) {
            setCart(cart.map(cartItem => cartItem.id === item.id ? {
                ...cartItem, qta: cartItem.qta + item.qta
            } : cartItem ));
        } else {
            setCart([...cart, item]);
        }
    }

    function cartQta() {
        return cart.reduce((acc, item) => acc + item.qta, 0);
    }

    function cartTotal() {
        return cart.reduce((acc, item) => acc + (item.qta * item.price), 0);
    }

    function removeItemCart(itemId) {
        const updateCart = cart.filter(item => item.id !== itemId);
        setCart(updateCart);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, cartQta, cartTotal, removeItemCart}}>
            {children}
        </CartContext.Provider>
    );
}
