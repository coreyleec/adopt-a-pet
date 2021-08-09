import React, { Component } from "react";

export default class BreederLogin extends Component {
    state = {
        username: "",
        password: ""
    }
        
    handleRegister = () => {
        this.props.history.push("/signup")
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Enter your username"
                    onChange={(e) => this.setState({
                        username: e.target.value
                    })}/>
                    <br/>
                    <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter your passwords"
                    onChange={(e) => this.setState({
                        password: e.target.value
                    })}/>
                    <br/>
                    <button> Login </button>
                </form>
                <button onClick={() => this.handleRegister()}>Signup</button>
            </div>
        )
    }
}