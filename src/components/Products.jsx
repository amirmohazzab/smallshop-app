import React from 'react'

function Products({ item }) {
    return (
        <div>
            <ul className='products'>
                {
                    item.map((item) => (
                        <li key={item.id}>
                            <div className='product'>
                                <img src={item.image} alt="" />
                                <p> {item.title} </p>
                                <div className="product-price">
                                    <button>Add to basket </button>
                                    <div className='price'>{item.price}</div>
                                </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default Products
