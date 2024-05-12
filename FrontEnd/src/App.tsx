import { Route, Routes } from 'react-router-dom'
import './App.css'
import ViewData from './components/components/Admin/ViewData'
import AddData from './components/components/Admin/AddData'
import { Admin } from './pages/Admin'

function App() {
  

  return (
    <>
     <Routes>
       <Route path='/' element={<Admin />}></Route>
       <Route path='/viewdata' element={<ViewData/>}></Route>
       <Route path='/adddata' element={<AddData/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
