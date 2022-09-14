import React from 'react'

function Products() {
  return (
    <div>
        <ul className='products'>
            <li>
                <div className='product'>
                    <img src="images/mobile1.jpg" alt=""/>
                    <p> first roduct</p>
                    <div className="product-price">
                        <button>Add to basket </button>
                        <div className='price'>160000</div>
                    </div>

                </div>

            </li>
        </ul>
      
    </div>
  )
}

export default Products
