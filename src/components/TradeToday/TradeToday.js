import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import steps from '../../assets/steps.png';
import bages from '../../assets/bages.png';
import './TradeToday.scss';

const TradeToday = () => {
    const ref = useRef(null);
    var screenWidth = document.documentElement.clientWidth;


    /**
     *          ========     BAGES       ========      
    */

    // START

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#bages'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -700,
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
                        trigger: element.querySelector(".tt-container-content-steps"),
                        start: "top bottom",
                        end: "center center",
                        scrub: true
                    },
                }
            );
        } 

        if (screenWidth <= 1024 && screenWidth >= 952) {
            gsap.fromTo(
                element.querySelector('#bages'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -700,
                    x: -100,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".tt-container-content-steps"),
                        start: "center bottom",
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
                element.querySelector('#bages'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 0,
                    y: 200,
                    x: 1000,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".tt-container-content-steps"),
                        start: "bottom center",
                        end: "center top",
                        scrub: true
                    },
                }
            );
        }

        if (screenWidth <= 1024 && screenWidth >= 952) {
            gsap.fromTo(
                element.querySelector('#bages'),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 0,
                    y: 200,
                    x: 1000,
                    scale: 1,
                    duration: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".tt-container-content-steps"),
                        start: "bottom top",
                    },
                }
            );
        }
    }, []);

    return (
        <div className='tt-container' ref={ref}>
            <div className='tt-container-header h-2'>
                Trade with ICP iNvest Today for an Unprecedented Experience
            </div>

            <div className='tt-container-content'>
                <div className='tt-container-content-steps'>
                    <div className='steps-image'>
                        <img src={steps} alt='steps' />
                    </div>
                    <div className='steps-text'>
                        <div className='steps-text-par'>
                            <div className='steps-text-par-header content-3'>Sign up now!</div>
                            <div className='steps-text-par-desc content-1'>Go through the simple registration process.</div>
                        </div>
                        <div className='steps-text-par'>
                            <div className='steps-text-par-header content-3'>Make a deposit</div>
                            <div className='steps-text-par-desc content-1'>Choose a payment method (visa or crypto) and deposit.</div>
                        </div>
                        <div className='steps-text-par'>
                            <div className='steps-text-par-header content-3'>Start your trading session</div>
                            <div className='steps-text-par-desc content-1'>Get access to the countless CFDs now and earn big!</div>
                        </div>
                    </div>
                </div>

                <div className='tt-container-content-bages'>
                    <img id='bages' src={bages} alt='bages' />
                </div>
            </div>

            <div className='tt-container-footer'>
                <div className='tt-container-footer-text content-5'>
                    Welcome to the universe of wealthy traders!
                </div>
                <div className='tt-container-footer-button content-1'>
                    Open live account
                </div>
            </div>
        </div>
    );
};

export default TradeToday;
