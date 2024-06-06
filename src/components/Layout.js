import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <ContactModal />
        </>
    );
};

export default Layout;
