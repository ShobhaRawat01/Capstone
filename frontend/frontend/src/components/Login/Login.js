import { useFormik } from 'formik'
import * as yup from 'yup'
// import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useNavigate } from "react-router-dom";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import image from "../Assets/login1.png";
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



import './Login.css';


const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);
    const [userDetails, setUserDetails] = useState([]);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const [username, setUsername] = useState(``);
  

    const navigate = useNavigate();

    var creditcardnumber = ""
    var firstname = ""
    var userId = ""
    var lastname = ""
    var email = ""
    var mobileno = ""


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/users`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    for (let i = 0; i < userDetails.length; i++) {
        if (username.toLowerCase() === (userDetails[i].username).toLowerCase()) {

            creditcardnumber = userDetails[i].card;
            firstname = userDetails[i].firstname
            userId = userDetails[i].id;
            lastname = userDetails[i].lastname;
            email = userDetails[i].email;
            mobileno = userDetails[i].mobileno;


            
            // db_username = userDetails[i].username;
            

            // console.log(creditcardnumber);
        
        localStorage.setItem('creditcardnumber', creditcardnumber);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('userId', userId);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('mobileno', mobileno);

        }
    }


  
    const formik = useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: values => {
        fetch('http://localhost:8080/auth/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then(res => res.json())
          .then(data => {
            console.log('Login');
            if (data.token) {
              console.log(data);
              localStorage.setItem('token', data.token);
              swal("You are logged in now", "Click ok to explore our products & Services", "success", {background: 'red'})
              setIsAuthenticated(true);
              navigate('/dashboard');
            } else {
              setError(true);
              setMsg(data.message);
            }
          });
      },
      validationSchema: yup.object().shape({
        username: yup.string().required('Username cannot be left blank'),
        password: yup.string().required('Password cannot be left blank')
      })
    });
  
    


    

    return (
        <div style={{height: '90vh', width: 'auto', backgroundSize: 'cover'}}>
            <div className="container ">
            <div className="row" style={{paddingTop: '10vh'}}>
                
            <div className="col-xs-12 col-md-6" style={{paddingTop: '20vh', paddingLeft: '10px' }}>
            <div className="about-text" >
            <div style={{backgroundColor: '#220633', color: '#FFFFFF', fontSize: '55px'}} className=" py-3 text-center rounded">
                    <h2>Log in to your card</h2>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="mb-3">
                        <div className="mt-2">
                        <input id="username" name="username" type="text" value={formik.values.username} onBlur={e => setUsername(e.target.value)}
                        
                        onChange={formik.handleChange}
                        
                        className="form-control form-control-sm" placeholder="Username" />
                            {formik.errors.username && formik.touched.username ? <span style={{color: '#E8001C', fontWeight: 'bold'}}>{formik.errors.username}</span> : null}
                        </div>
                        <div className="mt-2" style={{color: '#55A2C1'}}>
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span style={{color: '#E8001C', fontWeight: 'bold'}}>{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-4 text-center " >
                            <button className= "loginbutton btn btn" style={{width: '20vw' }}id="btnLogin"> Submit</button>
                        </div><br/>
                        
                        <p style={{color: '#000000' }}>Forgotten your login details or not an online user?     <Link to='/Register' className='signupherelink' style={{color: '#066DAD', fontWeight: 'bold'}}>Sign up here</Link>

                        </p>
                        
                       </form>
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {msg}
                        </div> : null
                    }
                </div>
            </div>
            <div className="col-xs-12 col-md-6" style={{paddingTop: '1vh', paddingRight: '30px'}}>
                {" "}
            <img src={image} className="img-responsive" alt="" />{" "}
            </div>
        </div>
        
        </div>

        </div>
      

    )
}

export default Login;
