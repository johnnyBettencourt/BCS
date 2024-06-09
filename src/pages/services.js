import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import scenicDesign from "../../Static/images/scenic-design.jpg";
import lightingDesign from "../../Static/images/lighting-design.jpg";
import videoSystems from "../../Static/images/video-systems.jpg";
import audioIntegration from "../../Static/images/audio-integration.jpg";
import volunteers from "../../Static/images/volunteers.jpg";
import teamTraining from "../../Static/images/team-training.jpg";

const ServicesPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Our Services - Bettencourt Creative Solutions</title>
                <meta name="description" content="Discover the range of services offered by Bettencourt Creative Solutions to help churches communicate the gospel through modern technical solutions." />
            </Helmet>
            <section className="text-center py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl mb-8">
                        We offer a range of services to help churches communicate the gospel effectively:
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="w-full md:w-1/2">
                            <img src="https://placehold.co/600x400" alt="Scenic Design Consulting" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                            <h2 className="text-4xl font-bold mb-4">Scenic Design Consulting</h2>
                            <p className="text-xl mb-8">
                                Custom designs to enhance worship spaces, creating visually engaging environments that support the communication of the gospel.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="w-full md:w-1/2 md:order-2">
                            <img src="https://placehold.co/600x400" alt="Lighting Design" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0 md:order-1">
                            <h2 className="text-4xl font-bold mb-4">Lighting Design</h2>
                            <p className="text-xl mb-8">
                                Professional lighting setup and optimization, tailored to each church's unique worship style and needs, ensuring effective visual communication.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="w-full md:w-1/2">
                            <img src="https://placehold.co/600x400" alt="Video Systems Integration" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                            <h2 className="text-4xl font-bold mb-4">Video Systems Integration</h2>
                            <p className="text-xl mb-8">
                                Integration of both broadcast and in-room video systems to improve worship presentations, enhancing the overall experience and engagement of the congregation.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="w-full md:w-1/2 md:order-2">
                            <img src="https://placehold.co/600x400" alt="Audio Integration" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0 md:order-1">
                            <h2 className="text-4xl font-bold mb-4">Audio Integration</h2>
                            <p className="text-xl mb-8">
                                Comprehensive audio system setup and consultation, including basic system integration and collaboration with audio specialists for tuning and mixing.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="w-full md:w-1/2">
                            <img src="https://placehold.co/600x400" alt="Volunteer-Friendly Systems" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                            <h2 className="text-4xl font-bold mb-4">Volunteer-Friendly Systems</h2>
                            <p className="text-xl mb-8">
                                Development of systems that are easy for volunteers to use, ensuring sustainable and efficient operation of technical elements.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 md:order-2">
                            <img src={teamTraining} alt="Team Training" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0 md:order-1">
                            <h2 className="text-4xl font-bold mb-4">Team Training</h2>
                            <p className="text-xl mb-8">
                                Training local teams on the use of production equipment and systems, fostering self-sufficiency and confidence in managing worship services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServicesPage;
