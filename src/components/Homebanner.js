import React from 'react'
import bannerImg from '../images/banner-img.avif'
import dots from '../images/dots.png'

const Homebanner = () => {
    return (
        <>
            <section className="home-banner">
                <div className="container">
                    <div className="banner-content">
                        <h5 className="theme-h5">Start with Solutions — </h5>
                        <h1 className="theme-h1">Build your great portfolio <span>website.</span></h1>
                        <p className="theme-p">Studio is an interactive website builder for agencies, freelancers and for everyone who loves design — Check out the solutions and build your new website easily and quickly.</p>
                        <div className="img-wrapper">
                            <img src={dots} alt="" className="dots" />
                            <img className="img-fluid" src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homebanner
