import { useDispatch, useSelector } from "react-redux"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../../redux/actionTypes";
import axios from "axios"
import { useEffect } from "react";
import '../../styles/card/card.css'


const baseurl = "https://tista-method-019-1.onrender.com"

export const Cards = () => {
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
        FetchCard(`${baseurl}/Men-Women-Jacket`)
      },[])
  
  return (
    <>
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
