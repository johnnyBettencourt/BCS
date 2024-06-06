import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>About Us - Bettencourt Creative Solutions</title>
                <meta name="description" content="Learn more about Bettencourt Creative Solutions and our mission to help churches communicate the gospel through modern technical solutions." />
            </Helmet>
            <section className="text-center py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl mb-8">
                        Bettencourt Creative Solutions specializes in providing expert consulting services in scenic design, lighting, video systems, and audio integration to help churches effectively communicate the gospel through modern technical solutions.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <img src="https://placehold.co/600x400" alt="Our Team" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                        <p className="text-xl mb-8">
                            Our mission is to partner with churches to effectively communicate the timeless message of the gospel through modern technical solutions. We strive to understand each church's unique vision and resources, providing tailored solutions that enhance their ability to share the gospel and create an atmosphere of worship where the Holy Spirit can work in the lives of individuals.
                        </p>
                        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                        <p className="text-xl mb-8">
                            We envision a world where churches of all sizes can utilize modern technology to enhance their worship services, making a profound impact on their communities and beyond.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
