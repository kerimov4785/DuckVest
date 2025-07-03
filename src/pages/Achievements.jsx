import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import AchieveCard from '../components/AchieveCard'
import { DataContext } from '../DataContext/Context'

function Achievements() {
    let {investor} = useContext(DataContext)
    return (
        <>
            <div className='section' style={{ color: "white" }}>
                <div className='portfolio-header'>
                    <h3>Achievements</h3>
                    <div className='person-info'>
                        <img src="../src/assets/react.svg" alt="" />
                        <div>
                            <h5>{investor.username}</h5>
                            <p>{investor.email}</p>
                        </div>
                    </div>
                </div>
                <div className='section-content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis dicta consequatur fugit expedita asperiores quidem voluptatem tempora! Veritatis, eaque.</p>
                    <div className='search'>
                        < FaSearch className='icon' />
                        <input type="text" />
                    </div>
                    <div>
                        <AchieveCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements