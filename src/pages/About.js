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
      <Banner tagline="About Studio" title="Creative and <br /> modern <span>Agency.</span>" desc="We guarantee constant and quick contact as well as reliability during cooperation. Circle It is a modern web design agency. Professional websites made from scratch." />
      <AboutAgency />
      <AboutComp />
      <CreatingPortfolio />
    </>
  )
}

export default transition(About)
