import { Link } from 'react-router-dom'
import '../../styles/NavBar/Navbar.css'


export const Navbar = () => {
  return (
    <>
    <div className='container'>
        <p>Learn to Ride</p>
        <p>Test Ride</p>
        <p>Dealer Locator</p>
        <img src="https://cdn.vectorstock.com/i/1000v/25/63/flag-of-india-vector-44262563.avif" alt="logo"/>
        <p>India-English</p>
    </div>
    <div className='header'>
        <div className='d1'>
            <img src="../../../image/Harley-Davidson_logo.svg.png" alt="logo"/>
            <ul><Link to="">BIKES</Link>
                <div className='u1'>
                <li><Link to="">MOTORCYCLES</Link></li>
                <li><Link to="">ELECTRIC VECHILE</Link></li>
                    <li><Link to="">SHOP ALL BIKES</Link></li>
                </div>
            </ul>
            
            <ul><Link to="">PARTS</Link>
                <div className='u2'>
                <li><Link to="./Navbar.tsx">New Arrivals</Link></li>
                <li><Link to="./Navbar.tsx">Handlebars & Controls</Link></li>
                <li><Link to="">Seats & Backrests</Link></li>
                <li><Link to="">Audio & Electronics</Link></li>
                <li><Link to="">Instruments & Gauges</Link></li>
                <li><Link to="">Security & storage</Link></li>
                    <li><Link to="">Shop All Parts</Link></li>
                </div>
            </ul>
            <ul><Link to="">MENS</Link>
                <div className='u3'>
                    <li><Link to="">New Arrivals</Link></li>
                    <li><Link to="">Helmets</Link></li>
                    <li><Link to="">Jeans, Pants & Shorts</Link></li>
                    <li><Link to="">Casual Jackets</Link></li>
                    <li><Link to="">Shop All Mens</Link></li>
                </div>
            </ul>

            <ul><Link to="">WOMENS</Link> 
                <div className='u4'>
                    <li><Link to="">New Arrivals</Link></li>
                    <li><Link to="">Casual Jackets</Link></li>
                    <li><Link to="">Rain Gear</Link></li>
                    <li><Link to="">Shirts & T-Shirts</Link></li>
                    <li><Link to="">Shop All Womens</Link></li>
                </div>
            </ul>
            <ul><Link to="">EXPERIENCE H-D</Link>
                <div className='u5'>
                <li><Link to="">EVENTS</Link></li>
                <li><Link to="">FACTORY TOURS</Link></li>
                <li><Link to="">HARLEY OWNERS GROUP</Link></li>
                    <li><Link to="">ALL EXPERIENCE H-D</Link></li>
                </div>
            </ul>
        </div>
        <div className='d2'>
            <i className="fa-solid fa-magnifying-glass i1"></i>
            <input type="search" placeholder='Search'/>
            <div className='d3'>
            <i className="fa-solid fa-user i2"></i>
            <button>Sign In</button>
            </div>
        </div>
    </div>
   
    </>
  )
}
