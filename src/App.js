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
  const { ipAddress, setIpAddress, userInfo, setUserInfo } = useContext(UserInfoContext)
  const location = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M77YYS1KYN';
    document.body.appendChild(script);

    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-M77YYS1KYN');
      `;
    document.body.appendChild(gtagScript);
  }, []);
  useEffect(() => {
    setLoading(20);
  }, [location.pathname]);
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setIpAddress(response.data.ip);
      } catch (error) {
        // console.error('Error fetching IP address:', error.message);
      }
    };

    fetchIpAddress();
  }, []);
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (ipAddress && !userInfo) {
        try {
          const userInfoResponse = await axios.get(`https://ipinfo.io/${ipAddress}/json`);
          const userData = userInfoResponse.data;

          setUserInfo({
            ipAddress: ipAddress,
            city: userData.city,
            region: userData.region,
            organization: userData.org,
            country: userData.country,
            postal: userData.postal,
            timeZone: userData.timezone,
            location: userData.loc
          });
        } catch (error) {
          // console.error('Error fetching user info:', error.message);
        }
      }
    };

    fetchUserInfo();
  }, [ipAddress]);

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