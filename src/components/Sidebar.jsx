import { ArrowLeftRight, BriefcaseBusiness, Medal, Star, User } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router'

function Sidebar({id}) {
    return (
        <div className='sidebar'>
            <div>
                <img src="../src/assets/logo.png" alt="" />
                <h3>DuckVest </h3>
            </div>
            <div className='menu'>
                <h4>Menu</h4>
                <nav>
                    <NavLink to={'/Portfolio'}>
                        <div>
                            <BriefcaseBusiness size={22} color='rgba(255, 255, 255,.4)' />
                            <p>Portfolio</p>    
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/${id}`} >
                        <div>
                            <User size={22} color='rgba(255, 255, 255,.4)' />
                            <p>Account</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/Watchlist'}>
                        <div>
                            <Star size={22} color='rgba(255, 255, 255,.4)'/>
                            <p>Watchlist</p>
                        </div>
                    </NavLink>
                    <NavLink to={"/Achievements"}>
                        <div>
                            <Medal size={22} color='rgba(255, 255, 255,.4)' />
                            <p>Achievements</p>
                        </div>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar