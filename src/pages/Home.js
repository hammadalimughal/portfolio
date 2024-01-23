import React, { useEffect, useContext } from 'react'
import Homebanner from '../components/Homebanner'
import About from '../components/About'
import AquireCustomer from '../components/AquireCustomer'
import CreatingPortfolio from '../components/CreatingPortfolio'
import transition from '../components/transition'
import { LoaderContext } from '../context/Loading'

const Home = () => {
  const { setLoading } = useContext(LoaderContext)
  useEffect(() => {
    setLoading(100)
    setTimeout(() => {
      setLoading(100)
    }, 100);
  }, [])
  return (
    <>
      <Homebanner />
      <About />
      <AquireCustomer />
      <CreatingPortfolio />
    </>
  )
}

export default transition(Home)
// export default Home
