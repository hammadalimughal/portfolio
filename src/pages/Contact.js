import React, { useEffect, useContext } from 'react'
import Banner from '../components/Banner'
import transition from '../components/transition'
import CreatingPortfolio from '../components/CreatingPortfolio'
import ContactForm from '../components/ContactForm'
import { LoaderContext } from '../context/Loading'


const Contact = () => {
  const { setLoading } = useContext(LoaderContext)
  useEffect(() => {
    setLoading(100)
    setTimeout(() => {
      setLoading(100)
    }, 100);
  }, [])
  return (
    <>
      <Banner tagline="Contact Me" title="Contact now <br />send <span>message.</span>" desc="I create new modern and creative projects design — Please contact me with your queries I will be happy to answer all your questions. Thanks!" />
      <ContactForm />
      <CreatingPortfolio />
    </>
  )
}

export default transition(Contact)
