import React from "react";
import { Route, Routes } from "react-router-dom";
import { Private } from "../components/Private";
import { Grocery } from "./Grocery";
import { Home } from "./Home";
import { IndividualProduct } from "./IndividuaProduct";
import { Login } from "./Login";
import { Pharmacy } from "./Pharmacy";


export const Pages= ()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Private><Home/></Private>}/>
                <Route path="/grocery" element={<Private><Grocery/></Private>}/>
                <Route path="/pharmacy" element={<Private><Pharmacy/></Private>}/>
                <Route path="/product/:id" element={<Private><IndividualProduct/></Private>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )

}