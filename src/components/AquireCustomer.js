import { Col, Row } from 'antd'
import React from 'react'
import aquire from '../images/me-2.jpg'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const AquireCustomer = () => {
    return (
        <>
            <section className="aquire-customer">
                <div className="container">
                    <Row style={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }} gutter={[30,30]}>
                        <Col lg={14}>
                            <h2 className="theme-h2">Why Choose Hammad for Mobile Solutions</h2>
                            <p className="theme-p">Hammad’s expertise ensures that your mobile applications meet and exceed user expectations, whether it's individual apps or part of an integrated cross-platform solution.</p>
                        </Col>
                        <Col lg={9}>
                            <img className='aquire-img img-fluid' src={aquire} alt="" />
                        </Col>
                    </Row>
                    <div className='aquire-ul'>
                        <div className='aquire-item'>
                        <Row style={{alignItems: 'center'}}>
                                <Col md={10} xs={21}>
                                    <h3 className="theme-h3">Skills <br /> Overview</h3>
                                </Col>
                                <Col md={2} xs={3}>
                                    <span className="number">01</span>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p>Hammad specializes in designing user-friendly interfaces using React JS, engineering scalable backend solutions using Node JS, and building seamless cross-platform mobile applications using React Native.</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='aquire-item'>
                            <Row style={{alignItems: 'center'}}>
                                <Col md={10} xs={21}>
                                    <h3 className="theme-h3">Portfolio <br /> Highlights</h3>
                                </Col>
                                <Col md={2} xs={3}>
                                    <span className="number">02</span>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p>Explore Hammad’s portfolio to witness his expertise in action. From responsive web interfaces to feature-rich mobile apps, Hammad’'s projects showcase his ability to turn ideas into reality.</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Col md={12} xs={24}>
                            <p className="theme-p">Check out our previous projects available in Portfolio and see for yourself the possibilities and advantages.</p>
                            <Link className='contact-aquire' to="/contact"><span>Contact now</span> <RightOutlined /> </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default AquireCustomer
