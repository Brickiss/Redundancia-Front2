import Router from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import CPoints from "./pages/CPoints"
import NewCPoint from "./pages/NewCPoint"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" Component={Login}/> 
      <Route path="/cadastro" Component={SignUp}/> 
      <Route path="/dashboard" Component={Dashboard}/> 
      <Route path="/pontos-de-coleta" Component={CPoints}/>
      <Route path="/adicionar-novo-ponto-de-coleta" Component={NewCPoint}/>
    </Routes>
    </>
  )
}

export default App;