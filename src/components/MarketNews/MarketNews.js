import { useState } from 'react';
import './MarketNews.scss';
import NewsItem from './NewsItem';
import Tab from './Tab';
import glow from '../../assets/news-glow.png';

const newsList = [
    { date: '09/08/22', time: '11:40', text: 'Stocks making the biggest moves in the premarket: Novavax, GoodRx, Allbirds and more' },
    { date: '09/08/22', time: '10:06', text: 'Spirit Airlines sees Q3 fuel cost per gallon $3.55-$3.60' },
    { date: '09/08/22', time: '10:03', text: 'Spirit Airlines Q2 revenue $1.37 bln vs. $859.3 mln a year ago; FactSet consensus $1.35 bln' },
    { date: '09/08/22', time: '10:03', text: 'Stocks end sharply higher as S&P 500 books 4th straight weekly gain' },
    { date: '09/08/22', time: '09:45', text: 'Spirit Airlines Q2 revenue $1.37 bln vs. $859.3 mln a year ago; FactSet consensus $1.35 bln' },
    { date: '09/08/22', time: '09:21', text: 'Stocks making the biggest moves in the premarket: Novavax, GoodRx, Allbirds and more' },
    { date: '09/08/22', time: '09:21', text: 'Stocks making the biggest moves in the premarket: Novavax, GoodRx, Allbirds and more' },
    { date: '09/08/22', time: '09:21', text: 'Stocks making the biggest moves in the premarket: Novavax, GoodRx, Allbirds and more' },
    { date: '09/08/22', time: '09:21', text: 'Stocks making the biggest moves in the premarket: Novavax, GoodRx, Allbirds and more' },
]

const MarketNews = () => {
    const [ selectedTab, setSelectedTab ] = useState(1);
    const tabs = [1, 2, 3, 4];

    return (
        <div className='mn-container'>
            <div className='mn-container-header h-2'>
                Money Never Sleeps. Follow The Latest Market News!
            </div>

            <div className='mn-container-glow'>
                <img src={glow} alt='glow' />
            </div>

            <div className='mn-container-content'>
                <div className='mn-container-content-tabs'>
                    {tabs.map((tab) =>
                        <Tab
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            tab={tab}
                            key={tab}
                        />
                    )}
                </div>

                <div className='mn-container-content-news'>
                    <div className='overflow-scroll'>
                        {newsList.map((news, index) =>
                            <NewsItem news={news} key={index} />
                        )}
                    </div>
                </div>
            </div>

            {/* <div style={{marginTop: '300px'}} >asd</div> */}
        </div>
    );
};

export default MarketNews;

