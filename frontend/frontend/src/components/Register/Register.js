import { useFormik } from 'formik'
import * as yup from 'yup'
import React, {useState} from 'react'
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import image from '../Assets/registerbackground.png'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./Register.css"





export default function Register() {
    let navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);


    const checkCardExists = (creditCardNumber) => {
        // Make a GET request to your server to check if the card number exists in the database
        fetch(`http://localhost:8080/api/v2/validate/${creditCardNumber}`)
            .then(res => res.json())
            .then(data => {
                if (data === false) {
                    console.log(data)
                    formik.setFieldError('card', 'Invalid credit card number')

                    console.log(formik.setFieldError)
                }
                else if (data === true) {

                    console.log(data)
                }
            })
    }
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            card: '',
            month: '',
            year: '',
            cvv: '',
            username: '',
            mobileno: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: (values, action) => {
            fetch('http://localhost:8080/api/v1/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => { swal("Registered Successfully", "You can login now", "success") })
                action.resetForm();

            // navigate("/Login");
        },
        onChange: values => {

            console.log("I am inside On Change ...")

        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, 'FirstName is too short')
                .max(10, 'FirstName is too long')
                .required('FirstName cannot be left blank'),
            lastname: yup.string()
                .min(3, 'LastName is too short')
                .max(10, 'LastName is too long')
                .required('LastName cannot be left blank'),
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            address: yup.string()
                .required('Address cannot be left blank'),
            mobileno: yup.string()
                .required('Mobile Number cannot be left blank')
                .min(10, 'Mobile Number must be of 10 Digits')
                .max(10, 'Mobile Number must be of 10 Digits'),
            card: yup.string()
                //  .required('Credit Card Number cannot be left blank')
                .min(16, 'Credit Card number must be of 16 digits')
                .max(16, 'Credit Card number must be of 16 digits'),
            month: yup.string()
                .required('Please enter Month and Year'),

            cvv: yup.string()
                .required('CVV Number cannot be left blank')
                .min(3, 'CVV number must be of 3 digits')
                .max(3, 'CVV number must be of 3 digits'),
            username: yup.string()
                .min(3, 'Username is too short')
                .max(10, 'Username is too long')
                .required('Username cannot be left blank'),

            password: yup.string()
                .required('Password cannot be left blank'),
            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .test('confirmpassword', 'Password & confirm password should be same', function (cpass) {
                    if (this.parent.password === cpass) {
                        return true;
                    }
                    return false;
                })
        }),
    });

    return (

        <div registerbackground style={{ height: '110vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: '0px' }}>

            <div className="container mt-0  " style={{ paddingTop: '2vh' }}>
                <div className="row">
                    <div className="Registertag col-xs-12 col-md-6" style={{ paddingTop: '1vh'}}>
                        <div style={{ backgroundColor: '#220633', color: '#FFFFFF', paddingRight: '20px' }} className="circle py-2 text-center rounded">
                            <h2>Register Here</h2>
                        </div>
                        <form onSubmit={formik.handleSubmit} >
                            <div class="row">
                                <div className="mt-0.5">
                                    <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="firstname" name="firstname" type="text" value={formik.values.firstname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="First Name*" />
                                    {formik.errors.firstname && formik.touched.firstname ? <span style={{ color: '#C2000F' }}>{formik.errors.firstname}</span> : null}
                                </div>
                                <div className="mt-0.5">
                                    <input style={{ backgroundColor: '#F9F3FC', color: '#000000', marginRight: '0px' }} id="lastname" name="lastname" type="text" value={formik.values.lastname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Last Name*" />
                                    {formik.errors.lastname && formik.touched.lastname ? <span style={{ color: '#C2000F' }}>{formik.errors.lastname}</span> : null}
                                </div>

                                <div className="mt-0.5">
                                    <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="mobileno" name="mobileno" type="text" value={formik.values.mobileno} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Mobile Number" />
                                    {formik.errors.mobileno && formik.touched.mobileno ? <span style={{ color: '#C2000F' }}>{formik.errors.mobileno}</span> : null}
                                </div>
                                <div className="mt-0.5">
                                    <input style={{ backgroundColor: '#F9F3FC', color: '#000000', marginRight: '0px' }} id="username" name="username" type="text" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Username*" />
                                    {formik.errors.username && formik.touched.username ? <span style={{ color: '#C2000F' }}>{formik.errors.username}</span> : null}
                                </div>
                            </div>
                            <div className="mt-0.5">
                                <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email*" />
                                {formik.errors.email && formik.touched.email ? <span style={{ color: '#C2000F' }}>{formik.errors.email}</span> : null}
                            </div>
                            <div className="mt-0.5">
                                <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="address" name="address" type="text" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Address" />
                                {formik.errors.address && formik.touched.address ? <span style={{ color: '#C2000F' }}>{formik.errors.address}</span> : null}
                            </div>
                            <div className="mt-0.5">
                                <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }}
                                    id="card" name="card" type="number" value={formik.values.card}
                                    onBlur={() => checkCardExists(formik.values.card)}
                                    onChange={formik.handleChange}
                                    className="form-control form-control-sm" placeholder="Credit Card Number" />
                                {formik.touched.card || formik.errors.card ?
                                    <span style={{ color: '#C2000F' }}>{formik.errors.card}</span> : null}
                            </div>


                           
                    <div className="cvv mt-0.5">
                        <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="month" name="month" type="number" value={formik.values.month} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="mm/yy" />
                        {formik.errors.month && formik.touched.month ? <span style={{ color: '#C2000F' }}>{formik.errors.month}</span> : null}
                    </div>


                    <div className="cvv mt-0.5">
                        <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="cvv" name="cvv" type="password" value={formik.values.cvv} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="CVV" />
                        {formik.errors.cvv && formik.touched.cvv ? <span style={{ color: '#C2000F' }}>{formik.errors.cvv}</span> : null}
                    </div>



                    <div className="password mt-0.5">
  <div className="input-group">
    <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="password" name="password" type={passwordVisibility ? "text" : "password"} value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password*" />
    <div className="input-group-append" >
      <button className="btn-light2" style={{backgroundColor: '#FFFFFF', padding: '5px'}} type="button" onClick={() => setPasswordVisibility(!passwordVisibility)}>
        <i className={`fas fa-eye${passwordVisibility ? "-slash" : ""}`} style={{fontSize: '1em' }} />
      </button>
    </div>
  </div>
  {formik.errors.password && formik.touched.password ? <span style={{ color: '#C2000F' }}>{formik.errors.password}</span> : null}
</div>


                    <div className="password mt-0.5">
                        <input style={{ backgroundColor: '#F9F3FC', color: '#000000' }} id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Confirm Password*" />
                        {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span style={{ color: '#C2000F' }}>{formik.errors.confirmpassword}</span> : null}

                    </div>
                    <div className=" mt-2 text-center">
                        <button style={{ width: '20vw' }} type="submit" className="btn btn hover-red">Submit</button>
                    </div>
                   
                </form>

            </div>


            <div className="col-xs-12 col-md-6" style={{ paddingTop: '9vh' }}>
                {" "}
                <img src={image} className="img-responsive" alt="" />{" "}
            </div>
        </div>
        </div>
        </div>

    )
}

