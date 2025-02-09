import React,{useState} from 'react'
import './Navbar.css';
import Form from './Form';
import Footer from './Footer';
import Frame from './Frame';


function Navbar() {
  const [showFrame, setShowFrame] = useState<boolean>(false);
  const click=():void=>{
    setShowFrame(true); 
}
  return (
    <>
      <div className='navs'>
        <div className='ANN'>
          <span> ANN</span>
        </div>
        <div className='navbar'>
          <div>HOME</div>
          <div>PAGES</div>
          <span>BLOG</span>
          <span>SHOP</span>
          <span>CONTACT</span>

        </div>
      </div >
      <div className='firstimg'>
      <img src='./images/ANN.png' ></img></div>


      <div className='con'>
        <span>CONTACT US</span>
      </div>
      <div className='cool'>
        <span>Have a Cool Project? Get in </span>
        <span>Touch!</span>
      </div>
      <div className='img'>
        <img src='/images/face.jpg'></img>
      </div>
     
      <div className='dots'>
        <button onClick={click}>
        <img src='/images/4dots.png'></img>
        </button>
      </div>
      <div>
        <Footer/>
      </div>
      <div>
        <Form/>
      </div>
      {showFrame && (
        <div>
       <Frame/>
       </div>)} 

    











    </>
  )
}

export default Navbar