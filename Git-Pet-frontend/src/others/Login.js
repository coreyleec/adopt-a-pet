import React, { Component } from "react";
import UserLogin from "../Component/UserLogin";
import BreederLogin from "./BreederLogin";

export default class Login extends Component {

    handleUserLoginClick = () => {
        this.props.history.push("/userlogin")

    }

    handleBreederLoginClick = () => {
        this.props.history.push("/breederlogin")
    }



    render() {
        return (
            <div>
                <div onClick={() => this.handleUserLoginClick()}>
                    User Login
                </div>

                <div onClick={() => this.handleBreederLoginClick()}> 
                    Breeder login 
                </div>
            </div>
        )
    }
}