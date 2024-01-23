import React, { useContext, useEffect } from 'react'
import Banner from '../components/Banner'
import transition from '../components/transition'
import CreatingPortfolio from '../components/CreatingPortfolio'
import Projects from '../components/Projects'
import { LoaderContext } from '../context/Loading'

const Portfolio = () => {
  const { setLoading } = useContext(LoaderContext)
  useEffect(() => {
    setLoading(100)
    setTimeout(() => {
      setLoading(100)
    }, 100);
  }, [])
  return (
    <>
      <Banner tagline="My Work" title="Latest and <br /> single <span>WORKS.</span>" desc="Check out our professional portfolio and tips for designers — Send me a message and talk about the new project. I work remotely and accept even the most advanced and comprehensive projects." />
      <Projects />
      <CreatingPortfolio />
    </>
  )
}

export default transition(Portfolio)
