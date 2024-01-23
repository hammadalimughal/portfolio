import React from 'react'
import Homebanner from '../components/Homebanner'
import About from '../components/About'
import AquireCustomer from '../components/AquireCustomer'
import CreatingPortfolio from '../components/CreatingPortfolio'
import transition from '../components/transition'

const Home = () => {
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
