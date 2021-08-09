import React, { Component } from "react";

export default class UserLogin extends Component {
    state = {
        userName: "",
        userPassword: "",
        sellerName: "",
        sellerPassword: "",
        userClickedSignup: false,
        sellerClickedSignup: false,
        signupName: "",
        signupPassword: "",
        signupAddress: "",
        signupPhone: "", 
        signupEmail: ""
    }

    

    handleUserLogin = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        fetch("http://localhost:3000/userlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                password: e.target[1].value
            })
        })
        .then(res => res.json())
        .then(user => {
            console.log("first", user)
            console.log("second", user.user)
            localStorage.token = user.token
            if(localStorage.token != "undefined") {
                // this.props.history.push(`/userhomepage/${user.id}`)
                    let userinfo = user.user 

                    this.props.handleCurrentLogin(userinfo)
                    this.props.history.push("/userhomepage/")

            }else {
                alert("try one more time")
            }
        })
 
        // this.props.history.push("/userhomepage")
    }

    handleSellerLogin = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/sellerlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                password: e.target[1].value
            })
        })
        .then(res => res.json())
        .then(seller => {
            localStorage.token = seller.token
            if(localStorage.token != "undefined") {
                console.log("seller:",seller)
                let sellerInfo = seller.seller 
                this.props.handleCurrentLogin(sellerInfo)
                this.props.history.push("/breederhomepage")
            }else {
                alert("try one more time")
            }
        })
    }

    handleUserSignUp = (e) => {
        e.preventDefault()
        let newUser = {
            // [e.target.name]: e.target.value,
            name: e.target[0].value,
            password: e.target[1].value,
            address: e.target[2].value,
            phone:e.target[3].value,
            email:e.target[4].value,
        }

        fetch("http://localhost:3000/usersignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(user => {
            localStorage.token = user.token
            if(localStorage.token != "undefined") {
             this.props.history.push("/userhomepage")
            }else {
                alert("try one more time")
            }
        })
    }

    handleSellerSignUp = (e) => {
        e.preventDefault()
        let seller = {
            // [e.target.name]: e.target.value,
            name: e.target[0].value,
            password: e.target[1].value,
            address: e.target[2].value,
            phone:e.target[3].value,
            email:e.target[4].value,
        }

        fetch("http://localhost:3000/sellersignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(seller)
        })
        .then(res => res.json())
        .then(seller => {
            localStorage.token = seller.token
            if(localStorage.token != "undefined") {
             this.props.history.push("/breederhomepage")
            }else {
                alert("try one more time")
            }
        })
    }

    handleRegister = () => {
        this.props.history.push("/signup")
    }

    toggleUserSignup = () => {
        this.setState({
            userClickedSignup: !this.state.userClickedSignup
        })
    }
    toggleSellerSignup = () => {
        this.setState({
            sellerClickedSignup: !this.state.sellerClickedSignup
        })
    }


    render() {
        return (
            <div>
                
                
                

                {/* <Navbar parentName={document.title} /> */}

            <div class="float-container">
                
{/* USER */}
                <div class="float-child">
               {this.state.userClickedSignup 
                ?<div>
                    <h3> please enter info  </h3>

                    <form onSubmit={(e) => this.handleUserSignUp(e)}>
                        <input type="text" name="username" value={this.state.signupName}
                        placeholder="Enter your Username"
                        onChange={(e) => this.setState({
                            signupName: e.target.value
                        }) }
                        />
                        <br/>
                        <input 
                        type="password" name="password" value={this.state.signupPassword}
                        placeholder="Enter your Passwords"
                        onChange={(e) => this.setState({
                            signupPassword: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="address" value={this.state.signupAddress}
                        placeholder="Enter your Address"
                        onChange={(e) => this.setState({
                            signupAddress: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="phone" value={this.state.signupPhone}
                        placeholder="Enter your Phone"
                        onChange={(e) => this.setState({
                            signupPhone: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="email" value={this.state.signupEmail}
                        placeholder="Enter your Email"
                        onChange={(e) => this.setState({
                            signupEmail: e.target.value
                        })}/>
                        <br/>
                        <button>Submit </button>
                    </form>
                </div>
                    
                :<div>
                    <h1>User sign-in</h1>
                    <form onSubmit={ (e) => this.handleUserLogin(e) }>
                        <input 
                        type="text" name="username"
                        value={this.state.userName}
                        placeholder="Enter your username"
                        onChange={(e) => this.setState({
                            userName: e.target.value
                        })}/>
                    <br/>
                        <input 
                        type="password" name="password"
                        value={this.state.userPassword}
                        placeholder="Enter your passwords"
                        onChange={(e) => this.setState({
                            userPassword: e.target.value
                        })}/>
                    <br/>
                    <button> Login </button>
                </form>
                <button onClick={() => this.toggleUserSignup()}>Signup</button>
                    </div>}
                    </div>

{/* SELLER */}  
<div class="float-child">
               {this.state.sellerClickedSignup 
                ?<div>
                    <h3> please enter info  </h3>
                    <form onSubmit={(e) => this.handleSellerSignUp(e)}>
                        <input type="text" name="username" value={this.state.signupName}
                        placeholder="Enter your Username"
                        onChange={(e) => this.setState({
                            signupName: e.target.value
                        }) }
                        />
                        <br/>
                        <input 
                        type="password" name="password" value={this.state.signupPassword}
                        placeholder="Enter your Passwords"
                        onChange={(e) => this.setState({
                            signupPassword: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="address" value={this.state.signupAddress}
                        placeholder="Enter your Address"
                        onChange={(e) => this.setState({
                            signupAddress: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="phone" value={this.state.signupPhone}
                        placeholder="Enter your Phone"
                        onChange={(e) => this.setState({
                            signupPhone: e.target.value
                        })}/>
                        <br/>
                        <input 
                        type="text" name="email" value={this.state.signupEmail}
                        placeholder="Enter your Email"
                        onChange={(e) => this.setState({
                            signupEmail: e.target.value
                        })}/>
                        <br/>
                        <button>Submit </button>
                    </form>
                </div>
                    
                :<div>
                    <h1>Seller sign-in</h1>
                    <form onSubmit={ (e) => this.handleSellerLogin(e) }>
                        <input 
                        type="text" name="username"
                        value={this.state.sellerName}
                        placeholder="Enter your username"
                        onChange={(e) => this.setState({
                            sellerName: e.target.value
                        })}/>
                    <br/>
                        <input 
                        type="password" name="password"
                        value={this.state.sellerPassword}
                        placeholder="Enter your passwords"
                        onChange={(e) => this.setState({
                            sellerPassword: e.target.value
                        })}/>
                    <br/>
                    <button> Login </button>
                </form>
                <button onClick={() => this.toggleSellerSignup()}>Signup</button>
                    </div>}
                    </div>
            </div>




            </div>
        )
    }
}