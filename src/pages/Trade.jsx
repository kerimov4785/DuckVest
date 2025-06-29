import React from 'react'

function Trade({investor}) {
    return (
        <div className='Trade'>
            <div className='portfolio-header'>
                <h3>Trade</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor?.username}</h5>
                        <p>{investor?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade