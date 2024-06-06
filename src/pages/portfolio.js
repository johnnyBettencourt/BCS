import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const PortfolioPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Portfolio - Bettencourt Creative Solutions</title>
                <meta name="description" content="Explore our portfolio of past projects and see how Bettencourt Creative Solutions has helped churches enhance their worship environments." />
            </Helmet>
            <section className="text-center py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
                    <p className="text-xl mb-8">
                        Take a look at some of our past projects and see how we've helped churches enhance their worship environments.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <img src="https://placehold.co/600x400" alt="Project 1" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-4xl font-bold mb-2">Project 1</h2>
                            <p className="text-xl mb-8">Description of Project 1</p>
                        </div>
                        <div>
                            <img src="https://placehold.co/600x400" alt="Project 2" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-4xl font-bold mb-2">Project 2</h2>
                            <p className="text-xl mb-8">Description of Project 2</p>
                        </div>
                        <div>
                            <img src="https://placehold.co/600x400" alt="Project 3" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-4xl font-bold mb-2">Project 3</h2>
                            <p className="text-xl mb-8">Description of Project 3</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PortfolioPage;
