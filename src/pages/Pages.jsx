import React from "react";
import { Route, Routes } from "react-router-dom";
import { Private } from "../components/Private";
import { Home } from "./Home";
import { Login } from "./Login";


export const Pages= ()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Private><Home/></Private>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )

}