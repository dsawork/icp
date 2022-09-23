import './NewGeneration.scss';
import NGCards from './NGCards';

const cards = [
    { text: 'Low trading fees', image: 'low_trading_fees.png' },
    { text: 'Welcome bonus', image: 'welcome_bonus.png' },
    { text: 'Super rapid execution', image: 'rapid_execution.png' },
    { text: '24-hour customer support', image: 'customer_support.png' },
    { text: 'Free of cost market insights', image: 'market_insights.png' },
    { text: 'Negative balance protection', image: 'balance_protection.png' },
];

const NewGeneration = () => {
    return (
        <div className='ng-container'>
            <div className='ng-container-header h-2'>
                New Generation CFDs Trading Platforms and Tools
            </div>

            <div className='ng-container-content'>
                {cards.map((card) =>
                    <NGCards card={card} key={card.text} />
                )}
            </div>
        </div>
    );
};

export default NewGeneration;