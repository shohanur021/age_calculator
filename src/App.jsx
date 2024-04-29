import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedDate, setDate] = useState(null);
  var birth = Date.parse(selectedDate);
  var today = Date.now();
  let year = (today - birth) / (1000 * 86400 * 365);
  let month = (year - Math.floor(year)) * 12;
  let day = (month - Math.floor(month)) * 30;
  year = Math.floor(year);
  month = Math.floor(month);
  day = Math.floor(day);
  console.log(today - birth)
  console.log(year, month, day);
    
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <div>
        <h1 className="app_title">Calculate Your Age</h1>
        <br />
        <p className="select_birthdate">Select our birthdate:</p>
        <input type='date' onChange={e=>setDate(e.target.value)}/>
        { 
        (year<0 || month<0 || day<0) ? <p className="wrong_birth">Do you come from the future?</p> : <p id="show_age"> Your age is: {year >= 1 ? <span>{year} year </span> : ""} {month >= 1 ? <span>{month} month </span> : ""} {day >= 1 ? <span>{day} day </span> : ""} </p>
        }
      </div>
    </div>
  );
}

export default App;
