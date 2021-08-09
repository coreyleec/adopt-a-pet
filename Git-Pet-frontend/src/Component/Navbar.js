import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import UserHomePage from './UserHomePage';
import CreateDogForm from './CreateDogForm'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'orange',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '0 px',
  
  }
const Navbar = (props) => {

        return (
            <span className={"navbar"}>
                <h1 style={{textAlign:"left"}}>Git_Pet</h1>
        {props.UserNavbar ?
// USER
                <nav>
                <NavLink
                  to="/landing"
                  exact
                  style={link}
                  
                  >Home</NavLink>
      
                <NavLink
                  to="/reminders"
                  exact
                  style={link}
                  activeStyle={{
                    background: 'grey'
                  }}
                  >log out</NavLink>
      
                <NavLink
                  to="/dogs"
                  exact
                  style={link}
                  //   activeStyle={{
                    //     background: 'grey'
                    //   }}
                    >search dogs</NavLink>
              </nav>
// SELLER
            :  <nav> 
              {/* <CreateDogForm currentLogin={this.props.currentLogin}/> */}
            <NavLink
              to="/landing"
              exact
              style={link}
              //   activeStyle={{
                //     background: 'grey'
                //   }}
            >Home</NavLink>
  
            <NavLink
              to="/breederprofile"
              exact
              style={link}
            //   activeStyle={{
            //     background: 'grey'
            //   }}
            >Update profile</NavLink>
  
            <NavLink
              to="/add-dog"
              exact
              style={link}
              >Add Dog</NavLink>
          </nav>
            }
       
      </span>
        )
    }


export default Navbar