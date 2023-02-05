import React from 'react';
import './main.css';
import './util.css';
import image from "../Assets/registerimage.png";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import * as yup from 'yup'


export default function  Contactus() {
	let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
		onSubmit: (values, action) => {
            fetch('http://localhost:8080/api/v3/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => { swal("Thank you for reaching out!", "Your message has been successfully sent. We will respond to your inquiry as soon as possible.", "success") });
                action.resetForm();
				navigate("/Contactus");
        },

        onChange: values => {
            
            console.log("I am inside On Change ...")

        },

		validationSchema: yup.object().shape({

            name: yup.string()
                .min(3, 'Name is too short')
                .required('Please enter your name'),
			email: yup.string()
				.email('Invalid Email Address')
                .required('Email cannot be left blank'),
			subject: yup.string()
                .min(3, 'Subject is too short')
                .required('Please enter the Subject'),
			message: yup.string()
                .min(30, 'Message must be of at least 30 characters')
                .max(300, 'Message is too long')
                .required('Please enter the message'),
			}),
});
    return (
        <div className="contact1" style={{backgroundColor: '#42145F'}}>
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
            <img src={image} className="img-responsive" alt="" />{" "}
			</div>
			
			<form className="contact1-form validate-form"  onSubmit={formik.handleSubmit}>
				<span className="contact1-form-title" style={{fontWeight: 'bold', color: '#42145F'}} >
					Get in touch
				</span>

				<div className="wrap-input1 validate-input">
					<input className="input1" value={formik.values.name} onBlur={formik.handleBlur}  onChange={formik.handleChange} id= "name" type="text" name="name" placeholder="Name"/>
					{formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name}</span> : null}
                    </div>
			

				<div className="wrap-input1 validate-input">
					<input className="input1" value={formik.values.email} onBlur={formik.handleBlur}  onChange={formik.handleChange} id="email" type="text" name="email" placeholder="Email"/>
					{formik.errors.email && formik.touched.email ?<span className="text-danger">{formik.errors.email}</span> : null}
				</div>

				<div className="wrap-input1 validate-input">
					<input className="input1" value={formik.values.subject} onBlur={formik.handleBlur}  onChange={formik.handleChange} id="subject" type="text" name="subject" placeholder="Subject"/>
					{formik.errors.subject && formik.touched.subject ?<span className="text-danger">{formik.errors.subject}</span> : null}
				</div>

				<div className="wrap-input1 validate-input">
					<textarea className="input1" value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} id= "message" type="text" name="message" placeholder="Message"></textarea>
					{formik.errors.message && formik.touched.message ?<span className="text-danger">{formik.errors.message}</span> : null}
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn" type="submit" >
						
							Submit
					
						
					</button>
				</div>

				
			</form>
		</div>
	</div>
    )

}
