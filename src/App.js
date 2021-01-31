import React from "react";
import "./style.css";
import logo from '../CalendarLogo.png';

export default function App() {
  return (
    
    <div class="content">
	<img src={logo}
        alt="Logo"
      />
	<br /><br />


      <label for="username"> Username :</label>
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="password">Password :</label>
      <input type="text" id="lname" name="lname" />
      <br />
      <input type="submit" value="Submit" />
    </div>
  );
}
