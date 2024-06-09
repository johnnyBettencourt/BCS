import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import teamImg from '../../static/images/about-us-page.jpg';  // Replace with the chosen image

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
                        <img src={teamImg} alt="Our Team" className="rounded-lg shadow-lg" />
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
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                    <p className="text-xl mb-8">
                        Bettencourt Creative Solutions was founded by John Bettencourt, who was born and raised in Paradise, California, in Butte County. Growing up in the church, John felt a strong call to ministry from a young age. During high school, he fell in love with live production, which led him to graduate from Inspire School of Arts and Science with an outstanding achievement in recording arts.
                    </p>
                    <p className="text-xl mb-8">
                        John pursued higher education at Grand Canyon University, where he graduated with a bachelor's degree in worship arts with an emphasis in production and media ministry. He then spent two and a half years on staff at Hillsong Phoenix, which later became City of Grace, gaining a strong understanding of visual design, lighting, scenic design, and video production.
                    </p>
                    <p className="text-xl mb-8">
                        In November 2023, John's wife gave birth to their beautiful daughter, Ella. They decided to move back to Northern California, where John is originally from, to be close to family and have the support to grow their family unit. Since moving back, John has been seeking ways to continue using his skills, gifts, and passion for the local church.
                    </p>
                    <p className="text-xl mb-8">
                        This led to the founding of Bettencourt Creative Solutions (BCS), with the goal of helping churches come together on the gospel and use modern technical solutions to communicate this timeless message through timely mediums. John is passionate about loving God and others, seeing people come to Christ, and helping churches fulfill the Great Commission by effectively discipling and equipping others to disciple.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
