import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar"
import Portfolio from "./pages/Portfolio"
import { useEffect, useState } from "react"
import Account from "./pages/Account"
import Watchlist from "./pages/Watchlist"
import Achievements from "./pages/Achievements"

function App() {
  const id = 4
  let [investor, setInvestor] = useState({})
  useEffect(() => {
    fetch(`http://localhost:4040/investors/get-account-information-id=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setInvestor(data)
      })
  }, [])
  return (
    <>
      <Sidebar id={id} />
      <main>
        <div className="container">
          <Routes>
            <Route path={`/Portfolio/:id`} element={<Portfolio investor={investor} />} />
            <Route path={`/Account/:id`} element={<Account investor={investor}/>} />
            <Route path="/Watchlist" element={<Watchlist id={id} />} />
            <Route path="/Achievements" element={<Achievements/>}/>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
