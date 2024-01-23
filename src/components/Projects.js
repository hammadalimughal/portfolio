import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import project1 from '../images/projects/1.jpg'
import project2 from '../images/projects/2.jpg'
import project3 from '../images/projects/3.jpg'
import project4 from '../images/projects/4.jpg'
import project5 from '../images/projects/5.jpg'
import project6 from '../images/projects/6.jpg'
import project7 from '../images/projects/7.jpg'
import project8 from '../images/projects/8.jpg'
import project9 from '../images/projects/9.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const projectData = [
    {
      img: project1,
      title: 'project',
      url: '/'
    },
    {
      img: project2,
      title: 'project',
      url: '/'
    },
    {
      img: project3,
      title: 'project',
      url: '/'
    },
    {
      img: project4,
      title: 'project',
      url: '/'
    },
    {
      img: project5,
      title: 'project',
      url: '/'
    },
    {
      img: project6,
      title: 'project',
      url: '/'
    },
    {
      img: project7,
      title: 'project',
      url: '/'
    },
    {
      img: project8,
      title: 'project',
      url: '/'
    },
    {
      img: project9,
      title: 'project',
      url: '/'
    },
  ]
  return (
    <>
      <section className="projects-sec">
        <div className="container-stretch">
          <div className="projects-wrapper">
            <div className="header-sec">
              <h2 className="theme-h2">My <span>Work</span></h2>
              <p className="theme-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus illo veniam ex earum ipsa, quisquam doloremque consequatur, esse dolorem nemo impedit quo, harum laboriosam minima. Minus neque facere mollitia ipsum?</p>
            </div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              slidesPerView={3}
              spaceBetween={5}
            >
              {projectData.map((project, ind) => {
                return (
                  <SwiperSlide>
                    <div className="project-item">
                      <h4 className="theme-h4">{project.title}</h4>
                      <img className='img-fluid' src={project.img} alt={project.title} />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
