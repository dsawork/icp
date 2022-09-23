import classNames from 'classnames';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RouteNames } from '../../router';
import logo from '../../assets/Logo.png';
import arrow from '../../assets/arrow.png';
import loupe from '../../assets/loupe.png';
import burger_menu from '../../assets/burger_menu.png';
import logo_black from '../../assets/Logo-black.png';
import ProTrader from '../../assets/ProTrader_black.png';
import WebTracker from '../../assets/WebTracker_black.png';
import ICPInvestApp from '../../assets/ICPInvestApp_black.png';
import { useEffect, useState } from 'react';
import './NavBarMobile.scss';

const NavBarMobile = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const menuClasses = classNames({
        'open': isMenuOpen === true,
        'close': isMenuOpen === false,
    });
    const menuContentClasses = classNames({
        'visible': isMenuOpen === true,
        'hidden': isMenuOpen === false,
    });

    useEffect(() => {
        if (isMenuOpen === true) {
            document.body.classList.toggle('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [ isMenuOpen ]);

    
    const burgerFun = () => {
        let brg = document.getElementById('nav-icon4');
        brg.classList.toggle('open');
        setIsMenuOpen(value => !value)
    }

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img 
                    className='navbar-logo-icon' 
                    height={30} 
                    src={logo} 
                    alt='logo' 
                    // onClick={() => router(RouteNames.MAIN)}
                />
            </div>

            <div className='navbar-tools'>
                <div className='navbar-tools-item lang'>
                    <div className='lang-text'>EN</div> 
                    <img className='lang-arrow' height={5} width={10} src={arrow} alt='arrow' />
                </div>
                <div className='navbar-tools-item loupe'>
                    <img width={25} src={loupe} alt='loupe' />
                </div>
                <div className='navbar-tools-item login'>
                    Log in
                </div>

                <div className={`navbar-tools-item menu menu-${menuClasses}`}>
                    {/* <img 
                        src={burger_menu} 
                        alt='burger_menu' 
                        onClick={() => setIsMenuOpen(value => !value)}
                    /> */}
                    <div id="nav-icon4" onClick={burgerFun}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-content menu-content-${menuContentClasses}`}>
                        <div className='menu-content-header'>
                            <img height={30} src={logo_black} alt='logo_black' />
                        </div>
                        <div className='menu-content-content'>
                            <div className='menu-content-content-item'>Start Trading</div>
                            <div className='menu-content-content-item'>Trading Platforms</div>
                            <div className='menu-content-content-item'>Edu & Tools</div>
                            <div className='menu-content-content-item'>About Us</div>
                            <div className='menu-content-content-item'>Partners</div>
                            <div className='menu-content-content-item'>Support</div>
                        </div>
                        <div className='menu-content-footer'>
                            <div className='menu-content-footer-item'>
                                <img src={ProTrader} style={{paddingRight: '10px'}} alt='ProTrader'/>
                                <div className='menu-content-footer-item-text content-5'>ProTrader</div>
                            </div>
                            <div className='menu-content-footer-item'>
                                <img src={WebTracker} style={{paddingRight: '5px'}} alt='WebTracker'/>
                                <div className='menu-content-footer-item-text content-5'>WebTracker</div>
                            </div>
                            <div className='menu-content-footer-item'>
                                <img src={ICPInvestApp} alt='ICPInvestApp'/>
                                <div className='menu-content-footer-item-text content-5'>ICPInvestApp</div>
                            </div>
                        </div>

                        <div className='menu-content-login'>
                            <div className='login-mobile'>
                                Log in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBarMobile;
