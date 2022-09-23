import apple from '../../assets/apple_blue.png'
import utip from '../../assets/utip_blue.png'
import android from '../../assets/android_blue.png'
import windows from '../../assets/windows_blue.png'
import map from '../../assets/Map.webp';
import coin_ethereum from '../../assets/coin_ethereum.png';
import coin_bitcoin from '../../assets/coin_bitcoin.png';
import coin_apple from '../../assets/coin_apple.png';
import coin_facebook from '../../assets/coin_facebook.png';
import coin_tesla from '../../assets/coin_tesla.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OnlineCFD.scss';
import { useEffect, useRef } from 'react';
import { ScrollRestoration } from 'react-router-dom';

const paragraphs = [
    'ICP iNvest Group is subject to the strictest compliance requirements for the management of client funds, security, and financial reporting.',
    'Thanks to these standards, we guarantee our clients reliable and worry-free trading, with serious data protection, funds, and privacy.',
    'ICP iNvest Forex Broker was founded in 2022. Our primary mission as an online broker is to help new traders get started confidently by teaching them how to trade like a Pro on the best trading platforms.',
    'Founded on value of integrity and innovation, ICP iNvest Group always puts the customer first. We strive to ensure traders of all skill levels can realize their true potential.',
    `Whether it's our customer service, the instruments offered, our platforms, or any other superior service — we work hard to provide an enjoyable trading experience for our customers.`,
];

const OnlineCFD = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    var screenWidth = document.documentElement.clientWidth;


    /**
     *          ========     MAP       ========      
    */

    useEffect(() => {
        const element = ref.current;

        if (document.documentElement.clientWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#online-cfd-map'),
                {
                    opacity: 0,
                    scale: 0.2,
                    // y: -20
                  },
                  {
                    opacity: 1,
                    // y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: element.querySelector(".online-cfd-container-content"),
                      start: "top bottom",
                      end: "center center",
                      scrub: true
                    },
                  }
            );
        } else {
            gsap.fromTo(
                element.querySelector('#online-cfd-map'),
                {
                    opacity: 0,
                    scale: 0.2,
                    y: -500
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".map-glow"),
                        start: "top bottom",
                    },
                }
            );
        }
    }, []);



    /**
     *          ========     COINS       ========      
    */

    // ENTER

    useEffect(() => {
        const element = ref.current;

        if (document.documentElement.clientWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 0,
                    scale: 0.6,
                    y: -1000,
                    x: 700,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 3,
                    ease: "none",
                    scrollTrigger: {
                    trigger: element.querySelector(".online-cfd-container-content"),
                        start: "top bottom",
                        end: "center center",
                        scrub: true
                    },
                }
            );
        } else {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 0,
                    scale: 0.6,
                    y: -1000,
                    x: 700,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1, 
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".map-glow"),
                        start: "top bottom",
                        // end: "center center",
                        // scrub: true
                    },
                }
            );
        }
    }, []);

    // MIDDLE

    useEffect(() => {
        const element = ref.current;

        var yy, xx;

        if (screenWidth >= 1261) {
            yy = 700;
            xx = 60
        } 
        if (screenWidth <= 1260 && screenWidth >= 1025) {
            yy = 750;
            xx = 0;
        }
        if (screenWidth <= 1024 && screenWidth >= 482) {
            yy = 1000;
            xx = 0;
        }
        if (screenWidth <= 481 && screenWidth >= 0) {
            yy = 750;
            xx = 0;
        }
        
        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: yy,
                    x: xx,
                    scale: 1,
                    duration: 3,
                    ease: "none",
                    scrollTrigger: {
                    trigger: element.querySelector(".download-text"),
                    start: "top center",
                    end: "top top",
                    scrub: true
                    },
                }
            );
        } 

        if (screenWidth <= 1024 && screenWidth >= 0) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: yy,
                    x: xx,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".map-glow"),
                        start: "top top",
                    },
                }
            );
        }
    }, []);

    // EXIT

    useEffect(() => {
        const element = ref.current;
        
        var yy, xx;
        
        if (screenWidth >= 1261) {
            yy = 700;
            xx = 60
        } 
        if (screenWidth <= 1260 && screenWidth >= 1025) {
            yy = 750;
            xx = 0;
        }
        if (screenWidth <= 1024 && screenWidth >= 482) {
            yy = 1000;
            xx = 0;
        }
        if (screenWidth <= 481 && screenWidth >= 0) {
            yy = 750;
            xx = 0;
        }

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 1,
                    scale: 1,
                    y: yy,
                    x: xx,
                },
                {
                    opacity: 0,
                    y: 1100,
                    x: 700,
                    scale: 0.5,
                    duration: 3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download-platforms"),
                        start: 2620,
                        end: 3000,
                        scrub: true
                    },
                }
            );
        } 

        if (screenWidth <= 1024 && screenWidth >= 482) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 1,
                    scale: 1,
                    y: yy,
                    x: xx,
                },
                {
                    opacity: 0,
                    y: 1400,
                    x: 700,
                    scale: 0.5,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download-platforms"),
                        start: 3900,
                    },
                }
            );
        }

        if (screenWidth <= 481 && screenWidth >= 0) {
            gsap.fromTo(
                element.querySelector('#online-cfd-coins'),
                {
                    opacity: 1,
                    scale: 1,
                    y: yy,
                    x: xx,
                },
                {
                    opacity: 0,
                    y: 1400,
                    x: 700,
                    scale: 0.5,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download-platforms"),
                        start: 3500,
                    },
                }
            );
        }
    }, []);



    /**
     *          ========     SINGLE COINS       ========      
    */


    // FB

    useEffect(() => {
        const element = ref.current;
        var xx, yy, sscale;

        if (screenWidth >= 482) {
            xx = 70
            yy = 0;
            sscale = 0.8;
        }
        if (screenWidth <= 481) {
            xx = 20;
            yy = 0;
            sscale = 0.6;
        }

        gsap.fromTo(
            element.querySelector('#coin-facebook'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
            },
            {
                opacity: 1,
                y: yy,
                x: xx,
                scale: sscale,
                duration: 3,
                ease: "none",
                scrollTrigger: { trigger: element.querySelector(".download-platforms"), start: "top center", end: "top top", scrub: true },
            }
        );
    }, []);


    // BTC

    useEffect(() => {
        const element = ref.current;
        var xx, yy, sscale;

        if (screenWidth >= 482) {
            xx = 10;
            yy = 0;
            sscale = 0.8;
        }
        if (screenWidth <= 481) {
            xx = 20;
            yy = 0;
            sscale = 0.7;
        }

        gsap.fromTo(
            element.querySelector('#coin-bitcoin'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
            },
            {
                opacity: 1,
                y: yy,
                x: xx,
                scale: sscale,
                duration: 3,
                ease: "none",
                scrollTrigger: { trigger: element.querySelector(".download-platforms"), start: "top center", end: "top top", scrub: true },
            }
        );
    }, []);


    // TESLA

    useEffect(() => {
        const element = ref.current;
        var xx, yy, sscale;

        if (screenWidth >= 482) {
            xx = 10;
            yy = 50;
            sscale = 0.8;
        }
        if (screenWidth <= 481) {
            xx = -10;
            yy = 20;
            sscale = 0.9;
        }

        gsap.fromTo(
            element.querySelector('#coin-tesla'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
            },
            {
                opacity: 1,
                y: yy,
                x: xx,
                scale: sscale,
                duration: 3,
                ease: "none",
                scrollTrigger: { trigger: element.querySelector(".download-platforms"), start: "top center", end: "top top", scrub: true },
            }
        );
    }, []);


    // ETH

    useEffect(() => {
        const element = ref.current;
        var xx, yy, sscale;

        if (screenWidth >= 482) {
            xx = -50;
            yy = -50;
            sscale = 0.8;
        }
        if (screenWidth <= 481) {
            xx = -30;
            yy = -30;
            sscale = 0.7;
        }

        gsap.fromTo(
            element.querySelector('#coin-ethereum'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
            },
            {
                opacity: 1,
                y: yy,
                x: xx,
                scale: sscale,
                duration: 3,
                ease: "none",
                scrollTrigger: { trigger: element.querySelector(".download-platforms"), start: "top center", end: "top top", scrub: true },
            }
        );
    }, []);


    // AAPL

    useEffect(() => {
        const element = ref.current;
        var xx, yy, sscale;

        if (screenWidth >= 482) {
            xx = -40;
            yy = 40;
            sscale = 0.8;
        }
        if (screenWidth <= 481) {
            xx = -10;
            yy = 0;
            sscale = 0.9;
        }

        gsap.fromTo(
            element.querySelector('#coin-apple'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
            },
            {
                opacity: 1,
                y: yy,
                x: xx,
                scale: sscale,
                duration: 3,
                ease: "none",
                scrollTrigger: { trigger: element.querySelector(".download-platforms"), start: "top center", end: "top top", scrub: true },
            }
        );
    }, []);


    return (
        <div className='online-cfd-container' ref={ref}>
            <div className='h-2 header'>Online CFD Trading Broker,<br></br>Platforms & Tools</div>
            <div className='online-cfd-container-content'>
                <div className='info'>
                    <div className='description'>
                        <div className='description-first'>
                            <div className='content-1 description-block' >
                                ICP iNvest Group is subject to the strictest compliance requirements for the management of client funds, security, and financial reporting.
                            </div>
                            <div className='content-1 description-block' >
                                Thanks to these standards, we guarantee our clients reliable and worry-free trading, with serious data protection, funds, and privacy.
                            </div>
                            <div className='content-1 description-block' >
                                ICP iNvest Forex Broker was founded in 2022. Our primary mission as an online broker is to help new traders get started confidently by teaching them how to trade like a Pro on the best trading platforms.
                            </div>
                        </div>
                        <div className='description-second'>
                            <div className='content-1 description-block' >
                                Founded on values ​​of integrity and innovation, ICP iNvest Group always puts the customer first. We strive to ensure traders of all skill levels can realize their true potential.
                            </div>
                            <div className='content-1 description-block' >
                                Whether it's our customer service, the instruments offered, our platforms, or any other superior service — we work hard to provide an enjoyable trading experience for our customers. 
                            </div>
                            <div className='content-4 download'>
                                <div className='download-text'>Gain your trading advantage with ICP iNvest Group.</div>
                                <div className='download-platforms'>
                                    <img className='download-platforms-item' src={utip} alt='utip' />
                                    <img className='download-platforms-item' src={apple} alt='utip' />
                                    <img className='download-platforms-item' src={android} alt='utip' />
                                    <img className='download-platforms-item' src={windows} alt='utip' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='map-glow'>
                    <img id='online-cfd-map' className='map' src={map} alt='map' />

                    <div id='online-cfd-coins'>
                        <img id='coin-facebook' className='coin-facebook' src={coin_facebook} alt='coin_facebook' />
                        <img id='coin-bitcoin' className='coin-bitcoin' src={coin_bitcoin} alt='coin_bitcoin' />
                        <img id='coin-tesla' className='coin-tesla' src={coin_tesla} alt='coin_tesla' />
                        <img id='coin-ethereum' className='coin-ethereum' src={coin_ethereum} alt='coin_ethereum' />
                        <img id='coin-apple' className='coin-apple' src={coin_apple} alt='coin_apple' />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default OnlineCFD;