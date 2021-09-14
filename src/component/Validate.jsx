import React,{useState} from 'react'

function Validate(props) {
    const [password,setPassword]=useState("")

    return (
        
        <div className="login pass">
        <p className="greet">Hello,{props.name} Please enter password to continue</p>
  <form onSubmit={props.handleSubmit}  className="form">
  <div className="mail">
  <label htmlFor="email">Password :</label>
        <input
        className="email"
        onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" value={password}/>  
          </div>
          <button disabled={!password} className="submit" type="submit" onClick={props.getPass(password)}>Continue</button>
          </form>
      </div>
    )
}

export default Validate
