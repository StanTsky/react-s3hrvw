import React from "react";
import "./style.css";

export default function App() {
  return (
    <style>
.content {
  max-width: 500px;
  margin: auto;
}
</style>
    <div class="content">
	<img src="CalendarLogo.png" alt="Logo"/>
	<br /><br />
	<hr border: 450px solid Black; border-radius: 100px>

      <label for="username"> Username:</label>
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="password">Password :</label>
      <input type="text" id="lname" name="lname" />
      <br />
      <input type="submit" value="Submit" />
    </div>
  );
}
