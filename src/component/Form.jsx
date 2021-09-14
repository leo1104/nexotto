import React, { useState} from "react";
export default function Form(props) {
    
    const [mail, setmail] = useState("");
  const[msg,setMsg]=useState(false)
  console.log(props.email)
  function handleClick(e){
    if(mail===props.email){
      window.location.href="/signIn"
    }
    else{
setMsg(true)      
    }
    e.preventDefault()  
  }

    

  return (
    <div className="login">
      <h1 className="Heading">Nexotto</h1>
<form  className="form">
<div className="mail">
 {msg? <p>Invalid user email</p>:""}
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
        <button className="submit" type="submit" onClick={handleClick}>Verify</button>
        </form>
    </div>
  );
}
