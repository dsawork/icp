import './TradingStrategy.scss';

const Card = ({ card }) => {
    const imageURL = `./assets/${card.image}`;

    return (
        <div className='strategy-card'>
            <div className='strategy-card-icon'>
                <img src={imageURL} alt='icon' />
            </div>

            <div className='strategy-card-text content-5'>
                {card.text}
            </div>
            
            <div className='strategy-card-button content-1'>
                Learn more
            </div>
        </div>
    );
};

export default Card;
