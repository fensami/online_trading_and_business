import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '../HomePage/Footer';

const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer />
        </div>
    );
};

export default WithLayout;