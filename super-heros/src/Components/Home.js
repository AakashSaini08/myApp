import React from 'react'

function Home(props) {
  console.log("Home",props)
  return (
    <div className='item-detail'>
      <div className='cart'>
            <img className="cart-img" src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' alt='this is a cart'/>
      </div>
        <h2 className='hcomp'>Home Component</h2>
          <div className='wrapper-class'>
      
        <div className='iphone-image'>
            <img src='https://inventstore.in/wp-content/uploads/2022/09/iPhone-14-blue-320x320-1.webp' alt='this is a Iphone '/>
        </div>
        <div className='data-list'>
          <span>Iphone</span>
          <br/>
          <span>Price: $1000.00</span>
        </div>
        <div className='wrapper-btn'>
          <button className='cart-btn' 
          onClick={()=>
          props.addToCartHandler({price:1000,name:'Iphone'})
          }>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;