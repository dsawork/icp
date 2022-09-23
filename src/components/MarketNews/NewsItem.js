import './MarketNews.scss';

const NewsItem = ({ news }) => {
    return (
        <div className='news-item'>
            <div className='news-item-datetime'>
                <div className='news-item-date content-1 color-grey'>
                    {news.date}
                </div>

                <div className='news-item-time content-1 color-grey'>
                    {news.time}
                </div>
            </div>

            <div className='news-item-text content-1'>
                {news.text}
            </div>
        </div>
    );
};

export default NewsItem;
