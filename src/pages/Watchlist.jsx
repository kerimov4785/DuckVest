import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AllAssets from '../components/AllAssets'
import LikedAssets from '../components/LikedAssets'

function Watchlist({ id ,investor,allStock }) {
    const [stocks, setStocks] = useState([])
    let [jarr, letJarr] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4040/watchlist/get-wl=${id}`)
            .then(res => res.json())
            .then(data => setStocks(data.stocks))
    }, [jarr])
    return (
        <div className='watchlist'>
            <div className='watchlist-header'>
                <h3>Watchlist</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor.username}</h5>
                        <p>{investor.email}</p>
                    </div>
                </div>
            </div>
            <h4>Assets you're tracking. Click to buy or trade.</h4>
            <div className='input-box'>
                <Search />
                <input type="text" placeholder='Search or filter assets...' />
            </div>
            <div className='watch-tables'>
                <LikedAssets stocks={stocks} />
                <AllAssets stocks={stocks} id={id} letJarr={letJarr} allStock={allStock} />
            </div>
        </div>
    )
}

export default Watchlist