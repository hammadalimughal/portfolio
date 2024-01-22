import React from 'react'
import { LineOutlined } from '@ant-design/icons'
import parse from 'html-react-parser';

const Banner = ({ tagline, title, desc }) => {
    return (
        <>
            <section className="banner-main">
                <div className="container">
                    <div className="content-wrapper">
                        <h6 className="theme-h6">{tagline} <LineOutlined /></h6>
                        <h1 className="theme-h1">{parse(title)}</h1>
                        <p className="theme-p">{parse(desc)}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
