import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { FaDAndD } from 'react-icons/fa6';

function Trade({ investor, allStock,selectedStock, setSelectedStock }) {
    let [dropStatus, setDropStatus] = useState(false)
    console.log(selectedStock);
    
    function selectStock(stock) {
        setSelectedStock(stock)
        setDropStatus(false)
    }
    return (
        <div className='Trade'>
            <div className='portfolio-header'>
                <h3>Trade</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor?.username}</h5>
                        <p>{investor?.email}</p>
                    </div>
                </div>
            </div>
            <p className='mini-title'>Select stock</p>
            <div className='dropdown-box'>
                <div onClick={() => setDropStatus(true)}>
                    <p >{selectedStock?.symbol}</p>
                    <ChevronDown />
                </div>
                <div style={{ height: dropStatus ? '300px' : '0px', transition: '.4s ease-in', opacity: dropStatus ? 1 : 0 }} className='dropdown'>
                    {allStock.map((item, ind) => <p key={ind} onClick={() => selectStock(item)} >{item.symbol}</p>)}
                </div>
            </div>
            <div className='trade-panel'>
                <div className='info-panel'>
                    <h1>{selectedStock?.symbol}</h1>
                    <h4>{selectedStock?.companyName}</h4>
                    <h3>{selectedStock?.stockExchangeSummaryDTO.name} • {selectedStock?.stockExchangeSummaryDTO.country}</h3>
                    <h1 className='price-box' id='price'><span>Price:</span> ${selectedStock?.price}</h1>
                    <h1 className='price-box' ><span>Ask:</span> ${selectedStock?.ask}</h1>
                    <h1 className='price-box' ><span>Bid:</span> ${selectedStock?.bid}</h1>
                </div>
                <div className='buy-panel'>

                </div>
            </div>
        </div>
    )
}

export default Trade