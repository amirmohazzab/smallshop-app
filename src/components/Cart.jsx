import React from 'react';
import Fade from "react-reveal/Fade";

const Cart = ({ cartItems, removeProducts }) => {


    const itemPrice = cartItems.reduce((a,c) => a + c.qty * c.price,0);
    const totalPrice = itemPrice;

    return (
        <>
            {
                cartItems.length === 0 ?
                <div className="empty-price"> your shopping basket is empty </div> : 
                <div className="show-price"> you have {cartItems.length} product in your shopping basket </div>
            }
            <div className="cart-item">
                {
                    cartItems.map((item) => 
                        <Fade right>
                            <div className="product-item" key={item.id}>
                                <div className="product-detail">
                                    <img src={item.image} alt="" />
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="product-price">
                                    <div className="price">
                                        <span style={{marginRight: "5px", fontSize:"12px"}}>{item.price}</span>
                                        <span className='qty'> {item.qty} </span>
                                    </div>
                                    <div className="remove-item">
                                        <button onClick={() => removeProducts(item)}> delete </button>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                }
            </div>
            <div className="total-price">
                <div className="total-text">total price: </div>
                <div className="total">{totalPrice}</div>
            </div>

        </>
    )
}

export default Cart
