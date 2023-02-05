import React, {useState} from "react";
import './Travel.css';
import swal from 'sweetalert';
import axios from 'axios';
const TravelNotes = () => {
  const phone = localStorage.getItem("mobileno");
  const [formData, setFormData] = useState({
  firstName: localStorage.getItem("firstname"),
  lastName: localStorage.getItem("lastname"),
  email: localStorage.getItem("email"),
  phone: localStorage.getItem("mobileno"),
  Country: "",
  date: "",
  todate: "",
  });
  const { firstName, lastName, email, Country, date, todate } = formData;
  const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
  await axios.post('http://localhost:8082/api/notes/note', formData);
  swal("Your travel notes have been added successfully", "You can use your card overseas without any stress", "success");
  } catch (error) {
  console.error(error);
  }
  };
  return (
    <div className="testbox">
  <form action="/">
    <div className="banner">
      <h2>Add Travel Notes</h2>
    </div>
    <div className="item">
      <p>Your name</p>
      <div className="name-item mt-1">
        <input type="text" name="firstName" placeholder="First" value={firstName} disabled />
        <input type="text" name="lastName" placeholder="Last" value={lastName} disabled />
      </div>
    </div>
    <div className="item mt-1">
      <p>Email</p>
      <input type="email" name="email" value={email} disabled />
    </div>
        <div className="item mt-1">
          <p>Phone</p>
          <input type="text" name="phone" value={phone} disabled/>
        </div>
        <div className="item mt-1">
          <p>Address</p>
          <input type="text" name="address" placeholder="Street address" required />
          <div className="item mt-1">
      <p>Country</p>
      <select name="Country" value={Country} onChange={handleChange} required>
        <option value="" disabled selected>
          Country
        </option>
        <option value="Russia">Russia</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="Armenia">Armenia</option>
        <option value="USA">USA</option>
      </select>
    </div>
        </div>
        <div className="item mt-1">
      <p>Travel Dates</p>
      <div className="date-item" >
        <input type="date" name="date" value={date} onChange={handleChange} required />
        <h5>To</h5>
        <input type="date" name="todate" value={todate} onChange={handleChange} required />
      </div>
    </div>
        <div className="question">
          <p>Do you have travel insurance with us?</p>
          <div className="question-answer">
            <div>
              <input type="radio" value="Yes" id="radio_1" name="question1" />
              <label htmlFor="radio_1" className="radio">
                <span>Yes</span>
              </label>
            </div>
            <div>
              <input type="radio" value="No" id="radio_2" name="question1" />
              <label htmlFor="radio_2" className="radio">
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="btn-block">
      <button className="travelbutton" type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  </form>
      </div>
  )}
  export default TravelNotes;