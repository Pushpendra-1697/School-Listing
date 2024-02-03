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
const AddForm = ({ BACKEND_BASE_URL }) => {
    const [formData, setFormData] = useState(initialState);
    const [isPhone, setIsPhone] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        let { name, value, type, files } = event.target;
        value = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.phone.length !== 10) {
            setIsPhone(true);
            return;
        } else {
            setIsPhone(false);
        }
        if (formData.email.includes('@') === false) {
            setIsEmail(true);
            return;
        } else {
            setIsEmail(false);
        }

        // School Image should upload in 'schoolImages' directory / folder
        fetch(`${BACKEND_BASE_URL}/school/upload`, {
            method: 'POST',
            body: new FormData(document.getElementById('form-data')),
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));


        const data = new FormData();
        data.append("file", formData.image);
        data.append("upload_preset", "ml_default");
        data.append("cloud_name", "djib5oxng");
        // cloudinary setup
        fetch("https://api.cloudinary.com/v1_1/dd9cmhunr/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('cloudinary', data.url);
            })
            .catch((err) => {
                console.log(err);
            });

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            addSchoolFunc();
        }, 4000);
    };

    async function addSchoolFunc() {
        const imageURL = localStorage.getItem('cloudinary');
        formData.image = imageURL;
        try {
            let res = await fetch(`${BACKEND_BASE_URL}/school/store`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            res = await res.json();
            alert(res.msg);
            setFormData(initialState); // reset / empty the form data
        } catch (err) {
            console.log(err.message);
        };
    };

    const { name, email, address, city, state, phone } = formData;
    const phoneCSS = isPhone ? `border-2 border-gray-1000` : `border-2 border-green-900`;
    const emailCSS = isEmail ? `border-2 border-gray-1000` : `border-2 border-green-900`;
    return (
        <form id='form-data' className='flex flex-col gap-4 sm:gap-2' onSubmit={handleSubmit} encType='multipart/form-data'>
            <label htmlFor='name' className='flex gap-1 items-center'>
                <input required placeholder='Enter School Name' type='text' name='name' value={name} onChange={handleChange} className={`text-[22px] sm:text-[20px] px-2 py-1 rounded-md outline-none border border-green-900`} />
                <span className='text-gray-1000 text-[24px] sm:text-[22px]'>*</span>
            </label>
            <label htmlFor='image'>
                <input required className='text-[22px] sm:text-[20px] rounded-md outline-none w-[70%] sm:w-[240px]' placeholder='Enter School Image' accept="image/*" type='file' name='image' onChange={handleChange} />
                <span className='text-gray-1000 text-[24px] sm:text-[20px]'>*</span>
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
            <input className='border p-2 sm:w-[240px] w-[70%] text-center rounded-md hover:bg-primary-10 focus:bg-green-800' type='submit' value={loading ? 'Loading...' : 'ADD SCHOOL'} />
        </form>
    );
}

export default AddForm;