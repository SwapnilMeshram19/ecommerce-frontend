import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginError, loginSuccess } from "../store/auth/action";
import {Navigate} from "react-router-dom";

export const Login = () => {
    const token=useSelector(state=>state.auth.token);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const dispatch=useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin=()=>{
    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:loginData
    }).then(res=>{
        dispatch(loginSuccess(res.data.token))
    }).catch(error=>{
        dispatch(loginError());
    })
  }

  if(token){
    return <Navigate to="/"></Navigate>
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(loginData).map((el) => (
        <TextField
          key={el}
          id={el}
          name={el}
          value={loginData.el}
          onChange={handleChange}
          label={el.toLocaleUpperCase()}
          variant="outlined"
        />
      ))}

<Button onClick={handleLogin} variant="outlined">Login In</Button>
    </Box>
  );
};
