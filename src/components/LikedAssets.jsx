import React, { useState } from 'react'

function LikedAssets({ stocks, setStocks }) {

    return (
        <div className='liked-table'>
            <div className="liked-table-header">
                <div>Asset</div>
                <div>Symbol</div>
                <div>Bid</div>
                <div>Ask</div>
                <div>Price</div>
                <div>Change</div>
                <div>Action</div>
            </div>
            <div className="liked-table-body">
                {stocks.length != 0 ? stocks.map((item, i) =>
                    <div key={i} className='liked-table-row'>
                        <div>{item?.asset?.length >= 15 ? item?.asset.slice(0, 15) + '...' : item?.asset}</div>
                        <div>{item?.symbol}</div>
                        <div>{item?.bid}</div>
                        <div>{item?.ask}</div>
                        <div>{item?.price}</div>
                        <div className={`${item?.change}`.startsWith('-') ? 'red' : 'green'} >{item?.change}</div>
                        <div className='buy-button'>
                            <p>Buy</p>
                        </div>
                    </div>
                ) : <div className='empty-body'>
                    <p>Add Asset</p>
                </div>}
            </div>
        </div>
    )
}

export default LikedAssets