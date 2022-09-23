import './GetStarted.scss';

const GetStarted = () => {
    return (
        <div className='gs-container'>
            <div className='stats-block'>
                <div className='gs-container-stats-item'>
                    <div className='main-text h-2'>0.0</div>
                    <div className='second-text content-2'>spreads from</div>
                </div>
                <div className='gs-container-stats-item'>
                    <div className='main-text h-2'>500:1</div>
                    <div className='second-text content-2'>everage up to</div>
                </div>
                <div className='gs-container-stats-item'>
                    <div className='main-text h-2'>$50</div>
                    <div className='second-text content-2'>minimum deposit</div>
                </div>
                <div className='gs-container-stats-item'>
                    <div className='main-text h-2'>$0</div>
                    <div className='second-text content-2'>deposit fees</div>
                </div>
            </div>

            <div className='get-started-block'>
                <div className='get-started-block-text content-3'>FAST & EASY ACCOUNT OPENING</div>
                <div className='gs-container-button unselectable'>Get started</div>
            </div>
        </div>
    );
};

export default GetStarted;