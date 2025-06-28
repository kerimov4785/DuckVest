import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AllAssets from '../components/AllAssets'
import LikedAssets from '../components/LikedAssets'

function Watchlist({ id }) {
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
                    <img src="src/assets/react.svg" alt="" />
                    <div>
                        <h5>Nihat Ker...</h5>
                        <p>nihatkerimov@gmail.com</p>
                    </div>
                </div>
            </div>
            <h4>Assets you're tracking. Click to buy or trade.</h4>
            <div className='input-box'>
                <Search />
                <input type="text" placeholder='Search or filter assets...' />
            </div>
            <div className='watch-tables'>
                <LikedAssets stocks={stocks} setStocks={setStocks} />
                <AllAssets stocks={stocks} setStocks={setStocks} id={id} letJarr={letJarr} />
            </div>
        </div>
    )
}

export default Watchlist