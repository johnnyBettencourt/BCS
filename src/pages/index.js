import * as React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Bettencourt Creative Solutions</title>
      <meta name="description" content="Helping churches communicate the gospel through modern tech." />
    </Helmet>
    <section className="text-center py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Bettencourt Creative Solutions</h1>
        <p className="text-xl mb-8">
          We help churches communicate the timeless message of the gospel through modern technical solutions.
        </p>
        <a href="/services" className="bg-blue-500 text-white py-2 px-4 rounded-full">Our Services</a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
