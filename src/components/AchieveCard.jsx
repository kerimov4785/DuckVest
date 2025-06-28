import React from 'react'
import { GoGoal } from "react-icons/go";
function AchieveCard() {
  return (
    <>
        <div className='achCard'>
            <img src="src/assets/medal.png" alt="" />
            <h1>Top Investor</h1>
            <h3>Achievement</h3>
            <p className='pp'>Given to top-performing <br /> investors.</p>
            <div className='goal'>
                <GoGoal className='go' />
                <p>Invested more than <br /> $10,000</p>
            </div>
        </div>
    </>
  )
}

export default AchieveCard