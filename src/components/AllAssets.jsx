import { Bookmark } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6'

function AllAssets({ stocks, id, letJarr }) {
    const [allStock, setAllStock] = useState([])
    useEffect(() => {
        fetch('http://localhost:4040/stocks/all')
            .then(res => res.json())
            .then(data => setAllStock(data))
    }, [])
    const toggleLike = (stockId) => {
        let obj = allStock.find(item => item.stockID == id)
        if (!stocks.find(item => item.stockID == stockId)) {
            fetch(`http://localhost:4040/watchlist/add-stock=${stockId}-to-wl=${id}`, { method: "POST" })
            letJarr([...stocks, obj])
        }
        else {
            fetch(`http://localhost:4040/watchlist/rmv-stock=${stockId}-to-wl=${id}`, { method: "POST" })
            letJarr(stocks.filter(item => item.stockID != id))

        }
    };
    return (
        <div className='all-table'>
            <h4>All Stocks</h4>
            <div className="all-table-body">
                {allStock.map((item) => (
                    <div key={item.stockID} className='stock-card gradient-1'>
                        <div>
                            <h3>{item.companyName}</h3>
                            <p>{item.symbol}</p>
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => toggleLike(item.stockID)} >
                            {stocks.find(item2 => item2.stockID == item.stockID ) ? <FaBookmark size={22} color='rgb(255 113 37 / 62%)' /> : <FaRegBookmark size={22} color='white' />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllAssets