import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar"
import Portfolio from "./pages/Portfolio"
import { useEffect, useState } from "react"
import Account from "./pages/Account"
import Watchlist from "./pages/Watchlist"

function App() {
  return (
    <>
      <Sidebar/>
      <main>
        <div className="container">
          <Routes>
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Watchlist" element={<Watchlist/>} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
