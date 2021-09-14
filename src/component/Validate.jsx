import React,{useState} from 'react'

function Validate(props) {
    const [password,setPassword]=useState("")

    return (
        
        <div className="login pass">
        <p className="greet">Hello,{props.fname} {props.lname} <br /><span style={{fontSize:"12px",fontWeight:"300"}}> Please enter password to continue</span></p>
  <form onSubmit={props.handleSubmit}  className="form">
  <div className="mail">
  <label htmlFor="email">Password :</label>
        <input
        className="email"
        onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" value={password}/>  
          </div>
          <button placeholder="Enter your Password" disabled={!password} style={!password?{color:"black",backgroundColor:"white",border:"1px solid black"}:{color:"white",backgroundColor:"#2DEAD2"}} className="submit" type="submit" onClick={props.getPass(password)}>Continue</button>
          </form>
      </div>
    )
}

export default Validate
