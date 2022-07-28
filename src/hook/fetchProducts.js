import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetchProducts = (url)=>{
    const [products, setProducts]=useState({
        loading:false,
        error:false,
        data:[]
    });
    const {loading, error, data}=products;
    const getProducts=(url)=>{

        setProducts(prev=>({
            ...prev,
            loading:true
        }))
        axios({
            method:"get",
            url
        }).then(res=>setProducts(prev=>({
            ...prev,
            loading:false,
            error:false,
            data:res.data
        })))
        .catch(error=>setProducts(prev=>({
            ...prev,
            loading:false,
            error:true
        })))


    }

    useEffect(()=>{
        getProducts(url);
        
    },[])

    return {loading, error, data}
}