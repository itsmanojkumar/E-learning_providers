import React from 'react'
import './Frame.css'

function Frame() {
  return (
    <>
      <div className='borderss'>
        <input type='text' placeholder='search' ></input>
        <div className='align'>
         <a href=''>MyCart</a>
         <a href=''>Buy Theme</a>
         <a href=''>Our Best Sellers</a>
         <a href=''>Hide panel</a>
        </div> 
      


        <div className='frameimg'>
          <img src='./images/cart.png'></img>
          <img src='./images/buytheme.png'></img>
          <img src='./images/ourbestsellers.png'></img>
          <img src='./images/Hidepanel.png'></img>
        </div>
        <div className='search'>
          
        </div>
      </div>
    </>

  )
}

export default Frame