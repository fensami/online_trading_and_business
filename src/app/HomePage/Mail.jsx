import React from 'react';

const Mail = () => {
    return (
        <div className='max-w-4xl mx-auto p-4 mt-24'>
            <h1 className='md:text-4xl text-2xl font-semibold md:font-bold mb-20 text-center'>Mail For Service</h1>

            <form action="" className='grid gap-5'>
                <input type="text" name="name" className='p-3 rounded-lg text-black' placeholder='Your Full Name' />
                <input type="email" name='email' className='p-3 rounded-lg text-black' placeholder='Your Email' required />
                <textarea name="message" rows="7" className='p-3 rounded-lg text-black' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary w-72'>Send Mail</button>
            </form>

        </div>
    );
};

export default Mail;