import React, { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import aboutUsImg from "../../static/images/about-us.jpg";
import servicesImg from "../../static/images/services.jpg";
import portfolioChristmas2023Img from "../../static/images/portfolio4.1.jpg";
import portfolioEaster2023Img from "../../static/images/portfolio2.1.jpg";
import portfolioCreativeCollectedImg from "../../static/images/portfolio3.1.jpg";
import heroBannerImg from "../../static/images/hero-banner.jpg";
import testimonial1Img from "../../Static/images/testimonial1.jpg";

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Bettencourt Creative Solutions</title>
        <meta name="description" content="Helping churches communicate the gospel through modern tech." />
      </Helmet>
      <section className="relative text-center">
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img src={heroBannerImg} alt="Hero Banner" className="w-full h-full object-cover absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Bettencourt Creative Solutions</h1>
            <p className="text-xl mb-8 text-white">
              We help churches communicate the timeless message of the gospel through modern technical solutions.
            </p>
            <a href="/services" className="bg-blue-500 text-white py-2 px-4 rounded-full">Our Services</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img src={aboutUsImg} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl mb-8">
              Bettencourt Creative Solutions specializes in providing expert consulting services in scenic design, lighting, video systems (both broadcast and in-room), and audio integration to help churches effectively communicate the gospel through modern technical solutions.
            </p>
            <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-full">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0 order-last md:order-first">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl mb-8">
              We offer a range of services to help churches communicate the gospel:
            </p>
            <ul className="list-disc list-inside mb-8">
              <li className="mb-4">Scenic Design Consulting</li>
              <li className="mb-4">Lighting Design</li>
              <li className="mb-4">Video Systems Integration (both broadcast and in-room)</li>
              <li className="mb-4">Audio Integration</li>
              <li className="mb-4">Volunteer-Friendly Systems</li>
              <li className="mb-4">Team Training</li>
            </ul>
            <Link to="/services" className="bg-blue-500 text-white py-2 px-4 rounded-full">Discover More</Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={servicesImg} alt="Our Services" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src={portfolioChristmas2023Img} alt="Christmas 2023 Project" className="rounded-lg shadow-lg" />
            <img src={portfolioEaster2023Img} alt="Easter 2023 Project" className="rounded-lg shadow-lg" />
            <img src={portfolioCreativeCollectedImg} alt="Creative Collected Project" className="rounded-lg shadow-lg" />
          </div>
          <p className="text-xl mb-8 mt-8">
            Take a look at some of our past projects and see how we've helped churches enhance their worship environments.
          </p>
          <Link to="/portfolio" className="bg-blue-500 text-white py-2 px-4 rounded-full">View Portfolio</Link>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial1Img} alt="Testimonial 1" className="w-16 h-16 rounded-full shadow-lg mr-4" />
                <p className="text-xl font-semibold">Client Name</p>
              </div>
              <p className="text-lg">"Bettencourt Creative Solutions transformed our worship experience. Highly recommended!"</p>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl mb-8">
            We'd love to hear from you. Reach out to us for any inquiries or to schedule a consultation.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={() => setShowModal(true)}>Contact Us</button>
        </div>
      </section>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Us</h3>
                    <div className="mt-2">
                      <form action="https://formsubmit.co/johnnybettencourt75@gmail.com" method="POST">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your name" required />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Your email" required />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Your Message</label>
                          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Send Message</button>
                          <button className="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
