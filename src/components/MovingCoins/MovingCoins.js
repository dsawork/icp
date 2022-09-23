// import { useState, useEffect } from 'react';
// import classNames from 'classnames';
// import icon_apple from '../../assets/coin_apple.svg';
// import icon_bitcoin from '../../assets/coin_bitcoin.svg';
// import icon_ethereum from '../../assets/coin_ethereum.svg';
// import icon_facebook from '../../assets/coin_facebook.svg';
// import icon_tesla from '../../assets/coin_tesla.svg';
// import './MovingCoins.scss';

// const MovingCoins = ({ page }) => {
//     const coinPosition = classNames({
//         'start': page === 0,
//         'page-2': page === 1,
//     })

//     const [scrollPosition, setScrollPosition] = useState(0);
//     const handleScroll = () => {
//         const position = window.pageYOffset;
//         setScrollPosition(position);
//         console.log(window.pageYOffset)
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div className='moving-coins-wrapper'>
//             <div className='coins'>
//                 <img className={`coins-coin ${coinPosition}-apple`} src={icon_apple} alt='icon_apple' />
//                 <img className={`coins-coin ${coinPosition}-bitcoin`} src={icon_bitcoin} alt='icon_bitcoin' />
//                 <img className={`coins-coin ${coinPosition}-ethereum`} src={icon_ethereum} alt='icon_ethereum' />
//                 <img className={`coins-coin ${coinPosition}-tesla`} src={icon_tesla} alt='icon_tesla' />
//                 <img className={`coins-coin ${coinPosition}-facebook`} src={icon_facebook} alt='icon_facebook' />
//             </div>
//         </div>
//     );
// };

// export default MovingCoins;
