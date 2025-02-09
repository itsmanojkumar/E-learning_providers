import React from 'react'
import './Footer.css';


function Footer() {
    return (
        <>

            <div className='footer'>
                <div className='H'>
                    <span>ANN</span>
                    <img src='./images/ANN.png'></img>
                </div>
                <div className='h2'>
                    <span>AI art tips from the finest </span>
                    <span>ANN artists.</span>
                </div>
            </div>
            <div className='Social'>
                <div className='soc'>
                    <span>Socials</span>
                        <span><a href='' >Facebook</a></span>
                        <span><a href=''>Twitter</a></span>
                        <span><a href=''>Dribble</a></span>
                        <span><a href=''>Instagram</a></span>
                </div>
                <div className='menu'>
                    <span>Menu</span>
                    
                        <span><a href=''>Home</a></span>
                        <span><a href=''>About</a></span>
                        <span><a href=''>Services</a></span>
                        <span><a href=''>Shop</a></span>
                        <span><a href=''>Contacts</a></span>
                 
                </div>
                <div className='hello'>
                    <span>Say Hello</span>
                
                        <span><a href=''>info@gmail.com</a></span>
                </div>
            </div>
            <div >
                <div className='inputs'>
                    <span>NEWSLETTER SIGN UP</span>
                </div>
                <div className='agree'>
                    <span>I agree to the Privacy Policy.<img src='./images/Checkbox.png'></img></span>
                </div>
            </div>
            <div className='borderlast'></div>
            <div className='borderside'></div>
            <div className='lastinput'>
                <input type='text' placeholder='ENTER YOUR EMAIL ADDRESS'></input>
                {/* <img src='./images/Arrow.png' ></img> */}
                <img src='./images/Arrowoutside.png'></img>
                
            </div>
            <div className='last'>
                <img src='./images/Arrow.png' ></img>

                
            </div>
            <div className='end'>
                <span>AxiomThemes</span>
                <span>© 2023. All Rights Reserved.</span>
            </div>



        </>
    )
}

export default Footer