import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Account({investor}) {

  return (
    <div>
      <div className="account-head">
        <h3>Account</h3>
        <div className="account-card">
          <div className="account-logo-name">
            <div className="account-logo">
              <img src="../src/assets/logo.png" alt="" />
            </div>
            <div className="account-detail">
              <h4>{investor?.name}</h4>
              <p>{investor?.email}</p>
            </div>
          </div>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="settings">
        <h4>Settings</h4>
        <div className="settings-card">
          <div className="setting-row">
            <h5>Email</h5>
            <p>{investor?.email}</p>
          </div>
          <hr />
          <div className="setting-row">
            <h5>Password</h5>
            <p style={{ fontSize: "10px" }}>● ● ● ● ● ● ● ●</p>
          </div>
          <hr />
          <div className="setting-row">
            <h5>Phone</h5>
            <p>{investor?.phone}</p>
          </div>
          <hr />
          <div className="setting-row">
            <h5>Country</h5>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account