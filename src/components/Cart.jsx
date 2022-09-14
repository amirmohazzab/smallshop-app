import React from 'react'

function Cart() {
  return (
    <>
    <div className="empty-price">shopping basket is empty</div>
    <div className="cart-item">
        <div className="product-item">
            <div className="product-detail">
                <img src="images/mobile1.jpg" alt=""/>
                <h2>First product</h2>
            </div>
            <div className="number-product">
                <div className='numb-product-plus'>+</div>
                <div className='number'> 1 </div>
                <div className='numb-product-minus'>-</div>   
            </div>
            <div className="product-price">
                <div className="price">
                    <span>10000</span>
                    <span className='qty'> buy 1</span>
                </div>
                <div className="remove-item">
                    <button> delete </button>
                </div>
            </div>
        </div>
    </div>
    <div className="total-price">
        <div className="total-text">total price: </div>
        <div className="total">1500000</div>
    </div>
      
    </>
  )
}

export default Cart
