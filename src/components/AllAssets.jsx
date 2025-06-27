import { Bookmark } from 'lucide-react'
import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6'

function AllAssets({ stocks, setStocks }) {
    const allStock = [
        {
            id: 1,
            asset: "Apple Inc.",
            symbol: "AAPL",
            bid: 189.75,
            ask: 189.90,
            price: 189.85,
            change: +1.25,
        },
        {
            id: 2,
            asset: "Tesla Inc.",
            symbol: "TSLA",
            bid: 253.10,
            ask: 253.25,
            price: 253.20,
            change: -3.40,
        },
        {
            id: 3,
            asset: "Amazon.com Inc.",
            symbol: "AMZN",
            bid: 125.60,
            ask: 125.75,
            price: 125.70,
            change: +0.90,
        },
        {
            id: 4,
            asset: "Microsoft Corp.",
            symbol: "MSFT",
            bid: 344.10,
            ask: 344.30,
            price: 344.25,
            change: +2.15,
        },
        {
            id: 5,
            asset: "Meta Platforms Inc.",
            symbol: "META",
            bid: 287.20,
            ask: 287.35,
            price: 287.30,
            change: -1.00,
        },
        {
            id: 6,
            asset: "NVIDIA Corporation",
            symbol: "NVDA",
            bid: 418.90,
            ask: 419.10,
            price: 419.00,
            change: +4.80,
        },
        {
            id: 7,
            asset: "Alphabet Inc. (Google)",
            symbol: "GOOGL",
            bid: 138.25,
            ask: 138.40,
            price: 138.35,
            change: +0.55,
        },
        {
            id: 8,
            asset: "Netflix Inc.",
            symbol: "NFLX",
            bid: 407.10,
            ask: 407.30,
            price: 407.20,
            change: +1.90,
        },
        {
            id: 9,
            asset: "Intel Corporation",
            symbol: "INTC",
            bid: 36.75,
            ask: 36.80,
            price: 36.78,
            change: -0.15,
        },
        {
            id: 10,
            asset: "AMD Inc.",
            symbol: "AMD",
            bid: 109.40,
            ask: 109.55,
            price: 109.50,
            change: +0.75,
        },
        {
            id: 11,
            asset: "Coca-Cola Co.",
            symbol: "KO",
            bid: 59.10,
            ask: 59.20,
            price: 59.15,
            change: +0.10,
        },
        {
            id: 12,
            asset: "PepsiCo Inc.",
            symbol: "PEP",
            bid: 175.35,
            ask: 175.50,
            price: 175.40,
            change: -0.60,
        },
        {
            id: 13,
            asset: "Visa Inc.",
            symbol: "V",
            bid: 239.10,
            ask: 239.25,
            price: 239.20,
            change: +1.15,
        },
        {
            id: 14,
            asset: "Mastercard Inc.",
            symbol: "MA",
            bid: 390.50,
            ask: 390.75,
            price: 390.65,
            change: -2.30,
        },
        {
            id: 15,
            asset: "PayPal Holdings Inc.",
            symbol: "PYPL",
            bid: 62.20,
            ask: 62.35,
            price: 62.30,
            change: +0.25,
        }]
    let [saved, setSaved] = useState({})
    const toggleLike = (id) => {
        let obj = allStock.find(item => item.id == id)
        if(!stocks.find(item => item.id == id)){
            setStocks([...stocks, obj])
            console.log('+');
        }
        else {
            setStocks(stocks.filter(item => item.id != id))
            console.log('-');
               
        }
        setSaved({ ...saved, [id]: !saved[id], });
        console.log(stocks)
    };
    return (
        <div className='all-table'>
            <h4>All Stocks</h4>
            <div className="all-table-body">
                {allStock.map((item, i) => (
                    <div key={i} className='stock-card gradient-1'>
                        <div>
                            <h3>{item.asset}</h3>
                            <p>{item.symbol}</p>
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => toggleLike(item.id)} >
                            {saved[item.id] ? <FaBookmark size={22} color='rgb(255 113 37 / 62%)' /> : <FaRegBookmark size={22} color='white' />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllAssets