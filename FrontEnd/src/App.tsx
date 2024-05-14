
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Cards } from './components/ProductCard/Cards'
// import { Products } from './components/Products/Products'
import { Body } from './components/Body/Body'
import { Women } from './components/Women/Women'
import { Signup } from './components/LoginSignup/Signup'
// import { AllRoutes } from './routes/AllRoutes'
import { Navbar } from './components/Header/Navbar'
import { Men } from './components/Add Cards/Men'
import { Footer } from './components/Footer/Footer'
import { Helmet } from './components/Helmet/Helmet'
import { Registration } from './components/Registration/Registration'
import Admin from './components/Admin'
import ViewData from './components/ViewData'
import AddData from './components/AddData'
import Bikes from './components/Bikes'
import MotorCycle from './components/MotorCycle'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  

  return (
    
    <>
    <Navbar/>
    {/* <Women/> */}
    {/* <Products/> */}
     {/* <AllRoutes/> */}
    <Routes>

      <Route path='/' element={<Body/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/helmet' element={<Helmet/>}></Route>
      <Route path="/user" element={<Registration/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/admin' element={<ChakraProvider><Admin /></ChakraProvider>}></Route>
       <Route path='/viewdata' element={<ChakraProvider><ViewData/></ChakraProvider>}></Route>
       <Route path='/adddata' element={<ChakraProvider><AddData/></ChakraProvider>}></Route>
       <Route path='/bike' element={<ChakraProvider><Bikes/></ChakraProvider>}></Route>
       <Route path='/motorcycle' element={<ChakraProvider><MotorCycle /></ChakraProvider>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
