import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const ServicesPage = () => (
    <Layout>
        <Helmet>
            <title>Our Services - Bettencourt Creative Solutions</title>
            <meta name="description" content="Discover the services offered by Bettencourt Creative Solutions." />
        </Helmet>
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl mb-8">
                    We offer a range of services to help churches communicate the gospel:
                </p>
                <ul className="list-disc list-inside">
                    <li className="mb-4">Scenic Design Consulting</li>
                    <li className="mb-4">Lighting Design</li>
                    <li className="mb-4">Video Systems Integration (both broadcast and in-room)</li>
                    <li className="mb-4">Audio Integration</li>
                    <li className="mb-4">Volunteer-Friendly Systems</li>
                    <li className="mb-4">Team Training</li>
                </ul>
            </div>
        </section>
    </Layout>
)

export default ServicesPage
