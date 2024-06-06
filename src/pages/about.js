import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const AboutPage = () => (
    <Layout>
        <Helmet>
            <title>About Us - Bettencourt Creative Solutions</title>
            <meta name="description" content="Learn more about Bettencourt Creative Solutions." />
        </Helmet>
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">About Us</h1>
                <p className="text-xl mb-8">
                    Bettencourt Creative Solutions is dedicated to helping churches effectively communicate the timeless message of the gospel through modern technical solutions. Our team has extensive experience in scenic design, lighting, video systems, and audio integration.
                </p>
            </div>
        </section>
    </Layout>
)

export default AboutPage
