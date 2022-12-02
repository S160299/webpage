import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Order from "./pages/Order"
import Product from "./pages/Product"
import Sales from "./pages/Sales"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App