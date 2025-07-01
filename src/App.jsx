import { Navigate, Route, Routes, useNavigate } from "react-router"
import axios from 'axios';
import Sidebar from "./components/Sidebar"
import Portfolio from "./pages/Portfolio"
import { useEffect, useState } from "react"
import Account from "./pages/Account"
import Watchlist from "./pages/Watchlist"
import Achievements from "./pages/Achievements"
import MainLayout from "./layout/MainLayout"
import AdminLayout from "./layout/AdminLayout"
import Register from "./pages/Register"
import Trade from "./pages/Trade"

function App() {
  const [allStock, setAllStock] = useState([])
  let [inp1, setInp1] = useState()
  let [inp2, setInp2] = useState()

  let [id, setId] = useState(localStorage['userId'] || '')
  let [investor, setInvestor] = useState()
  let [selectedStock, setSelectedStock] = useState()
  let [error, setError] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4040/stocks/all')
      .then(data => {
        setAllStock(data.data), setSelectedStock(data.data[0])
      })
  }, [])

  useEffect(() => {
    if (!id) return;
    axios.get(`http://localhost:4040/investors/get-account-information-id=${id}`)
      .then(data => {
        setInvestor(data.data)
      })
  }, [])

  const navigate = useNavigate();

  function login() {
    axios.post(`http://localhost:4040/investors/login-user=${inp1}&pwd=${inp2}`)
      .then(item => {
        const id = item.data
        if (id.statusCode != 404) {
          setId(id)
          axios.get(`http://localhost:4040/investors/get-account-information-id=${id}`)
            .then(data => {
              setInvestor(data.data)
              localStorage['userId'] = id
              navigate(`/Portfolio/${data.data.username}`)
            })
        }
        else {
          setError(true)
        }
      }
      )
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={`/Login`} />} />
        <Route path="/" element={<MainLayout investor={investor} />} >
          <Route path="/Portfolio/:username" element={<Portfolio id={id} investor={investor} setInvestor={setInvestor} />} />
          <Route path="/Account/:username" element={<Account investor={investor} />} />
          <Route path="/Watchlist/:username" element={<Watchlist id={id} investor={investor} allStock={allStock} />} />
          <Route path="/Achievements" element={<Achievements investor={investor} />} />
          <Route path="/Trade" element={<Trade investor={investor} allStock={allStock} setAllStock={setAllStock} setSelectedStock={setSelectedStock} selectedStock={selectedStock} />} />
        </Route>
        <Route path="/Login" element={<AdminLayout />} >
          <Route index element={<Register error={error} setInp1={setInp1} setInp2={setInp2} login={login} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
