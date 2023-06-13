import React from 'react';
import Fade from "react-reveal/Fade";

function Products({ item, addProducts }) {
    return (
        <div>
            <Fade bottom cascade>
                <ul className='products'>
                    {
                        item.map((item) =>

                            <li key={item.id}>
                                <div className='product'>
                                    <img src={item.image} alt="" />
                                    <p> {item.title} </p>
                                    <div className="product-price">
                                        <button onClick={() => addProducts(item)}                      
                                        >
                                            Add to basket 
                                        </button>
                                        <div className='price'>{item.price}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </Fade>
        </div>
    )
}

export default Products
