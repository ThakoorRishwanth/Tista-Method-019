import { Link, useNavigate } from 'react-router-dom'
import '../css/Dashboard.css'

function Sidebar() {
   const navigates=useNavigate();
    function handleRedirect(){
        navigates('/viewdata')
    }
    function handleRedirect2(){
      navigates('/adddata')
  }
  return (
    <aside id='sidebar'>
    <h1>Harley Davidson</h1>
    <hr />
     <div id='adminprofile' style={{display:'flex', alignItems:'center'}}>
         <img width={'45px'} height={'45px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hwK7csAMcLHfZCxrj3310u15yBAPh164JQ&usqp=CAU" alt="" />
         <p>Admin</p>
     </div>
     <hr />
     <div>
        <button onClick={handleRedirect}>View Data</button><br></br>
        <button onClick={handleRedirect2}>AddData</button>
        <button><Link to={'/'}> LogOut </Link></button>
     </div>
   </aside>
  )
}

export default Sidebar
