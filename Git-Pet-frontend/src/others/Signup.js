import React, { Component } from "react";

export default class Signup extends Component {

    render() {
        return (
            <div>
                <h3> please enter info  </h3>
                  <form>
                    <input 
                    type="text"
                    name="username"
                    value=""
                    placeholder="Enter your Username"/>
                    <br/>
                    <input 
                    type="password"
                    name="password"
                    value=""
                    placeholder="Enter your Passwords"/>
                    <br/>
                    <input 
                    type="text"
                    name="address"
                    value=""
                    placeholder="Enter your Address"/>
                    <br/>
                    <input 
                    type="text"
                    name="phone"
                    value=""
                    placeholder="Enter your Phone"/>
                    <br/>
                    <input 
                    type="text"
                    name="email"
                    value=""
                    placeholder="Enter your Email"/>
                    <br/>
                    <button>Submit </button>
                </form>
            </div>
        )
    }
}