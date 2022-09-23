import { useState, useEffect } from 'react';
import MobileDetect from 'mobile-detect';
import StartScreen from '../../components/StartScreen/StartScreen';
import TabsCFDS from '../../components/TabsCFDS/TabsCFDS';
import OnlineCFD from '../../components/OnlineCFD/OnlineCFD';
import TradeWithTight from '../../components/TradeWithTight/TradeWithTight';
import TradeAnywhere from '../../components/TradeAnywhere/TradeAnywhere';
import NewGeneration from '../../components/NewGeneration/NewGeneration';
import MarketNews from '../../components/MarketNews/MarketNews';
import TradingStrategy from '../../components/TradingStrategy/TradingStrategy';
import TradeToday from '../../components/TradeToday/TradeToday';
import Footer from '../../components/Footer/Footer';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import NavBarMobile from '../../components/NavBarMobile/NavBarMobile';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const md = new MobileDetect(window.navigator.userAgent);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(document.documentElement.clientWidth);
  }, []);


  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500)
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);



  const [ screenWidth, setScreenWidth ] = useState(0);
    
  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth)
  }, []);
  
  window.addEventListener('resize', event => {
    setScreenWidth(document.documentElement.clientWidth)
  }, false);

  return isLoading === false ? (
    <div className='wrapper' >
      {screenWidth >= 1030 ? <NavBar /> : <NavBarMobile />} 
      {/* <NavBar /> */}
      <StartScreen />
      <TabsCFDS />
      <OnlineCFD />
      <TradeWithTight />
      <NewGeneration />
      <MarketNews />
      <TradingStrategy />
      <TradeAnywhere />
      <TradeToday />
      <Footer />
    </div>
  ) : (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );
};

export default MainPage;
