import React, { useEffect, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { LoaderContext } from './context/Loading'
import { UserInfoContext } from './context/UserInfo'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios';

const App = () => {
  const { loading, setLoading } = useContext(LoaderContext)
  const { ipAddress, setIpAddress, setUserInfo } = useContext(UserInfoContext)
  const location = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  useEffect(() => {
    setLoading(20);
  }, [location.pathname]);
  useEffect(() => {
    axios.get('https://api.ipify.org/?format=json').then(response => {
      setIpAddress(response.data.ip)
    })
  }, [])
  useEffect(() => {
    if (ipAddress) {
      axios.get(`http://www.geoplugin.net/json.gp?ip=${ipAddress}`).then(userInfo => {
        const userData = userInfo.data
        setUserInfo({
          ipAddress: ipAddress,
          city: userData.geoplugin_city,
          country: userData.geoplugin_countryName,
          continent: userData.geoplugin_continentName,
          timeZone: userData.geoplugin_timezone,
          location: {
            latitude: userData.geoplugin_latitude,
            longitude: userData.geoplugin_longitude
          }
        })
      })
    }
  }, [ipAddress])
  return (
    <>
      <LoadingBar
        color='#dffb6d'
        height={3}
        progress={loading}
        onLoaderFinished={() => setLoading(0)}
      />
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App