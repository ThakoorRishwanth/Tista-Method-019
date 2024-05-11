import { useDispatch, useSelector } from "react-redux"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../../redux/actionTypes";
import axios from "axios"
import { useEffect, useState } from "react";
import '../../styles/card/card.css'
// import { Products } from "../Products/Products";


const baseurl = "https://tista-method-019-1.onrender.com"

export const MenCards = () =>{
  const [filter, setFilter] = useState<string>('Men');

    const dispatch = useDispatch();
    const state1 = useSelector((store:any)=>store.card.data);

    const FetchCard = async(url:string)=>{
        dispatch({type: FETCH_REQUEST});
        try{
          let res = await axios.get(url);
          dispatch({type: FETCH_SUCCESS, payload:res.data})
        }
        catch(err){
          dispatch({type: FETCH_FAILURE})
        }
      }

      useEffect(()=>{
        FetchCard(`${baseurl}/Men-Women-Jacket?category=Men`)
      },[])

      const handleFilter =(category:string)=>{
        // const category= e.target.value;
        let url = `${baseurl}/Men-Women-Jacket`;
        if (category !== 'All') {
            url += `?category=${category}`;
        }
        FetchCard(url);
    setFilter(category);
      }
  
  return (
    <>
    {/* <Products/> */}
    {/* <input type="text" placeholder="Filter" onChange={(e)=>handleFilter(e.target.value)}/> */}
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
