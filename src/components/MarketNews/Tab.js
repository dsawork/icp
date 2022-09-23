import './MarketNews.scss';
import TabTableRow from './TabTableRow.js';

const tabsInfo = {
    1: {
        header: 'FOREX',
        table: [
            { symbol: 'EURUSD', bid: '1.020034', ask: '1.020034', spread: '0.0' },
            { symbol: 'AUDUSD', bid: '0.069948 ', ask: '0.069951', spread: '0.3' },
            { symbol: 'GBPUSD', bid: '1.21211', ask: '1.21213', spread: '0.2' },
            { symbol: 'USDJPY', bid: '134.567', ask: '134.569', spread: '0.2' },
        ]
    },
    2: {
        header: 'COMMODITIES',
        table: [
            { symbol: 'CL-OIL', bid: '91.859', ask: '91.902', spread: '0.4' },
            { symbol: 'XAGUSD', bid: '20.575 ', ask: '20.598', spread: '0.2' },
            { symbol: 'XAUUSD', bid: '1791.04', ask: '1791.18', spread: '1.4' },
        ]
    },
    3: {
        header: 'INDICES',
        table: [
            { symbol: 'SPI200', bid: '7028.88', ask: '7030.33', spread: '1.4' },
            { symbol: 'DAX40', bid: '13540.25 ', ask: '13540.75', spread: '0.5' },
            { symbol: 'SP500', bid: '4132.91', ask: '4133.22', spread: '0.3' },
            { symbol: 'DJ30', bid: '32833.35', ask: '32834.65', spread: '1.3' },
        ]
    },
    4: {
        header: 'SHARE CFDS',
        table: [
            { symbol: 'Apple', bid: '164.86', ask: '165.27', spread: '0.4' },
            { symbol: 'Facebook', bid: '163.22 ', ask: '163.34', spread: '0.1' },
            { symbol: 'Netflix', bid: '233.98', ask: '234.43', spread: '0.5' },
            { symbol: 'Google', bid: '118.07', ask: '118.49', spread: '0.4' },
        ]
    },
}

const Tab = ({ selectedTab, setSelectedTab, tab }) => {

    return (
        <div 
            className={`tab ${selectedTab === tab ? 'selected-tab' : ''}`} 
            onClick={() => setSelectedTab(tab)}
        >
            <div className='tab-header content-4'>
                {tabsInfo[tab].header}
            </div>

            <div className={`tab-content ${selectedTab === tab ? 'show-content' : ''}`}>
                <table>
                    <thead>
                        <tr>
                            <th className='content-1 tr-m'>Symbol</th>
                            <th className='content-1 ta-right tr-m'>Bid</th>
                            <th className='content-1 ta-right tr-m'>Ask</th>
                            <th className='content-1 tr-m'>Spread</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabsInfo[tab].table.map((row, index) =>
                            <TabTableRow row={row} key={index} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tab;
