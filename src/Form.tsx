import React, { useState } from 'react'
import './Form.css';


function Form() {
    const [Name,setName]=useState<string>("")
    const [Phoneno,setPhoneno]=useState<string>("")
    const [Email,setEmail]=useState<string>("")
    const [Subject,setSubject]=useState<string>("")
    const [How,setHow]=useState<string>("")
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);}
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneno(event.target.value);}
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);}
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);}
    const handleHowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHow(event.target.value);}
    
  return (
    <div className='border'>
        <form>
          <div className='Formgroup'>
            <img src='/images/Name.png'></img>
            <label htmlFor="Name">NAME:</label>
            <input type='text' id='Name' name='name' value={Name} onChange={handleInputChange}></input></div>
          <div className='Formgroup'> 
            <img src='/images/Phone.png'></img>
            <label htmlFor="Phone">PHONENO:</label>
            <input type='text' id='Phone' name='Phone' value={Phoneno} onChange={handlePhoneChange}></input></div>
          <div className='Formgroup'>
            <img src='/images/Email.png'></img>
            <label htmlFor="Email">EMAIL:</label>
            <input type='text' id='Email' name='Email' value={Email} onChange={handleEmailChange}></input></div>
          <div className='Formgroup'>
            <img src='/images/Ellipse.png'></img>
            <label htmlFor="Subject">SUBJECT:</label>
            <input type='text' id='Subject' name='Subject' value={Subject} onChange={handleSubjectChange}></input></div>
          <div className='Formgroup'>
            <img src='/images/How.png'></img>
            <label htmlFor="How" style={{width:'155px',height:'46px'}} >HOW CAN I HELP YOU:</label>
            <input type='text' id='How' name='How' value={How} onChange={handleHowChange}></input></div>

        </form>
        <div className='eclipseimg'>
          <img src='/images/ex.png'></img>
        </div>

        <div className='get'>
          <span>Get in Touch</span>
        </div>
    </div>
  )
}

export default Form;