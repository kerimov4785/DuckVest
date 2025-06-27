import { Search } from 'lucide-react'
import React from 'react'
import AllAssets from '../components/AllAssets'
import LikedAssets from '../components/LikedAssets'

function Watchlist() {
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
                <LikedAssets/>
                <AllAssets />
            </div>
        </div>
    )
}

export default Watchlist