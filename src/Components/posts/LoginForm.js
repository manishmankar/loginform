import React,{useEffect,useState} from "react"
import {productMSTActions} from "../../productMSTRedux"
import { useDispatch, useSelector } from "react-redux";



const LoginForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState()
    const {post} =useSelector((s)=>({post:s.productMST.productNew.data}))
    console.log(post);
    useEffect(() => {
        dispatch(productMSTActions.getNewArrivalProducts());
      }, []);

      const clickHandler=()=>{
        dispatch(productMSTActions.getProductById(value));
      }
    return (
        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)} />
            <button onClick={clickHandler}></button>
           {post?.map((data)=>{
           return(
               <div key={data.id}>
                   <div>{data.title}</div>

               </div>
           )})}
        </div>
    )
}

export default LoginForm
