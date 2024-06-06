import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useModal } from '../context/ModalContext';

const ContactPage = () => {
    const { openModal } = useModal();

    useEffect(() => {
        openModal();
    }, [openModal]);

    return (
        <Layout>
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl mb-8">
                    Please use the contact form to get in touch with us.
                </p>
            </div>
        </Layout>
    );
};

export default ContactPage;
