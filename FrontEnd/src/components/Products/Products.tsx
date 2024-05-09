import React from 'react'
import { Navbar } from '../Header/Navbar'
import '../../styles/Products/products.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Products = () => {
    const [filter, setFilter] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setFilter(event.target.value as string);
    };
  return (
      <>
      <Navbar/>
      <div
      className='m1'>
            <h1>Men's Motorcycle Jeans</h1>
      </div>
      <div className='m2'>
      <Box sx={{minWidth:220}} style={{border:"1px solid", borderRadius:"5px"}}>
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
      
            </div>
    </>
  )
}
