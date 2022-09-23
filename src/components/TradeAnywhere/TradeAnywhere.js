import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import google_play from '../../assets/download_google_play.png';
import apple from '../../assets/download_apple.png';
import phones from '../../assets/mob-phones.png';
import graph from '../../assets/chart.png';
import './TradeAnywhere.scss';

const TradeAnywhere = () => {
    const ref = useRef(null);
    var screenWidth = document.documentElement.clientWidth;

    /**
     *          ========     PHONES       ========      
    */

    // ENTER

    useEffect(() => {
        const element = ref.current;


        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-phones'),
                {
                    opacity: 0,
                    scale: 0.6,
                    y: -100,
                    x: -100,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".ta-container-header"),
                        start: "top bottom",
                        end: "top center",
                        scrub: true
                    },
                }
            );
        } else {
            gsap.fromTo(
                element.querySelector('.ta-container-images-phones'),
                {
                    opacity: 0,
                    scale: 0.6,
                    y: -600,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".ta-container-content"),
                        start: "bottom bottom",
                    },
                }
            );
        }
    }, []);


    // EXIT

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-phones'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 0,
                    y: -100,
                    x: 500,
                    scale: 0.2,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download"),
                        start: "bottom center",
                        end: "bottom top",
                        scrub: true
                    },
                }
            );
        } else {
            // gsap.fromTo(
            //     element.querySelector('.ta-container-images-phones'),
            //     {
            //         opacity: 1,
            //         y: 0,
            //         x: 0,
            //         scale: 1,
            //     },
            //     {
            //         opacity: 0,
            //         y: -50,
            //         x: 600,
            //         scale: 0.2,
            //         duration: 1,
            //         ease: "none",
            //         scrollTrigger: {
            //             trigger: element.querySelector(".ta-container-images"),
            //             start: "center top",
            //         },
            //     }
            // );
        }
    }, []);



    /**
     *          ========     GRAPH       ========      
    */

    // ENTER

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    opacity: 0,
                    scale: 0.6,
                    y: -300,
                    x: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download"),
                        start: "top bottom",
                        end: "top center",
                        scrub: true
                    },
                }
            );
        } else {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    opacity: 0,
                    // scale: 0.6,
                    y: -500,
                    x: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    // scale: 1,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".ta-container-content"),
                        start: "bottom bottom",
                    },
                }
            );
        }
    }, []);


    // MIDDLE

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: 750,
                    x: 70,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download"),
                        start: "bottom center",
                        end: "bottom top",
                        scrub: true
                    },
                }
            );
        } 

        if (screenWidth <= 1024 && screenWidth >= 952) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 1,
                    y: 800,
                    x: 350,
                    scale: 0.5,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".ta-container-images"),
                        start: "center top",
                    },
                }
            );
        }

        // if (screenWidth <= 900 && screenWidth >= 769) {
        //     gsap.fromTo(
        //         element.querySelector('.ta-container-images-graph'),
        //         {
        //             opacity: 1,
        //             y: 0,
        //             x: 0,
        //             scale: 1,
        //         },
        //         {
        //             opacity: 1,
        //             y: 950,
        //             x: 350,
        //             scale: 0.5,
        //             duration: 1,
        //             ease: "none",
        //             scrollTrigger: {
        //                 trigger: element.querySelector(".ta-container-images"),
        //                 start: "center top",
        //             },
        //         }
        //     );
        // }

        if (screenWidth <= 951) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 0,
                    y: 200,
                    x: 0,
                    scale: 0.6, // SCALE 0
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".ta-container-images"),
                        start: "center top",
                    },
                }
            );
        }
    }, []);


    // EXIT

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('.ta-container-images-graph'),
                {
                    y: 750,
                    x: 70,
                    // scale: 0.5,
                },
                {
                    opacity: 0,
                    y: 1200,
                    x: 1000,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".download"),
                        start: 6350,
                        end: 6600,
                        scrub: true
                    },
                }
            );
        } else {
            // gsap.fromTo(
            //     element.querySelector('.ta-container-images-graph'),
            //     {
            //         opacity: 1,
            //         y: 750,
            //         x: 70,
            //     },
            //     {
            //         opacity: 0,
            //         y: 1200,
            //         x: 1000,
            //         duration: 1,
            //         ease: "none",
            //         scrollTrigger: {
            //             trigger: element.querySelector(".download"),
            //             start: 9000,
            //             end: 9100,
            //             scrub: true
            //         },
            //     }
            // );
        }
    }, []);


    return (
        <div className='ta-container' ref={ref}>

            <div className='ta-container-wrapper'>
                <div className='ta-container-header h-2'>
                    Trade Anywhere, Anytime
                </div>

                <div className='ta-container-content'>
                    <div className='ta-container-content-first'>
                        <div className='par content-1'>
                            We also want to expand the trading supports not only linked to PC or MAC.
                        </div>
                        <div className='par content-1'>
                            Today, more than half of active forex traders use their iPhone or Android to trade online.
                        </div>
                        <div className='par content-1'>
                            As mobile trading continues to grow, broker ICP iNvest offers high-performance mobile research and trading tools that are as powerful as traditional Forex platforms.
                        </div>
                    </div>

                    <div className='ta-container-content-second'>
                        <div className='par content-1'>
                            ICP Invest will always be one step ahead with classic trading applications. All our trading applications are available on all Android and iPhones on the market.
                        </div>

                        <div className='download'>
                            <img src={apple} alt='apple' />
                            <img src={google_play} alt='google play' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ta-container-images'>
                <img className='ta-container-images-phones' src={phones} alt='phones' />
                <img className='ta-container-images-graph' src={graph} alt='graph' />
            </div>
        </div>
    );
};

export default TradeAnywhere;
