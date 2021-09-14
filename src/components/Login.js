import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import login from "./images/undraw_Access_account_re_8spm (1).svg";
import Swal from 'sweetalert2'
const Login = () => {
      
  const history=useHistory()
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  // console.log(email);
  // console.log(password);

  const loginUser=async (e)=> {
    e.preventDefault();

  const res=await fetch("http://localhost:5200/signin",{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            email,
            password
         })
      });
   const data= await res.json()   
      if(res.status === 400 || !data){
        Swal.fire({
          icon: 'error',
          title: 'Oops... User Not Found !',
        })
      
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 2000
        })   
        history.push('/')
      }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-11 d-flex align-items-center flex-column">
                <figure className="img-container text-center mb-4">
                  <img src={login} className="img-fluid" alt="" />
                </figure>
                <div className="text-center mb-5">
                  <NavLink to="/signup" className="signup-routing mt-3">
                   Please Sign Up First
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-11 d-flex align-items-center">
                <form method="POST" className="signup-form">
                  <h2 className="text-center pt-3">Login</h2>
                  <div className="mb-3">
                    <input type="email" className="form-control" name='email' placeholder="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" name='password' placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <input type="submit" name="signin" onClick={loginUser} value="Login" className="login-btn" id="login"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
