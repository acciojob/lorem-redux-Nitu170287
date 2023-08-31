
import React,{useEffect, useState} from "react";
import './../styles/App.css';
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { postLoading,postSuccess, postError } from "../redux/actions/postAction";
import axios from "axios";


const App = () => {
const{loading, data, error} = useSelector(state=>state)
  const dispatch = useDispatch()
  console.log({loading,data, error})

useEffect(()=>{
    dispatch(postLoading())
    axios.get("http://hipsum.co/api/?type=hipster-centric&sentences=3")
    .then((response)=>(dispatch(postSuccess(response.data))))
    .catch((error)=>(dispatch(postError(error.message))))
},[])


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Post display</h1>
        <h3>{data}</h3>
    </div>
  )
}

export default App
