import { Col, Row } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import aboutImg from '../images/about-img.jpg'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import $ from 'jquery'

(function ($) {
    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options);

        var thisElement = $(this);

        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };
}($));

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

const About = () => {
    const counterPlayState = useRef(true)
    useEffect(() => {
        const playCounter = () => {
            if (isScrolledIntoView($(".counter")[0]) && counterPlayState.current) {
                counterPlayState.current = false
                $(".counter").each(function (ind, elem) {
                    $(elem).jQuerySimpleCounter({ end: $(this).parent().data("counter-end"), duration: 1500 });
                })
            }
        }
        $(window).on('scroll', playCounter);
        return () => {
            $(window).off('scroll', playCounter);
        };
    }, [])
    return (
        <>
            <section className="about-section">
                <div className="hr-seperator"></div>
                <div className="container">
                    <div className="wrapper">
                        <Row gutter={{ md: 140, xs: 0 }}>
                            <Col className='border-right-about' xl={11}>
                                <div className="content left-col">
                                    <h5 className="theme-h5">Skills Overview — </h5>
                                    <h2 className="theme-h2">Crafting Tomorrow's Digital Solutions Today</h2>
                                    <h6 className="theme-emp">I lead the way in cutting-edge web and mobile development with his knowledge of React JS, Node JS, and React Native.</h6>
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={aboutImg} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={13}>
                                <div className="right-col content">
                                    <Row style={{ alignItems: 'center' }} gutter={{ lg: 20, xs: 0 }}>
                                        <Col md={12} xs={24}>
                                            <span className="counter" data-counter-end="100">0</span>
                                        </Col>
                                        <Col md={12} xs={24}>
                                            <h3 className="theme-h3">Responsive Websites Designs</h3>
                                            <p className="theme-p">I specializes in designing websites that adapt flawlessly to various screen sizes and devices, ensuring a seamless user experience across platforms.</p>
                                        </Col>
                                    </Row>
                                    <ul className="about-ul">
                                        <li>
                                            <ul>
                                                <li>Dynamic functions</li>
                                                <li>Portfolio</li>
                                            </ul>
                                            <h3 className="theme-h3">Responsive Design Expertise</h3>
                                            <p className="theme-p">I uses HTML, CSS, and JavaScript to create websites that automatically adjust layout and content to fit user screen sizes. He maintains functionality and visual appeal through fluid grids, flexible images, and media queries on desktop, tablet, and smartphone.
                                            </p>
                                            <Link className='hover-link' to='/'>Start Discovery <RightOutlined /></Link>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>Dynamic functions</li>
                                                <li>Portfolio</li>
                                            </ul>
                                            <h3 className="theme-h3">Discover Unique Portfolio</h3>
                                            <p className="theme-p">Explore Hammad’s portfolio to see examples of 100% responsive websites that seamlessly adapt to different devices and screen sizes. From corporate websites to e-commerce platforms, Alex's designs prioritize user experience above all else.</p>
                                            <Link className='hover-link' to='/'>Check portfolio <RightOutlined /></Link>
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
