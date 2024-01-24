import React from 'react'
import { Col, Row, QRCode, Image } from 'antd';
import parse from 'html-react-parser';
import linkImage from '../images/link-square.svg'
import project1 from '../images/projects/1.jpg'
import project2 from '../images/projects/2.jpg'
import project3 from '../images/projects/3.jpg'
import project4 from '../images/projects/4.jpg'
import project5 from '../images/projects/5.png'
import project6 from '../images/projects/6.png'
import project7 from '../images/projects/7.png'
import project8 from '../images/projects/8.png'
import project9 from '../images/projects/9.png'
import project10 from '../images/projects/10.jpg'



const Projects = () => {
  const projectData = [
    {
      img: project1,
      title: 'Baba <span>Platters</span>',
      url: 'https://codemark-babaplatter.netlify.app/'
    },
    {
      img: project3,
      title: 'Photo <span>Bazaar</span>',
      url: 'https://codemark-photobazaar.netlify.app/'
    },
    {
      img: project2,
      title: 'Texas Apartment <span>Experts</span>',
      url: 'https://codemark-texasapartment.netlify.app/'
    },
    {
      img: project7,
      title: 'Near <span>Buys</span>',
      url: 'https://codemark-nearbuys.netlify.app/'
    },
    {
      img: project4,
      title: 'Pet Shop <span>Box</span>',
      url: 'https://codemark-petshopbox.netlify.app/'
    },
    {
      img: project10,
      title: 'Mizzle <span>Boy</span>',
      // url: 'https://morale-matters.com/'
    },
    {
      img: project5,
      title: 'Cozy With <span>Character</span>',
      url: 'https://codemark-cozy-with-character.netlify.app/'
    },
    {
      img: project9,
      title: 'Analyix <span>Investigator</span>',
      url: 'https://htmldigitaltest.site/analyx-investigator/'
    },
    {
      img: project6,
      title: 'Talk to <span>CFI</span>',
      url: 'https://talk-to-cfi-codemark.netlify.app/'
    },
    {
      img: project8,
      title: 'Morale <span>Matters</span>',
      url: 'https://morale-matters.com/'
    }
  ]
  return (
    <>
      <section className="projects-sec">
        <div className="projects-wrapper">
          <div className="header-sec">
            <h2 className="theme-h2">Our Exclusive <span>Work</span></h2>
          </div>
          <div className="projects-listing">
            <Row gutter={[15, 15]} style={{justifyContent: 'center'}}>
              {projectData.map((project, ind) => {
                return (
                  <Col key={ind} lg={8} sm={12} xs={24}>
                    <div className="project-item">
                      {project.url && <div className="qr-code">
                        <QRCode value={project.url} />
                      </div>}
                      <div className="hvr-content">
                        <h4 className="theme-h5">{parse(project.title)}</h4>
                        {project.url && <a title={project.url} href={project.url} target='_blank' >
                          <img src={linkImage} alt={project.url} />
                        </a>}

                      </div>
                      <Image className='img-fluid' src={project.img} alt={project.title} />
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
