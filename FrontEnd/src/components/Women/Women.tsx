import { useEffect, useState } from "react";
import { Products } from "../Products/Products"
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Failure, Fetch_Request, Fetch_Success } from "../../redux/actionTypes";
import axios from 'axios'

const baseurl = "https://tista-method-019-1.onrender.com"

export const Women = () => {
  const [filter, setFilter] = useState<string>('Women');

  const dispatch = useDispatch();
  const state1 = useSelector((store:any)=>store.women.data);

  const FetchCard = async(url:string)=>{
      dispatch({type: Fetch_Request});
      try{
        let res = await axios.get(url);
        dispatch({type: Fetch_Success, payload:res.data})
      }
      catch(err){
        dispatch({type: Fetch_Failure})
      }
    }

    useEffect(()=>{
      FetchCard(`${baseurl}/Men-Women-Jacket?category=Women`)
    },[])

    const handleFilter =(category:string)=>{
      // const category= e.target.value;
      let url =` ${baseurl}/Men-Women-Jacket`;
      if (category !== 'All') {
          url += `?category=${category}`;
      }
      FetchCard(url);
  setFilter(category);
    }
  return (
    <>
    <Products/>
    <div className="m2">

<h5>Filter :</h5>
    <select onChange={(e)=>handleFilter(e.target.value)} value={filter}>
      <option value='All'>ALL</option>
      <option value='Men'>MEN</option>
      <option value='Women'>WOMEN</option>
    </select>
    </div>
    <div className="card1">
        {state1.map((el:any)=>(
           
            <div key={el.id} className="card2">
            <img src={el.Product_image} alt="img"/>
            <p>{el.Title}</p>
          </div>
        ))}
    </div>

    </>
  )
}