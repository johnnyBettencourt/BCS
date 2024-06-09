import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import jubileeImg from '../../static/images/portfolio1.1.jpg';
import easter2023DntnImg from '../../static/images/portfolio2.1.jpg';
import easter2023MesaImg from '../../static/images/portfolio2.2.jpg';
import creativeCollectedImg1 from '../../static/images/portfolio3.1.jpg';
import creativeCollectedImg2 from '../../static/images/portfolio3.2.jpg';
import christmas2023Img1 from '../../static/images/portfolio4.1.jpg';
import christmas2023Img2 from '../../static/images/portfolio4.2.jpg';
import christmas2023Img3 from '../../static/images/portfolio4.3.jpg';
import christmas2023Img4 from '../../static/images/portfolio4.4.jpg';
import youthCampImg from '../../static/images/portfolio5.1.jpg';
import rainSystemImg from '../../static/images/portfolio6.1.jpg';
import easter2021Img1 from '../../static/images/portfolio7.1.jpg';
import easter2021Img2 from '../../static/images/portfolio7.2.jpg';

const PortfolioPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Portfolio - Bettencourt Creative Solutions</title>
                <meta name="description" content="Explore our portfolio of projects, showcasing our expertise in scenic design, lighting, video systems, and audio integration." />
            </Helmet>
            <section className="text-center py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
                    <p className="text-xl mb-8">
                        Explore our portfolio of projects, showcasing our expertise in scenic design, lighting, video systems, and audio integration.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                                <div>
                                    <img src={christmas2023Img1} alt="Christmas 2022 - 1" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={christmas2023Img2} alt="Christmas 2022 - 2" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={christmas2023Img3} alt="Christmas 2022 - 3" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={christmas2023Img4} alt="Christmas 2022 - 4" className="rounded-lg shadow-lg mb-4" />
                                </div>
                            </Carousel>
                            <h2 className="text-2xl font-bold mb-2">City of Grace, Phoenix and Mesa AZ</h2>
                            <h3 className="text-xl mb-2">Christmas 2022</h3>
                            <p className="text-lg">
                                For Christmas 2022, a range of special effects were utilized, including low-lying fog illuminated by Jolt panel FX for a glowing effect. Beam fixtures enhanced the atmosphere, and mirror balls created a stunning starry effect.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <img src={rainSystemImg} alt="City of Grace, Phoenix and Mesa AZ" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-2xl font-bold mb-2">City of Grace, Phoenix and Mesa AZ</h2>
                            <h3 className="text-xl mb-2">Christmas 2023</h3>
                            <p className="text-lg">
                                For Christmas 2023, a custom rain effects system was designed and built to simulate rain on stage. This involved constructing a rain system and a trough to safely catch the water. The project also featured low-lying fog and additional rentals to enhance the atmosphere.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                                <div>
                                    <img src={easter2021Img1} alt="Easter 2021 - 1" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={easter2021Img2} alt="Easter 2021 - 2" className="rounded-lg shadow-lg mb-4" />
                                </div>
                            </Carousel>
                            <h2 className="text-2xl font-bold mb-2">Hillsong Phoenix, Mesa AZ</h2>
                            <h3 className="text-xl mb-2">Easter 2021</h3>
                            <p className="text-lg">
                                For Easter 2021, a 25' steel cross frame was designed and built, lined with acrylic and filled with LED tape. This impressive installation was a focal point of the event, creating a striking visual impact.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <img src={youthCampImg} alt="Youth Camp July 2021" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Hillsong Phoenix, Prescott AZ</h2>
                            <h3 className="text-xl mb-2">Youth Camp July 2021</h3>
                            <p className="text-lg">
                                At Youth Camp 2021, an extensive lighting rig was rented, featuring Ayrton Magic Blade FX, Quantum Profiles, VL Nitros, and Mac Auras, along with a Lacoustics K series PA. This week-long camp provided an immersive experience where students encountered God each night.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                                <div>
                                    <img src={easter2023DntnImg} alt="City of Grace, Phoenix AZ - Downtown" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={easter2023MesaImg} alt="City of Grace, Phoenix AZ - Mesa" className="rounded-lg shadow-lg mb-4" />
                                </div>
                            </Carousel>
                            <h2 className="text-2xl font-bold mb-2">City of Grace, Phoenix and Mesa AZ</h2>
                            <h3 className="text-xl mb-2">Easter 2023</h3>
                            <p className="text-lg">
                                For Easter 2023, sets were designed and implemented for both the Downtown and Mesa campuses. The Downtown campus featured custom-cut steel gobos from Rosco projecting visuals on the walls, complemented by batten fixtures aligned in a row on stage to create a pixelated lighting effect. The Mesa campus had an LED cross and used Jolt FX Bars to achieve a similar pixelated uplight effect on a larger scale.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                                <div>
                                    <img src={creativeCollectedImg1} alt="Hillsong Phoenix, Mesa AZ - 1" className="rounded-lg shadow-lg mb-4" />
                                </div>
                                <div>
                                    <img src={creativeCollectedImg2} alt="Hillsong Phoenix, Mesa AZ - 2" className="rounded-lg shadow-lg mb-4" />
                                </div>
                            </Carousel>
                            <h2 className="text-2xl font-bold mb-2">Hillsong Phoenix, Mesa AZ</h2>
                            <h3 className="text-xl mb-2">Creative Collected Spring 2022</h3>
                            <p className="text-lg">
                                During the Creative Collected spring season in 2022, a scrim was sewn and hung to act as a projector screen and backdrop for the in-the-round style worship. Quasar tube-inspired LED set pieces were created to help separate the “stage” from the crowd, with downlighting from the ceiling further defining the stage area, resulting in an immersive and worshipful atmosphere.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <img src={jubileeImg} alt="Jubilee Church, Paradise, CA" className="rounded-lg shadow-lg mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Jubilee Church, Paradise, CA</h2>
                            <h3 className="text-xl mb-2">Set Design</h3>
                            <p className="text-lg">
                                In 2016, a set design was implemented for Jubilee Church using corrugated plastic sheets cut into panels on monofilament. This setup allowed the pieces to rotate freely with airflow, creating a dynamic feel. The set was uplit with batten fixtures to enhance depth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PortfolioPage;
