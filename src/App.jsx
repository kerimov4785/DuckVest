import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar"
import Portfolio from "./pages/Portfolio"
import { useEffect, useState } from "react"

function App() {
  return (
    <>
      <Sidebar/>
      <main>
        <div className="container">
          <Routes>
            <Route path="/Portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
