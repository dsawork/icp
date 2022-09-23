import TabContent from './TabContent';
import './TabsCFDS.scss';

const tabsInfo = {
    1: {
        header: 'FOREX CFDS',
        content: {
            header: 'Online Forex CFDs Trading',
            description: 'Go trade using the ultra big number of forex currency pairs now and earn daily with the short- and long-term deals.',
            trading: [
                { pair: 'GBP / USD', icon: 'cfds_01_01.png', stat: -0.03, graph: 'graph_01_01.png' },
                { pair: 'USD / JPY', icon: 'cfds_01_02.png', stat: 0.13, graph: 'graph_01_02.png' },
                { pair: 'EUR / USD', icon: 'cfds_01_03.png', stat: -0.05, graph: 'graph_01_03.png' },
                { pair: 'AUD / USD', icon: 'cfds_01_04.png', stat: 0.10, graph: 'graph_01_04.png' },
            ]
        }
    },
    2: {
        header: 'COMMODITIES CFDS',
        content: {
            header: 'Online Commodities CFDs Trading',
            description: 'Trade precious metals, oil and soft commodities. Have an advantage of significant market cycles and price movements.',
            trading: [
                { pair: 'COPPER-C', icon: 'cfds_02_01.png', stat: 0.23, graph: 'graph_02_01.png' },
                { pair: 'XAGUSD', icon: 'cfds_02_02.png', stat: 0.13, graph: 'graph_02_02.png' },
                { pair: 'XAUUSD', icon: 'cfds_02_03.png', stat: 0.05, graph: 'graph_02_03.png' },
                { pair: 'CL-OIL', icon: 'cfds_02_04.png', stat: 0.15, graph: 'graph_02_04.png' },
            ]
        }
    },
    3: {
        header: 'INDICES CFDS',
        content: {
            header: 'Online Indices CFDs Trading',
            description: 'Leverage on the volatility of the largest stock market indices in the world like the SP500, DAX, FTSE and DJ30.',
            trading: [
                { pair: 'SP500', icon: 'cfds_03_01.png', stat: -0.22, graph: 'graph_03_01.png' },
                { pair: 'DJ30', icon: 'cfds_03_02.png', stat: -0.21, graph: 'graph_03_02.png' },
                { pair: 'DAX40', icon: 'cfds_03_03.png', stat: -0.38, graph: 'graph_03_03.png' },
                { pair: 'SPI200', icon: 'cfds_03_04.png', stat: -0.16, graph: 'graph_03_04.png' },
            ]
        }
    },
    4: {
        header: 'SHARE CFDS',
        content: {
            header: 'Online Share CFDs Trading',
            description: 'Get benefits of some of the biggest companies’ moves and trade US, European, Australia Share CFDs with us.',
            trading: [
                { pair: 'Apple', icon: 'cfds_04_01.png', stat: 0.32, graph: 'graph_04_01.png' },
                { pair: 'Google', icon: 'cfds_04_02.png', stat: 0.07, graph: 'graph_04_02.png' },
                { pair: 'Facebook', icon: 'cfds_04_03.png', stat: -0.81, graph: 'graph_04_03.png' },
                { pair: 'Netflix', icon: 'cfds_04_04.png', stat: 0.05, graph: 'graph_04_04.png' },
            ]
        }
    },
};

const Tab = ({ selectedTab, setSelectedTab, tab }) => {
    return (
        <div className={`tab ${selectedTab === tab ? 'selected-tab' : ''}`}>
            <div 
                className='tab-header content-5'
                onClick={() => setSelectedTab(tab)}
            >{ tabsInfo[tab].header }</div>
            <div className={`tab-content ${selectedTab === tab ? 'show-content' : ''}`}>
                <TabContent content={tabsInfo[tab].content} />
            </div>
        </div>
    );
};

export default Tab;
