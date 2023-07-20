import React from 'react';
import { useState } from 'react';
import "./login.css"
import axios from 'axios'
import {Link,useNavigate } from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // const [error,setError]=useState("");
  const navigate=useNavigate()
  
  const HandleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:8085/api/user/login",{
        email,password,
      },{withCredentials:true})
      localStorage.setItem("currentUser",JSON.stringify(res.data))
      navigate('/signal');
  
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name="email" onChange={e=>setEmail(e.target.value
                )}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' onChange={e=>setPassword(e.target.value
                )}/>

               <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={HandleSubmit}>Sign in</MDBBtn>
              <div className="text-center">
                <p>Not a member ?</p>
                <Link to='/register'>Register</Link>
              </div>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;