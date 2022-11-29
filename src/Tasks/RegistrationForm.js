import React from 'react';
import { useState } from 'react';
import '../styles/form.css'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({});

    const handleFormInputOnchange = (event, keyName) => {
       setFormData({
        ...formData,
         [keyName]: event.target.value
       })
    };
console.log('======', formData)
    return (
        <div className="form">
            <div className="form-body">
                <h1 style={{"text-align":"center"}}>Registration</h1>
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" onChange={(event) => handleFormInputOnchange(event, 'fname')} placeholder="First Name" value={formData.fname??''}/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" onChange={(event) => handleFormInputOnchange(event, 'lname')} className="form__input" placeholder="LastName"  value={formData.lname??''}/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input type="email" id="email" className="form__input" onChange={(event) => handleFormInputOnchange(event, 'email')} placeholder="Email" value={formData.email??''}/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" onChange={(event) => handleFormInputOnchange(event, 'password')} placeholder="Password" value={formData.password??''} />
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" onChange={(event) => handleFormInputOnchange(event, 'cpassword')} placeholder="Confirm Password" value={formData.cpassword??''}/>
                </div>
            
            <div className='checkbox'>
                <input className='form_input' type="checkbox" id='checkbox' onChange={(event) => handleFormInputOnchange(event, 'tnc')} value={formData.tnc??''} />
                <label className='form_label' htmlFor='checkbox'>I agree to the terms and conditions.</label>
            </div>
            <div className="button_btn">
                <button type="submit" className="btn" onClick={(event) => handleFormInputOnchange(event,'submit')} value={formData.submit??''}>Register</button>
            </div>
        </div>
        </div>
    )
}

export default RegistrationForm