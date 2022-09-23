import { useState } from 'react';
import GetStarted from '../GetStarted/GetStarted';
import Tab from './Tab';
import './TabsCFDS.scss';

const TabsCFDS = () => {
    const [ selectedTab, setSelectedTab ] = useState(1);
    const tabs = [1, 2, 3, 4];

    return (
        <div className='tabs-cfds-container'>
            <GetStarted />
            <div className='tabs'>
                {tabs.map((tab) => 
                    <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tab={tab} key={tab} />
                )}
            </div>
        </div>
    );
};

export default TabsCFDS;
