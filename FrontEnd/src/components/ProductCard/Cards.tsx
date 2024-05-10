import { useDispatch, useSelector } from "react-redux"
import { fetch_failure, fetch_request, fetch_success } from "../../redux/actionTypes";
import axios from "axios"
import { useEffect } from "react";


const baseurl = "https://tista-method-019-1.onrender.com"

export const Cards = () => {
    const dispatch = useDispatch();
    const state = useSelector((store:any)=>store.pro.data);

    const FetchCard = async(url:string)=>{
        dispatch({type: fetch_request});
        try{
          let res = await axios.get(url);
          dispatch({type: fetch_success, payload:res.data})
        }
        catch(err){
          dispatch({type: fetch_failure})
        }
      }

      useEffect(()=>{
        FetchCard(`${baseurl}/Men-Women-Jacket`)
      },[])
  
  return (
    <>
    <div>
        {state.map((el:any)=>(
            <div key={el.id}>
            <img src={el.Product_image} alt="img"/>
            <p>{el.Title}</p>
          </div>
        ))}
    </div>
    </>
  )
}
