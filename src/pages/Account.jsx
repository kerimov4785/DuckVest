import React from 'react'

function Account() {
  return (
    <div>
      <div className="account-head">
        <h3>Account</h3>
        <div className="account-card">
            <div className="account-logo-name">
                <div className="account-logo">
                    <img src="src/assets/logo.png" alt="" />
                </div>
                <div className="account-detail">
                    <h4>Nihat Kerimov</h4>
                    <p>nihatkerimov@gmail.com</p>
                </div>
            </div>
            <button>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Account
