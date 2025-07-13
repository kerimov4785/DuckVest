import React, { useContext } from 'react'
import { DataContext } from '../DataContext/Context'

function Orders() {
    let {investor} = useContext(DataContext)
    return (
        <>
            <div className='portfolio-header'>
                <h3>Orders</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor.username}</h5>
                        <p>{investor.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders