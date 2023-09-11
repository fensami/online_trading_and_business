import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import Swal from 'sweetalert2';

const Mail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b20uczb', 'template_mm9mocf', form.current, 'Z_mUev9W9x5mtXq3e')
            .then((result) => {
                // e.preventDefault();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='max-w-3xl mx-auto p-4 mt-24'>
            <h1 className='md:text-4xl text-2xl font-semibold md:font-bold mb-15 text-center'>Mail For Service</h1>
            <p className='text-center mb-20 mt-10'>This mail is for knowing somthing without account. If you have an account you can contact this site expertise.</p>
            <form ref={form} className='grid gap-5' onSubmit={sendEmail}>
                <input type="text" name="name" className='p-3 rounded-lg text-black' placeholder='Your Full Name' />
                <input type="email" name='email' className='p-3 rounded-lg text-black' placeholder='Your Email' required />
                <textarea name="message" rows="7" className='p-3 rounded-lg text-black' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-outline btn-error w-72'>Send Mail</button>
            </form>

        </div>
    );
};

export default Mail;