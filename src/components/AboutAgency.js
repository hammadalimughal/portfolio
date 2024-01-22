import { Col, Row } from 'antd'
import React from 'react'
import aboutAgency from '../images/about-agency.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../images/clients/1.png'
import client2 from '../images/clients/2.png'
import client3 from '../images/clients/3.png'
import client4 from '../images/clients/4.png'
import 'swiper/css';

const AboutAgency = () => {
    return (
        <>
            <section className="about-section">
                <div className="hr-seperator"></div>
                <div className="container">
                    <div className="wrapper">
                        <Row style={{
                            alignItems: 'center'
                        }} gutter={100}>
                            <Col span={14}>
                                <div className="left-col content">
                                    <h2 className="theme-h2">We encourage you to permanent cooperation.</h2>
                                    <ul className="agency-ul">
                                        <li>We advise and consult with designers. We never use ready-made templates, and they are individually tailored to your intentions and goals you want to achieve.</li>
                                        <li>Let's start with filling in our Brief and then we will contact you with specific proposals. We create logos and branding for companies.</li>
                                    </ul>
                                    <div className="our-clients">
                                        <h5 className="theme-h3 text-center">Our <span>Clients</span></h5>
                                        <Swiper
                                            slidesPerView={4}
                                            spaceBetween={30}
                                        >
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client1} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client2} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client3} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client4} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client1} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client2} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client3} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="client-img">
                                                    <img src={client4} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </Col>
                            <Col className='border-left-about about-agency-right' span={10}>
                                <div className="content right-col">
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={aboutAgency} alt="" />
                                    </div>
                                    <h5 className="theme-h5">About Agency — </h5>
                                    <h3 className="theme-h3">A modern agency with new solutions to creating website.</h3>
                                    <h6 className="theme-emp">A creative agency that creates new solutions for websites thanks to the new system.</h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutAgency
