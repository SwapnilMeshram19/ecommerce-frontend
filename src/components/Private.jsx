import React from "react";
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
export const Private=({children})=>{
    const token=useSelector(state=>state.auth.token);
    if(!token){
        return (<Navigate to="/login"/>) 
    }

    return children
}