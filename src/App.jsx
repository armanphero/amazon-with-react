import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}

export default App
