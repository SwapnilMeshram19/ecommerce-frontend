import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetchProducts = (url,page,sort,ratingFilter)=>{
    const [products, setProducts]=useState({
        loading:false,
        error:false,
        data:[]
    });
    const {loading, error, data}=products;
    const getProducts=(url,page,sort,ratingFilter)=>{

        // console.log(ratingFilter)

        const paramsObj={
            _page:page
        };

        if(sort){
            paramsObj._sort="price";
            paramsObj._order=sort
        }
        if(ratingFilter.length){
            ratingFilter.forEach(ele=>{
                paramsObj._sort="rating";
                paramsObj._order="desc"
                paramsObj.rating_gte=ele-1;
                paramsObj.rating_lte=ele;
            });
        }

        setProducts(prev=>({
            ...prev,
            loading:true
        }))
        axios({
            method:"get",
            url,
            params:paramsObj
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
        getProducts(url,page,sort,ratingFilter);
        
    },[page,sort,ratingFilter])

    return {loading, error, data}
}