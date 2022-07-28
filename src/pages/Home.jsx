import React, { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { useFetchProducts } from "../hook/fetchProducts";

export const  Home=()=>{
  
    const {loading, error, data}=useFetchProducts("https://ecommerce-json.herokuapp.com/products")
    
    console.log(data);

    return(
        loading?<h2>Loading...</h2>
        :error?<h2>Something Went Wrong</h2>
        :data.map(el=><ProductCard key={el.id} {...el}  />)
    )
}