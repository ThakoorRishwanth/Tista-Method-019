import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../styles/Registration/registration.css';
import immg from '../../../image/immg.jpg';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password does not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  }
  return (
    <>
    <div className='registration1'>
        <h1>THE NEW HARLEY-DAVIDSON X<sup>TM</sup>440. BOOK NOW.</h1>
        <img src={immg} alt="img"/>
    </div>
    <div className='registration2'>
      <div className='hel1'>
        <h1>EXPERIENCE</h1>
        <h1>THE GREATEST KIND</h1>
        <h1>OF FREEDOM IN</h1>
        <h1>THE WORLD.</h1>
        <h4>FILL IN YOUR DETAILS AND OUR TEAM</h4>
        <h4>WILL CONNECT WITH YOU.</h4>
      </div>
    <div className='re1'>
        <form onSubmit={handleSubmit} className='fr1'>
          <div>
            <label className='la1'>Username:</label>
            <input
              type="text"
              name="username"
              placeholder='Username'
              autoComplete='off'
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder='example@gmail.com'
              autoComplete='off'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder='******'
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder='******'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}
