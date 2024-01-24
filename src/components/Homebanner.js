import React from 'react'
import bannerImg from '../images/me.png'
import dots from '../images/dots.png'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import Doodle1 from './Doodle1'

const Homebanner = () => {
    return (
        <>
            <section className="home-banner">
                <div className="container">
                    <div className="banner-content">
                        <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Col span={14}>
                                <h5 className="theme-h5">Hammad Ali Mughal — </h5>
                                {/* <h1 className="theme-h1">Build your great portfolio <span>website.</span></h1> */}
                                <h1 className="theme-h1">
                                    <Doodle1 />
                                    MERN Stack Developer  <br /> Web <span>Enthusiast</span></h1>
                                <p className="theme-p">Hello, I'm <strong>Hammad Ali</strong>, a passionate and results-driven <strong>Web & Mobile App</strong> Developer having <strong>3+</strong> years of experience. With a strong foundation in web development, I specialize inbuilding  <strong>modern and intuitive</strong> digital experiences.</p>
                                <Link to="/contact" className="contact-aquire">Hire Me <RightOutlined /></Link>
                            </Col>
                            <Col span={8}>
                                <div className="img-wrapper">
                                    <img src={dots} alt="" className="dots" />
                                    <img className="img-fluid" src={bannerImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homebanner
