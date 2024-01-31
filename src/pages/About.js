import React, { useEffect, useContext } from 'react'
import Banner from '../components/Banner'
import AboutComp from '../components/About';
import AboutAgency from '../components/AboutAgency';
import CreatingPortfolio from '../components/CreatingPortfolio';
import transition from '../components/transition';
import { LoaderContext } from '../context/Loading'


const About = () => {
  const { setLoading } = useContext(LoaderContext)
  useEffect(() => {
    setLoading(100)
    setTimeout(() => {
      setLoading(100)
    }, 100);
  }, [])

  return (
    <>
      <Banner tagline="About Me" title="Creative Web <br /><span>Expert.</span>" desc="Meet Hammad, a MERN Stack Developer with a passion for building dynamic and innovative digital solutions. Hammad leads the way in cutting-edge web and mobile development with his knowledge of React JS, Node JS, and React Native." />
      <AboutAgency />
      <AboutComp />
      <CreatingPortfolio />
    </>
  )
}

export default transition(About)
