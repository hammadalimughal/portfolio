import { Col, Row } from 'antd'
import React from 'react'
import aboutImg from '../images/about-img.jpg'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

const About = () => {
    return (
        <>
            <section className="about-section">
                <div className="hr-seperator"></div>
                <div className="container">
                    <div className="wrapper">
                        <Row gutter={140}>
                            <Col className='border-right-about' span={11}>
                                <div className="content left-col">
                                    <h5 className="theme-h5">About Agency — </h5>
                                    <h2 className="theme-h2">Use solutions <br /> anywhere need.</h2>
                                    <h6 className="theme-emp">Create quickly and comfortably without any programming knowledge</h6>
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={aboutImg} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col span={13}>
                                <div className="right-col content">
                                    <Row>
                                        <Col span={12}>
                                            <span className="counter">93</span>
                                        </Col>
                                        <Col span={12}>
                                            <h3 className="theme-h3">Optimized for quickly display.</h3>
                                            <p className="theme-p">The latest measurements indicate the quick loading of pages in accordance with the standards for positioning.</p>
                                        </Col>
                                    </Row>
                                    <ul className="about-ul">
                                        <li>
                                            <h3 className="theme-h3">Editor CMS</h3>
                                            <p className="theme-p">Advanced CMS for managing your own entries and writing articles and portfolio.</p>
                                            <Link to='/'>Start Discovery <RightOutlined /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
