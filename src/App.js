import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hi Haseeb!</h1>
      <p>Can you read this? :)</p>

      <label for="username"> Username:</label>
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="password">Password12345 :</label>
      <input type="text" id="lname" name="lname" />
      <br />
      <input type="submit" value="Submit" />
    </div>
  );
}
