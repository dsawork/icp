import './NewGeneration.scss';

const NGCards = ({ card }) => {
    const image = `./assets/${card.image}`; 

    return (
        <div className='card'>
            <div className='card-img'>
                <img src={image} alt='card' />

            </div>
            
            <div className='card-content'>
                <div className='card-content-text content-5'>{card.text}</div>
            </div>
        </div>
    );
};

export default NGCards;
