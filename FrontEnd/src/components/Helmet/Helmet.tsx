import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Fetch_Fail, Fetch_req, Fetch_succ } from '../../redux/actionTypes';
import axios from 'axios';
import { Products } from '../Products/Products';

const baseurl = "https://tista-method-019-1.onrender.com"
export const Helmet = () => {

    const [filter, setFilter] = useState<string>('');

  const dispatch = useDispatch();
  const state2 = useSelector((store:any)=>store.helmet.data);

  const FetchCard = async(url:string)=>{
      dispatch({type: Fetch_req});
      try{
        let res = await axios.get(url);
        dispatch({type: Fetch_succ, payload:res.data})
      }
      catch(err){
        dispatch({type: Fetch_Fail})
      }
    }

    useEffect(()=>{
      FetchCard(`${baseurl}/Men-Helmet`)
    },[])

    const handleFilter =(category:string)=>{
      // const category= e.target.value;
      let url =` ${baseurl}/Men-Helmet`;
      if (category !== 'All') {
          url += `?category=${category}`;
      }
      FetchCard(url);
  setFilter(category);
    }
  return (
    <>
    <Products/>
    <div className='m2'>
    <h5>Filter :</h5>
    <select onChange={(e)=>handleFilter(e.target.value)} value={filter}>
      <option value='All'>ALL</option>
      <option value='Men_Helmet'>MEN_HELMET</option>
      <option value='Women_Helmet'>WOMEN_HELMET</option>
    </select>
    </div>
    <div className="car1">
        {state2.map((el:any)=>(
           
            <div key={el.id} className="car2">
            <img src={el.Helmet_Image} alt="img"/>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
    </>
  )
}
