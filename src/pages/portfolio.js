import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const PortfolioPage = () => (
    <Layout>
        <Helmet>
            <title>Our Portfolio - Bettencourt Creative Solutions</title>
            <meta name="description" content="Explore the portfolio of Bettencourt Creative Solutions." />
        </Helmet>
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
                <p className="text-xl mb-8">
                    Take a look at some of our past projects and see how we've helped churches enhance their worship environments.
                </p>
                {/* Add project showcase here */}
            </div>
        </section>
    </Layout>
)

export default PortfolioPage
