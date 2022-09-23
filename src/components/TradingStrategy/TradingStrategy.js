import Card from './Card';
import './TradingStrategy.scss';

const cards = [
    { image: 'lowest_fees.png', text: 'Trading at the lowest fees' },
    { image: 'broker.png', text: 'Licensed and reliable CFDs Broker' },
    { image: 'tradning_tool.png', text: 'Experience UTIP trading tool' },
]

const TradingStrategy = () => {
    return (
        <div className='ts-container'>
            <div className='ts-container-header h-2'>
                Execute Your Trading Strategy With ICP iNvest
            </div>

            <div className='ts-container-content'>
                {cards.map((card, index) =>
                    <Card card={card} key={index} />
                )}
            </div>
        </div>
    );
};

export default TradingStrategy;
