import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const ContactPage = () => (
    <Layout>
        <Helmet>
            <title>Contact Us - Bettencourt Creative Solutions</title>
            <meta name="description" content="Get in touch with Bettencourt Creative Solutions." />
        </Helmet>
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl mb-8">
                    We'd love to hear from you. Reach out to us for any inquiries or to schedule a consultation.
                </p>
                <form className="max-w-lg mx-auto">
                    <label className="block mb-4">
                        <span className="text-gray-700">Name</span>
                        <input type="text" className="mt-1 block w-full" placeholder="Your name" />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Email</span>
                        <input type="email" className="mt-1 block w-full" placeholder="Your email" />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Message</span>
                        <textarea className="mt-1 block w-full" rows="3" placeholder="Your message"></textarea>
                    </label>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    </Layout>
)

export default ContactPage
