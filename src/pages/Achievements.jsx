import React from 'react'
import { FaSearch } from 'react-icons/fa'
import AchieveCard from '../components/AchieveCard'

function Achievements() {
  return (
    <>
        <div className='section' style={{color:"white"}}>
            <h1>Achievements</h1>
            <div className='section-content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis dicta consequatur fugit expedita asperiores quidem voluptatem tempora! Veritatis, eaque.</p>
                <div className='search'>
                    < FaSearch className='icon'/>
                    <input type="text" />
                </div>
                <div>
                    <AchieveCard/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Achievements