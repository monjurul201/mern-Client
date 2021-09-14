import React, { useState } from "react";
import signup from "./images/undraw_my_app_re_gxtj.png";
import { NavLink, useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
const Signup = () => {
    
   const History=  useHistory()
   const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});  

   let name,value;
  const handleChange =(e)=>{

   name=e.target.name;
   value=e.target.value;

   setUser({...user,[name]:value})
}  
// console.log(user);

   const handleSumit= async (e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;
      const res=await fetch("http://localhost:5200/register",{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name,email,phone,work,password,cpassword
         })
      })
      const data =await res.json();
    
      if(res.status === 422 || !data ){
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successfully',
          showConfirmButton: false,
          timer: 2000
        })            
        History.push('/login')
      }

   }
  return (
    <>
      <div className="signup-container">
        <div className="signup-content">
           <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-11">
             <h2 className="text-center mt-4">Sign up</h2>
              <form method="POST" className="signup-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="name" id='name' name="name" value={user.name} onChange={handleChange}  autoComplete="off"/>
                </div>
                <div className="mb-3">
                <input type="email" className="form-control" placeholder="email" name="email" id='email'value={user.email} onChange={handleChange}  autoComplete="off"/>
                </div>
                <div className="mb-3">
                <input type="number" className="form-control" placeholder="phone" name="phone" id="phone"value={user.phone} onChange={handleChange} autoComplete="off"/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="your profession" name="work" id="work"value={user.work} onChange={handleChange}  autoComplete="off"/>
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" placeholder="type your password" name="password" id='password'value={user.password} onChange={handleChange}  autoComplete="off"/>
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" placeholder="type your confirm password" name="cpassword" id='cpassword'value={user.cpassword} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="mb-3">
                  <input type="submit" value="Signup" onClick={handleSumit} className="signup-btn" id="signup" />
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-11">
              <figure className="img-container text-center  mb-3">
                <img src={signup} className="img-fluid" alt="" />
              </figure>
              <div className='text-center '>
              <NavLink  to="/login" className="signup-routing pb-3">I am Already SignUp</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
