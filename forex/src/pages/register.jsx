import React from 'react';
import "./register.css"
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
//   MDBCheckbox,
//   MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Register() {
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [email,setemail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res =await axios.post("http://localhost:8085/api/user/create",{
      firstname,
      lastname,
      email,
      password,
    })
    localStorage.setItem("currentUser",JSON.stringify(res.data))
    navigate('/');
    console.log(res)
  }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
        
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best site to<br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>grow your Forex Account</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Be part of our growing community in Forex and Crypto trading 
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' name='firstname' onChange={e=>setfirstname(e.target.value)} />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' name='lastname' onChange={e=>setlastname(e.target.value)}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name='email' onChange={e=>setemail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' name='password' onChange={e=>setPassword(e.target.value)}/>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe t' />
              </div> */}

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>

              <div className="text-center">
                <p>Already have an account</p>
                <Link to='/login'>Login</Link>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;