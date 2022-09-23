import { useState } from 'react';
import line_bg from '../../assets/Line-BG.png';
import Swiper from '../Swiper/Swiper';
import ProTrader from '../../assets/ProTrader.png';
import WebTracker from '../../assets/WebTracker.png';
import ICPInvestApp from '../../assets/ICPInvestApp.png';
import './StartScreen.scss';
import NavBar from '../NavBar/NavBar';

const StartScreen = () => {
    const [ currentSwipe, setCurrentSwipe ] = useState(1);
    const [ prevSwipe, setPrevSwipe ] = useState(0);
    const [ canSwipe, setCanSwipe ] = useState(true);

    const setSwipes = (value) => {
        if (value >= 1 && value <= 3 && canSwipe) {
            setPrevSwipe(currentSwipe);
            setCurrentSwipe(value);
            setCanSwipe(false);
            setTimeout(() => {
                setCanSwipe(true);
            }, 1500);
            return;
        }
    }

    return (
        <div className='ss-container'>
            <img className='bg-line' src={line_bg} alt='line_bg' />

            <div className='ss-container-swiper'>
                <div 
                    className='swiper-border'
                    onClick={() => setSwipes(currentSwipe - 1)}
                ></div>
                <Swiper 
                    currentSwipe={currentSwipe} 
                    prevSwipe={prevSwipe} 
                />
                <div 
                    className='swiper-border'
                    onClick={() => setSwipes(currentSwipe + 1)}
                ></div>
            </div>

            <div className='ss-container-buttons'>
                <div className='live-account unselectable'>Live account</div>
                <div className='demo-account unselectable'>Demo account</div>
            </div>
            <div className='ss-container-footer'>
                <div className='ss-container-footer-links'>
                    <div className='ss-links-item'>
                        <img width={30} src={ProTrader} alt='ProTrader'/>
                        <div className='ss-links-item-text'>ProTrader</div>
                    </div>
                    <div className='ss-links-item'>
                        <img width={30} src={WebTracker} alt='WebTracker'/>
                        <div className='ss-links-item-text'>WebTracker</div>
                    </div>
                    <div className='ss-links-item'>
                        <img width={30} src={ICPInvestApp} alt='ICPInvestApp'/>
                        <div className='ss-links-item-text'>ICPInvestApp</div>
                    </div>
                </div>

                <div className='ss-container-footer-swiper'>
                    <div 
                        className={`${currentSwipe === 1 ? 'ss-container-footer-swiper-item-selected' : 'ss-container-footer-swiper-item'}`}
                        onClick={() => setSwipes(1)}
                    ></div>
                    <div 
                        className={`${currentSwipe === 2 ? 'ss-container-footer-swiper-item-selected' : 'ss-container-footer-swiper-item'}`}
                        onClick={() => setSwipes(2)}
                    ></div>
                    <div 
                        className={`${currentSwipe === 3 ? 'ss-container-footer-swiper-item-selected' : 'ss-container-footer-swiper-item'}`}
                        onClick={() => setSwipes(3)}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
