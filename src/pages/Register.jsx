import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'

function Register({ setId, login ,error}) {
    return (
        <div className='login-page'>
            <div className="login-panel">
                <h2>Log in</h2>
                <div>
                    <input type="text" placeholder='Email' onChange={(e) => setId(e.target.value)} />
                    <p style={{margin:0,textAlign:'start',color:'#9c2828',display: error ? 'block' : 'none' }}>this account does not exist</p>
                    <input type="text" placeholder='Password' />
                </div>
                <p>Forgot password?</p>
                <div onClick={() => login()} >
                    <h4> Log in</h4>
                </div>
            </div>
        </div>
    )
}

export default Register