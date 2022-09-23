import { useState, useEffect, useRef } from 'react';
// import {Dots} from 'react-preloaders';
import dots from './assets/loading_dots.gif';
import MobileDetect from 'mobile-detect';
// import ReactPageScroller, { SectionContainer } from 'react-page-scroller';
// import SectionContainer from 'react-page-scroller'
import './App.scss';
import MovingCoins from './components/MovingCoins/MovingCoins';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import OnlineCFD from './components/OnlineCFD/OnlineCFD';
import TabsCFDS from './components/TabsCFDS/TabsCFDS';
import StartScreen from './components/StartScreen/StartScreen';
import TradeWithTight from './components/TradeWithTight/TradeWithTight';
import NewGeneration from './components/NewGeneration/NewGeneration';
import MarketNews from './components/MarketNews/MarketNews';
import TradingStrategy from './components/TradingStrategy/TradingStrategy';
import TradeAnywhere from './components/TradeAnywhere/TradeAnywhere';
import TradeToday from './components/TradeToday/TradeToday';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
 
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
  // const [isLoading, setIsLoading] = useState(true);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const md = new MobileDetect(window.navigator.userAgent);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   // console.log(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 500)
  //   };
  //   // Check if the page has already loaded
  //   if (document.readyState === "complete") {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener("load", onPageLoad);
  //     // Remove the event listener when component unmounts
  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, []);

  // return isLoading === false ? (
  //   <div className='wrapper' >   
  //     <StartScreen />
  //     <TabsCFDS />
  //     <OnlineCFD />
  //     <TradeWithTight />
  //     <NewGeneration />
  //     <MarketNews />
  //     <TradingStrategy />
  //     <TradeAnywhere />
  //     <TradeToday />
  //     <Footer />
  //   </div>
  // ) : (
  //   <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  // );

  // return (
  //   <div className='wrapper' >   
  //   <Dots color={'#f7f7f7'} time={1800} />
  //     <StartScreen />
  //     <TabsCFDS />
  //     <OnlineCFD />
  //     <TradeWithTight />
  //     <NewGeneration />
  //     <MarketNews />
  //     <TradingStrategy />
  //     <TradeAnywhere />
  //     <TradeToday />
  //     <Footer />
  //   </div>
  // );
}

export default App;
