import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import coin_apple from '../../assets/coin_apple.svg';
import coin_bitcoin from '../../assets/coin_bitcoin.svg';
import coin_ethereum from '../../assets/coin_ethereum.svg';
import coin_facebook from '../../assets/coin_facebook.svg';
import coin_tesla from '../../assets/coin_tesla.svg';
import './Swiper.scss';

const Swiper = ({ currentSwipe, prevSwipe }) => {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('#coins-start'),
            {
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
              },
              {
                opacity: 0,
                y: 0,
                x: 700,
                scale: 1,
                duration: 3,
                ease: "none",
                scrollTrigger: {
                    trigger: element.querySelector(".download-platforms"),
                    start: 350,
                    end: 800,
                    scrub: true
                },
              }
        );
    }, []);

    const swipe_1_classes = classNames({
        'default': currentSwipe === 1 && prevSwipe === 0,
        'go-left': currentSwipe === 2 || currentSwipe === 3,
        'go-right': currentSwipe === 1 && (prevSwipe === 2 || prevSwipe === 3),
    });

    const swipe_2_classes = classNames({
        'default': 
            (currentSwipe === 1 && prevSwipe === 0) || 
            (currentSwipe === 3 && prevSwipe === 1) || 
            (currentSwipe === 1 && prevSwipe === 3),
        'go-left': currentSwipe === 2 && prevSwipe === 1,
        'go-left-from-center': currentSwipe === 3 && prevSwipe === 2,
        'go-right': currentSwipe === 2 && prevSwipe === 3,
        'go-right-from-center':  currentSwipe === 1 && prevSwipe === 2,
    });

    const swipe_3_classes = classNames({
        'default': 
            (currentSwipe === 1 && prevSwipe === 0) || 
            (currentSwipe === 2 && prevSwipe === 1) || 
            (currentSwipe === 1 && prevSwipe === 2),
        'go-left': 
            currentSwipe === 3 && 
            (prevSwipe === 1 || prevSwipe === 2),
        'go-right': 
            ((currentSwipe === 1 || currentSwipe === 2) && prevSwipe === 3) || 
            (currentSwipe === 1 && prevSwipe === 3)
    });

    const coinsPosition = classNames({
        '1-slide': currentSwipe === 1,
        '2-slide': currentSwipe === 2,
        '3-slide': currentSwipe === 3,
    });

    return (
        <div className='swiper-container' ref={ref}>
            <div className='swipes'>
                <div className={`swipe swipe-1-${swipe_1_classes}`}>
                    <div className='swipe-header h-1'>
                        Top-notch trading experiences and super rapid payouts
                    </div>
                    <div className='swipe-description content-1'>
                        Join millions of users, from beginners to professionals, who use ICP Invest to manage their investments in a smarter way.
                    </div>
                </div>

                <div className={`swipe swipe-2-${swipe_2_classes}`}>
                    <div className='swipe-header h-1'>
                        Countless trading assetsand 24/7 professional support
                    </div>
                    <div className='swipe-description content-1'>
                        Competent and friendly live support from our team
                    </div>
                </div>

                <div className={`swipe swipe-3-${swipe_3_classes}`}>
                    <div className='swipe-header h-1'>
                        We Give — You Earn
                    </div>
                    <div className='swipe-header h-2 second-header'>
                        Incredible mobile trading experiences
                    </div>
                    <div className='swipe-description content-1'>
                        Competent and friendly live support from our team
                    </div>
                </div>
            </div>

            <div id='coins-start' className={`coins`}>
                <img className={`coin-start coin-start-facebook coin-start-facebook-${coinsPosition}`} src={coin_facebook} alt='coin_facebook' />
                <img className={`coin-start coin-start-bitcoin coin-start-bitcoin-${coinsPosition}`} src={coin_bitcoin} alt='coin_bitcoin' />
                <img className={`coin-start coin-start-tesla coin-start-tesla-${coinsPosition}`} src={coin_tesla} alt='coin_tesla' />
                <img className={`coin-start coin-start-apple coin-start-apple-${coinsPosition}`} src={coin_apple} alt='coin_apple' />
                <img className={`coin-start coin-start-ethereum coin-start-ethereum-${coinsPosition}`} src={coin_ethereum} alt='coin_ethereum' />
            </div>
        </div>
    );
};

export default Swiper;
