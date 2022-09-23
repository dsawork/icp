import './TabsCFDS.scss';

const TabContent = ({ content }) => {
    const { header, description, trading } = content;

    return (
        <>
            <div className='left-block'>
                <div className='left-block-header h-3'>
                    {header}
                </div>
                <div className='left-block-description content-1'>
                    {description}
                </div>
                <div className='left-block-button unselectable content-1'>Trade now</div>
            </div>

            <div className='right-block'>
                <table>
                    <tbody>
                        {trading.map((item, index) => 
                            <tr key={index}>
                                <td className='table-column content-3'>{item.pair}</td>
                                <td className='table-column content-3'>
                                    <img height={30} className='icon-img' src={`./assets/${item.icon}`} alt='icon' />
                                </td>
                                <td 
                                    className={`
                                        table-column content-3 
                                        ${item.stat >= 0 ? 'color-green' : 'color-red'}
                                    `}
                                >{item.stat >= 0 ? `+${item.stat.toFixed(2)}%` : `${item.stat.toFixed(2)}%`}</td>
                                <td className='table-column content-3'>
                                    {item.graph === '--LINK--' ?
                                        'link'
                                        :
                                        <img width={200} className='graph-img' src={`./assets/${item.graph}`} alt={'graph'} />
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TabContent;
