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

function App() {
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
    fetch(`http://localhost:4040/investors/get-account-information-id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data || !data.username) {
          console.log('not found this mail')
          setError(true)
        }
        else {
          setInvestor(data)
          localStorage['userId'] = id
          navigate(`/Portfolio/${data.username}`)
        }
      })
  }
  console.log(investor);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={`/Register`} />} />
        <Route path="/" element={<MainLayout investor={investor} />} >
          <Route path={`/Portfolio/:username`} element={<Portfolio investor={investor} />} />
          <Route path={`/Account/:username`} element={<Account investor={investor} />} />
          <Route path="/Watchlist" element={<Watchlist id={id} investor={investor} />} />
          <Route path="/Achievements" element={<Achievements />} />
        </Route>
        <Route path="/Register" element={<AdminLayout />} >
          <Route index element={<Register error={error} investor={investor} setInvestor={setInvestor} setId={setId} login={login} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
