import { Navigate, Route, Routes, useNavigate } from "react-router"
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
  let [inp1, setInp1] = useState()
  let [inp2, setInp2] = useState()
  console.log(inp1, inp2);

  let [id, setId] = useState(localStorage['userId'] || '')
  let [investor, setInvestor] = useState()
  let [error, setError] = useState(false)
  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4040/investors/get-account-information-id=${id}`)
      .then(res => res.json())
      .then(data => {
        setInvestor(data);
      })
  }, []);


  const navigate = useNavigate();


  function login() {
    fetch(`http://localhost:4040/investors/login-user=${inp1}&pwd=${inp2}`, { method: 'POST' })
      .then(res => res.json())
      .then(id => {
        if (id.statusCode != 404) {
          console.log(id);
          setId(id)
          fetch(`http://localhost:4040/investors/get-account-information-id=${id}`)
            .then(res => res.json())
            .then(data => {
              setInvestor(data)
              localStorage['userId'] = id
              navigate(`/Portfolio/${data.username}`)
            })
        }
        else {
          setError(true)
        }
      }
      )
  }
  console.log(id);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={`/Register`} />} />
        <Route path="/" element={<MainLayout investor={investor} />} >
          <Route path="/Portfolio/:username" element={<Portfolio id={id} investor={investor} setInvestor={setInvestor}/>} />
          <Route path="/Account/:username" element={<Account investor={investor} />} />
          <Route path="/Watchlist/:username" element={<Watchlist id={id} investor={investor} />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Trade" element={<Trade investor={investor}  />} />
        </Route>
        <Route path="/Register" element={<AdminLayout />} >
          <Route index element={<Register error={error} setInp1={setInp1} setInp2={setInp2} login={login} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
