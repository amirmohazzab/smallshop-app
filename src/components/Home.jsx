import React, { useState } from 'react'
import Cart from "./Cart";
import Filter from "./Filter";
import Products from './Products';
import data from '../data.json';
import { useEffect } from 'react';

const getData = () => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
}

function Home() {

    
    const [item, setItem] = useState(data.products);
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("");
    const [cartItems, setCartItems] = useState(getData());
    console.log(cartItems);
    
    const sortProducts = (event) => {
        setSort(event.target.value);
        if (sort === "asc") {
            setItem(data.products.sort((a,b) => (a.id < b.id ? 1 : -1)));
        }
        if (sort === "desc"){
            setItem(data.products.sort((a,b) => (a.id > b.id ? 1 : -1)));
        }
    }

    const filterProducts = (event) => {
        if (event.target.value === ""){
            setBrand(event.target.value);
            setItem(data.products);
        }else{
            setBrand(event.target.value);
            setItem(data.products.filter((product) => product.availableBrand.indexOf(event.target.value) >=0 ));
        }
    }

    const addProducts = (product) => {
        const exist = cartItems.find((element) => element.id === product.id);

        if (exist){
            setCartItems(
                cartItems.map((element) => element.id === product.id ? {...exist, qty: exist.qty+1}: element)
            )
        }else{
            setCartItems([...cartItems, {...product, qty:1}]);
        }    
    }

    const removeProducts = (product) => {
        const exist = cartItems.find((element) => element.id === product.id);

        if (exist.qty === 1){
            setCartItems(
                cartItems.filter((element) => element.id !== product.id)
            )
        }else{
            setCartItems(
                cartItems.map((element) => element.id === product.id ? {...exist, qty: exist.qty-1}: element)
            )
        }    
    }


    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems]);


    return (
        <div className="container">
            <header>
                <a href=""> Small Shop</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter 
                        count={item.length}
                        sortProducts={sortProducts}
                        brand={brand}
                        filterProducts={filterProducts}
                        />
                        <Products 
                        item={item} 
                        addProducts = {addProducts}
                        />
                    </div>
                    <div className="sidebar">
                        <Cart
                        cartItems={cartItems} 
                        removeProducts={removeProducts}
                        />
                    </div>
                </div>
            </main>
            <footer>
                Design and developement by you and me
            </footer>
        </div>
    )
}

export default Home
