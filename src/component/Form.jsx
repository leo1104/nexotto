import React, { useState, useEffect } from "react";
export default function Form() {
    
    const [mail, setmail] = useState("");
  const [password,setPassword]=useState("")
  const [people, setPeople] = useState([]);

  const data={
      Email:mail,
      Password:password
  }
  const updateForm = async () => {
    let url = "https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2";
    let data = await fetch(url);
    let parsedData = await data.json();
    setPeople(parsedData.user);
  };

  useEffect(() => {
    updateForm();
  }, []);

  

  const handleSubmit= (event)=>{

    alert('A form was submitted: ' + mail);
    
    fetch('https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119', {
        method: 'POST',
        body: JSON.stringify(data),
        redirect:"follow"  
      }).then(function(response) {
        window.location.href="https://nexotto.com"
        console.log(response)
        return response.json();
      });

    event.preventDefault();
  }

  return (
    <div className="login">
      <h1 className="Heading">Nexotto</h1>
{mail===people.email?<h3 className="subheading">Hello, {people.firstName} {people.lastName}</h3>:< h3 className="subheading">Login to Nexotto</h3>}
<form onSubmit={handleSubmit}  className="form">
<div className="mail">
<label htmlFor="email">Email :</label>
      <input
      className="email"
          type="email"
          placeholder="Enter your Email"
          onChange={(event) => {
            setmail(event.target.value);
          }}
          value={mail}
          name="email"
        />  
        </div>
  {mail === people.email ? 
          <div>
            <div className="pass">
            <label htmlFor="password">Password :</label>
            <input className="password" type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
        <button  className="submit" type="submit" value="Submit">Submit</button>
          </div>
         : 
          ""
        }
        </form>
    </div>
  );
}
