import { Link } from 'react-router-dom'
import '../../styles/NavBar/Navbar.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


export const Navbar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    

        const list = (anchor: Anchor) => (
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={(e)=>e.stopPropagation()}
            >
              <input type="search" placeholder="Search..." style={{ margin: '10px' }} onClick={(e)=>e.stopPropagation()} onKeyDown={(e)=>e.stopPropagation()}/>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to="/men"><ListItemText primary="Men's Gear" /> </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to=""><ListItemText primary="Helmet" /></Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to="/women"><ListItemText primary="Women's Jacket" /> </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
        );
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
            <Link to="/"><img src="../../../image/Harley-Davidson_logo.svg.png" alt="logo"/></Link>
            <ul><Link to="">BIKES</Link>
                <div className='u1'>
                <li><Link to="">MOTORCYCLES</Link></li>
                <li><Link to="">ELECTRIC VECHILE</Link></li>
                    <li><Link to="">SHOP ALL BIKES</Link></li>
                </div>
            </ul>
            
            <ul><Link to="">PARTS</Link>
                <div className='u2'>
                <li><Link to="">New Arrivals</Link></li>
                <li><Link to="">Handlebars & Controls</Link></li>
                <li><Link to="">Seats & Backrests</Link></li>
                <li><Link to="">Audio & Electronics</Link></li>
                <li><Link to="">Instruments & Gauges</Link></li>
                <li><Link to="">Security & storage</Link></li>
                    <li><Link to="">Shop All Parts</Link></li>
                </div>
            </ul>
            <ul><Link to="/men">MENS</Link>
                <div className='u3'>
                    <li><Link to="/mens">New Arrivals</Link></li>
                    <li><Link to="/helmet">Helmets</Link></li>
                    <li><Link to="">Jeans, Pants & Shorts</Link></li>
                    <li><Link to="/men">Casual Jackets</Link></li>
                    <li><Link to="">Shop All Mens</Link></li>
                </div>
            </ul>

            <ul><Link to="/women">WOMENS</Link> 
                <div className='u4'>
                    <li><Link to="">New Arrivals</Link></li>
                    <li><Link to="/women">Casual Jackets</Link></li>
                    <li><Link to="">Rain Gear</Link></li>
                    <li><Link to="">Shirts & T-Shirts</Link></li>
                    <li><Link to="/helmet">Helmets</Link></li>
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
            
            {/* <input type="search" placeholder='Search'/> */}
            <div className='d2'>
      <button className='search' onClick={toggleDrawer('right', true)}>
        <i className="fa-solid fa-magnifying-glass i1"></i> Search
      </button>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
      <div className='d3'>
        <i className="fa-solid fa-user i2"></i>
        <button>Sign In</button>
      </div>
    </div>
        </div>
    </div>
   
    </>
  )
}
