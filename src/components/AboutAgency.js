import { Col, Row } from 'antd'
import React from 'react'
// import aboutAgency from '../images/about-agency.avif'
import aboutAgency from '../images/me-3.jpg'
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
                        }} gutter={{ lg: 100, xs: 0 }}>
                            <Col lg={14} xs={24}>
                                <div className="left-col content">
                                    <h2 className="theme-h2">My Dedication to Technological Revolution</h2>
                                    <ul className="agency-ul">
                                        <li>I believe that technology has the potential to transform people's lives and reshape the world around us. I'm dedicated to changing the world, one line of code at a time, by using the MERN stack to its greatest potential and embracing the spirit of innovation.</li>
                                        <li>Join me on this exciting journey as we build the future one digital experience at a time.</li>
                                    </ul>
                                    <div className="our-clients">
                                        <h5 className="theme-h3 text-center">My <span>Clients</span></h5>
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
                            <Col className='border-left-about about-agency-right' lg={10} xs={24}>
                                <div className="content right-col">
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={aboutAgency} alt="" />
                                    </div>
                                    <h5 className="theme-h5">About Agency — </h5>
                                    <h3 className="theme-h3">Why Collaborate with Me?</h3>
                                    <h6 className="theme-emp">With a passion for problem-solving and a commitment to excellence, I am dedicated to exceeding client expectations. Partner with Hammad to turn your digital aspirations into reality and stay ahead in today's competitive landscape.</h6>
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
