import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLogin from "./others/Login"
import Signup from "./others/Signup"
import UserHomePage from "./Component/UserHomePage"
import UserLogin from "./Component/UserLogin";
import BreederLogin from "./others/BreederLogin";
import BreederHomePage from "./Component/BreederHomePage"
import React, { useState, useEffect } from 'react';
import BreederProfile from "./Containers/BreederProfile"
import AllDogsContainer from "./Containers/AllDogsContainer"
import CreateDogForm from './Component/CreateDogForm';
import UpdateBreederProfileForm from './Component/UpdateBreederProfileForm'

// userRequestDog = () => {
//   debugger
// }


function App() {
  let [dog, setDog] = useState([])
  let [user, setUser] = useState([])
  let [breeder, setBreeder] = useState([])
  let [order, setOrder] = useState([])  
  let [currentLogin, setCurrentLogin] = useState({})


  let handleCurrentLogin =(loginObj) => {
    setCurrentLogin(loginObj)
  }


  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then(res => res.json())
    .then(dogs => setDog(dogs))
    
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => setUser(users))

    fetch("http://localhost:3000/sellers")
    .then(res => res.json())
    .then(breeder => setBreeder(breeder))
    
    fetch("http://localhost:3000/orders")
    .then(res => res.json())
    .then(order => setOrder(order))

  }, [])

  let saveDog = (userSavedDog) => {
    console.log(userSavedDog)
    fetch(`http://localhost:3000/pets/${userSavedDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentLogin.id, 
      })
    })
    .then(resp => resp.json())
    .then(user => {
      setCurrentLogin(user)
    })
  }


  let dogOrder = (pet) => {
    fetch(`http://localhost:3000/order/}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentLogin.id,
        seller_id: pet.seller.id,
      })
    })
    .then(resp => resp.json())
    .then(orderArray => {
        setOrder(orderArray)
    })
  }


  

  const updateBreederProfile = (breederData) => {
    debugger
  }

  // console.log(currentLogin)
  return (

    <Router>
    <div className="App">
      <Switch>

          <Route exact path="/landing" component={(props) => (
            <UserLogin {...props} handleCurrentLogin={handleCurrentLogin} user={user}/>
          )} />


            <Route exact path="/userhomepage" component={(props) => (
            <UserHomePage {...props} order={order} dogOrder={dogOrder} currentLogin = {currentLogin}
            // userRequestDog={this.userRequestDog} 
            />
          )} /> 
          
          <Route exact path="/breederhomepage" component={(props) => (
            <BreederHomePage order={order} dogOrder={dogOrder} currentLogin={currentLogin}
            />
          )} /> 

          <Route exact path="/userprofile" component={(props) => (
            <CenterDiv  {...props} currentLogin={currentLogin} />
          )} />
          <Route exact path="/breederprofile" component={(props) => (
            <BreederProfile  {...props} currentLogin={currentLogin} breeder={breeder}/>
          )} />
            <Route exact path="/dogs" component={(props) => (
            <AllDogsContainer saveDog={saveDog} currentLogin={currentLogin}  {...props} dogs={dog}/>
          )} />
          
           <Route exact path="/updatebreederprofileform" component={(props) => (
            <UpdateBreederProfileForm currentLogin={currentLogin} updateBreederProfile={updateBreederProfile} />
              )} /> 

              <Route exact path="/add-dog" component={(props) => (
                <CreateDogForm currentLogin={currentLogin}  {...props} dogs={dog}/>
              )} />
          
            

      </Switch>
    </div>
  </Router>
  );
}

export default App;
