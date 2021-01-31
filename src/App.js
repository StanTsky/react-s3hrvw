import React from "react";
import "./style.css";

export default function App() {
  return (
    
    <div class="content">
	<img src="CalendarLogo.png" alt="Logo"/>
  <img alt="logo" src={require('./src/CalendarLogo.png')} />
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
