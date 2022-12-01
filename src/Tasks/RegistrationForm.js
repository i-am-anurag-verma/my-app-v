import React from 'react';
import { useState } from 'react';
import FormElement from '../component/form/formElement';
import Button from '../component/form/Button';
import '../styles/form.css'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({});

    const handleFormInputOnchange = (event, keyName) => {
        setFormData({
            ...formData,
            [keyName]: event.target.value
        })
    };
    
    return (
        <div className="form">
            <div className="form-body">
                <h1 style={{ "textAlign": "center" }}>Registration</h1>
                <FormElement 
                   className="username"
                   htmlFor="firstName"
                   onChange={(event) => handleFormInputOnchange(event, 'fname')} 
                   placeholder="First Name"
                   labelText="First Name"
                   value={formData.fname??''}
                   required
                />
                <FormElement 
                   className="lastName"
                   htmlFor="LastName"
                   onChange={(event) => handleFormInputOnchange(event, 'lname')} 
                   placeholder="Last Name"
                   labelText="Last Name"
                   value={formData.lname??''}
                   required
                />
                <FormElement 
                   className="email"
                   htmlFor="email"
                   onChange={(event) => handleFormInputOnchange(event, 'fname')} 
                   placeholder="Email"
                   labelText="Email"
                   value={formData.email??''}
                   required
                />
                <FormElement 
                   className="password"
                   htmlFor="password"
                   onChange={(event) => handleFormInputOnchange(event, 'password')} 
                   placeholder="Password"
                   labelText="Password"
                   value={formData.password??''}
                required
                />
                <FormElement 
                   className="confirm-password"
                   htmlFor="cpassword"
                   onChange={(event) => handleFormInputOnchange(event, 'cpassword')} 
                   placeholder="Confirm Password"
                   labelText="Confirm Password"
                   value={formData.cpassword??''}
                   required
                />

                <div className="checkbox">
			<label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a></label>
		</div>
                <Button>Register Now</Button>
            </div>
        </div>
    )
}

export default RegistrationForm