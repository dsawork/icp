import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import charts from '../../assets/charts-bg.png';
import './TradeWithTight.scss';

const TradeWithTight = () => {
    const ref = useRef(null);
    var screenWidth = document.documentElement.clientWidth;

    /**
     *          ========     CHARTS       ========      
    */

    // ENTER

    useEffect(() => {
        const element = ref.current;

        if (screenWidth >= 1025) {
            gsap.fromTo(
                element.querySelector('#charts'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -700,
                    x: -100,
                },
                {
                    opacity: 1,
                    y: -100,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".twt-container-header"),
                        start: "top bottom",
                        end: "center center",
                        scrub: true
                    },
                }
            );
        } 

        if (screenWidth <= 1024 && screenWidth >= 481) {
            gsap.fromTo(
                element.querySelector('#charts'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -700,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".twt-container-content-charts"),
                        start: "top bottom",
                    },
                }
            );
        }

        if (screenWidth <= 480) {
            gsap.fromTo(
                element.querySelector('#charts'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -700,
                    x: 0,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".twt-container-content-charts"),
                        start: "top bottom",
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
                element.querySelector('#charts'),
                {
                    opacity: 1,
                    y: -100,
                    x: 0,
                    scale: 1,
                },
                {
                    opacity: 0,
                    y: 0,
                    x: 700,
                    scale: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element.querySelector(".open-live-account"),
                        start: "top center",
                        end: "top top",
                        scrub: true
                    },
                }
                );
            }
        }, []);
            
    return (
        <div className='twt-container' ref={ref}>

            <div className='twt-container-header h-2'>
                Trade with Tight Spreads and Low Trading Fees
            </div>

            <div className='twt-container-content'>
                <div className='twt-container-content-info'>
                    <div className='description content-1'>
                        Having our account, our clients can experience tight spreads and the lowest trading fees in the industry. We entirely apprehend the implication of keeping trading costs to a minimum.
                    </div>
                    <div className='second content-3'>
                        Experience the difference with ICP Invest today.
                    </div>
                    <div className='open-live-account unselectable'>Open live account</div>
                </div>

                <div className='twt-container-content-charts'>
                    <img id='charts' src={charts} alt='charts' />
                </div>
            </div>
            
        </div>
    );
};

export default TradeWithTight;
