import  { useEffect } from 'react'
// import { Navbar } from '../Header/Navbar'
import '../../styles/Products/products.css'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_failure, fetch_request, fetch_success } from '../../redux/actionTypes';
import axios from 'axios'
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';







export const Products = () => {
  // const [filter, setFilter] = useState("")
  const dispatch = useDispatch();
  const state = useSelector((store:RootState)=>store.pro.data)
  const baseurl = "https://tista-method-019-1.onrender.com"



/*
----->the Fetch Data for all products Starting
*/
    const fetchPro = async (url:string)=>{
      dispatch({type: fetch_request});
      try{
        let res = await axios.get(url);
        dispatch({type: fetch_success, payload:res.data})
      }
      catch(err){
        dispatch({type: fetch_failure})
      }
    }


/*
----->the Fetch Data for all products Ending
*/


    

    useEffect(()=>{
    },[])
    
    fetchPro(`${baseurl}/Men-Product`)


    // const handleChange = (event: SelectChangeEvent) => {
    //   setFilter(event.target.value);
    // };


  return (
      <>
      <div
      className='m1'>
            <h1>Harley-Store</h1>
      </div>
      <div className="cont">
        <h1>ALL CATEGORIES</h1>
        {/* <button onClick={handleShow}>Load</button> */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {state.map((el:any, index:any) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={el.id}>
        {/* Apply custom CSS class to the container div */}
        <div className="cor">
          {state.slice(index, index + 7).map((item:any, subIndex:any) => (
            <div key={item.id} className='cor2'>
              <img src={item.picture} className="d-block w-100" alt={`Slide ${index}-${subIndex}`} />
              <p><Link to="">{item.category}</Link></p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>



  {/* Carousel control buttons */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


       
      </div>
      {/* <div className='m2'> */}
      {/* <Box sx={{minWidth:220}} style={{border:"1px solid", borderRadius:"5px"}}>
      <FormControl className='fc1'>
        <InputLabel id="demo-simple-select-label" style={{fontWeight:"bold", color:"black"}}>Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
          >
          <MenuItem value="mens">Mens</MenuItem>
          <MenuItem value="womens">Womens</MenuItem>
        </Select>
      </FormControl>
    </Box>
      
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{fontWeight:"bold", color:"black"}}>Color</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleChange}
          label="Color"
          >
          <MenuItem value="color">
          </MenuItem>
          <MenuItem value="red">red</MenuItem>
          <MenuItem value="green">green</MenuItem>
          <MenuItem value="black">black</MenuItem>
        </Select>
      </FormControl>
       */}
            {/* </div> */}

            {/* <Cards/> */}
    </>
  )
}
