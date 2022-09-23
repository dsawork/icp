import './MarketNews.scss';

const TabTableRow = ({ row }) => {
    return (
        <tr className='row-mt'>
            <td className='ta-center content-1 color-grey td-m'>{row.symbol}</td>
            <td className='ta-right content-1 color-grey td-m'>{row.bid}</td>
            <td className='ta-right content-1 color-grey td-m'>{row.ask}</td>
            <td className='ta-center'>
                <div className='spread-item content-1 td-m'>
                    {row.spread}
                </div>
            </td>
        </tr>
    )
}

export default TabTableRow;
