import React, { useState, useEffect } from 'react'
import "../assets/css/login.css";
import { useNavigate } from 'react-router-dom';

function Login() {

  const host = "http://localhost:5000";
  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("faculty-token")){
      navigate("/admin/dashboard");
    }
  }, [])

  const [credentials, setCredentials] = useState({email: "", password: ""})

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
}

  const login = async (e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/faculty/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    const json = await response.json();
    if (json.success){
      localStorage.setItem("faculty-token", json.token);
      navigate("/admin/dashboard");
    }else{
      window.alert(json.message);
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login} className="login-form">
        <label htmlFor="email">Enter Email</label>
        <input type="text" name="email" id="email" required value={credentials.email} onChange={handleChange} />
        <label htmlFor="password">Enter Password</label>
        <input type="password" name="password" id="password" required value={credentials.password} onChange={handleChange}/>
        <button type="submit">Login</button>
      </form> 
    </>
  )
}

export default Login