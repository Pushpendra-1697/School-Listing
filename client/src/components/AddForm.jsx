'use client';

import React, { useState } from 'react'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    email: ''
}
const AddForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [isPhone, setIsPhone] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const handleChange = (event) => {
        let { name, value, type, files } = event.target;
        value = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.phone.length !== 10) {
            setIsPhone(true);
            return;
        } else {
            setIsPhone(false);
        }
        if (formData.email.includes('@gmail.com') === false) {
            setIsEmail(true);
            return;
        } else {
            setIsEmail(false);
        }

        console.log(formData);
    };


    const { name, email, address, city, state, phone } = formData;
    const phoneCSS = isPhone ? `border-2 border-gray-1000` : `border-2 border-green-900`;
    const emailCSS = isEmail ? `border-2 border-gray-1000` : `border-2 border-green-900`;
    return (
        <form className='flex flex-col gap-4 sm:gap-2' onSubmit={handleSubmit}>
            <label htmlFor='name' className='flex gap-1 items-center'>
                <input required placeholder='Enter School Name' type='text' name='name' value={name} onChange={handleChange} className={`text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900`} />
                <span className='text-gray-1000 text-[24px] sm:text-[22px]'>*</span>
            </label>
            <label htmlFor='image'>
                <input className='text-[22px] sm:text-[20px] rounded-md outline-none w-[70%] sm:w-[240px]' placeholder='Enter School Image' type='file' name='image' onChange={handleChange} />
            </label>
            <label htmlFor='address'>
                <input className='text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900' placeholder='Enter School Address' type='text' name='address' value={address} onChange={handleChange} />
            </label>
            <label htmlFor='city'>
                <input className='text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900' placeholder='Enter School City' type='text' name='city' value={city} onChange={handleChange} />
            </label>
            <label htmlFor='state'>
                <input className='text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900' placeholder='Enter School State' type='text' name='state' value={state} onChange={handleChange} />
            </label>
            <label htmlFor='phone' className='flex gap-1 items-center'>
                <input className={`text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none ${phoneCSS}`} required placeholder='Enter contact Number' type='number' name='phone' value={phone} onChange={handleChange} />
                <span className='text-gray-1000 text-[24px] sm:text-[20px]'>*</span>
            </label>
            <label htmlFor='email' className='flex gap-1 items-center'>
                <input className={`text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900 ${emailCSS}`} required placeholder='Enter Email ID' type='email' name='email' value={email} onChange={handleChange} />
                <span className='text-gray-1000 text-[24px] sm:text-[20px]'>*</span>
            </label>
            <input className='border p-2 sm:w-[240px] w-[70%] text-center rounded-md hover:bg-primary-10 focus:bg-green-800' type='submit' value={'ADD SCHOOL'} />
        </form>
    );
}

export default AddForm;