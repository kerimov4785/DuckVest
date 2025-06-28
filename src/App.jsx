import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar"
import Portfolio from "./pages/Portfolio"
import { useEffect, useState } from "react"
import Account from "./pages/Account"
import Watchlist from "./pages/Watchlist"
import Achievments from "./pages/Achievments"

function App() {
  const id = 2
  let [investor, setInvestor] = useState()
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
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path={`/Account/${id}`} element={<Account investor={investor}/>} />
            <Route path="/Watchlist" element={<Watchlist id={id} />} />
            <Route path="/Achievments" element={<Achievments />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
