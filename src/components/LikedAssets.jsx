import React, { useState } from 'react'

function LikedAssets() {
    const [stocks,setStocks] = useState([
        {
            asset: "Apple Inc.",
            symbol: "AAPL",
            bid: 189.75,
            ask: 189.90,
            price: 189.85,
            change: +1.25,
        },
        {
            asset: "Tesla Inc.",
            symbol: "TSLA",
            bid: 253.10,
            ask: 253.25,
            price: 253.20,
            change: -3.40,
        },
        {
            asset: "Amazon.com Inc.",
            symbol: "AMZN",
            bid: 125.60,
            ask: 125.75,
            price: 125.70,
            change: +0.90,
        },
        {
            asset: "Microsoft Corp.",
            symbol: "MSFT",
            bid: 344.10,
            ask: 344.30,
            price: 344.25,
            change: +2.15,
        },
        {
            asset: "Meta Platforms Inc.",
            symbol: "META",
            bid: 287.20,
            ask: 287.35,
            price: 287.30,
            change: -1.00,
        },
        {
            asset: "NVIDIA Corporation",
            symbol: "NVDA",
            bid: 418.90,
            ask: 419.10,
            price: 419.00,
            change: +4.80,
        },
        {
            asset: "Alphabet Inc. (Google)",
            symbol: "GOOGL",
            bid: 138.25,
            ask: 138.40,
            price: 138.35,
            change: +0.55,
        },
        {
            asset: "Netflix Inc.",
            symbol: "NFLX",
            bid: 407.10,
            ask: 407.30,
            price: 407.20,
            change: +1.90,
        },
        {
            asset: "Intel Corporation",
            symbol: "INTC",
            bid: 36.75,
            ask: 36.80,
            price: 36.78,
            change: -0.15,
        },
        {
            asset: "AMD Inc.",
            symbol: "AMD",
            bid: 109.40,
            ask: 109.55,
            price: 109.50,
            change: +0.75,
        },
        {
            asset: "Coca-Cola Co.",
            symbol: "KO",
            bid: 59.10,
            ask: 59.20,
            price: 59.15,
            change: +0.10,
        },
        {
            asset: "PepsiCo Inc.",
            symbol: "PEP",
            bid: 175.35,
            ask: 175.50,
            price: 175.40,
            change: -0.60,
        },
        {
            asset: "Visa Inc.",
            symbol: "V",
            bid: 239.10,
            ask: 239.25,
            price: 239.20,
            change: +1.15,
        },
        {
            asset: "Mastercard Inc.",
            symbol: "MA",
            bid: 390.50,
            ask: 390.75,
            price: 390.65,
            change: -2.30,
        },
        {
            asset: "PayPal Holdings Inc.",
            symbol: "PYPL",
            bid: 62.20,
            ask: 62.35,
            price: 62.30,
            change: +0.25,
        }])

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
                {stocks.map((item, i) =>
                    <div key={i} className='liked-table-row'>
                        <div>{item.asset.length >= 15 ? item.asset.slice(0,15) + '...' : item.asset}</div>
                        <div>{item.symbol}</div>
                        <div>{item.bid}</div>
                        <div>{item.ask}</div>
                        <div>{item.price}</div>
                        <div className={ `${item.change}`.startsWith('-') ? 'red' : 'green'} >{item.change}</div>
                        <div className='buy-button'>
                            <p>Buy</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LikedAssets