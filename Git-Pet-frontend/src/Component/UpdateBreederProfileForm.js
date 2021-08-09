import React, { Component } from 'react'

class UpdateBreederProfileForm extends Component {
    
    state = {
        edit: false,
        editName: false,
        editAddress: false,
        editPhone: false,
        editEmail: false,
        name: this.props.currentLogin.name,
        address: this.props.currentLogin.address,
        phone: this.props.currentLogin.phone,
        email: this.props.currentLogin.email,
        newName: "",
        newAddress: "",
        newPhone: "",
        newEmail: "",
    }
    
    toggleEdit = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: !this.state.edit,
        })
    }

    toggleOff = (e) => {
        // debugger
        console.log(e.target.className)
        this.state.edit !== false
            && e.target.className !== "inputText"
            && this.setState({
            [e.target.name]: !this.state.edit,
            })
    }

    handleUpdatedProfile = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let breeder = this.props.currentLogin
        return (
            <div>
{/* NAME */}
            {this.state.edit
            ? <form onSubmit={(e) => this.props.updateBreederProfile(e, this.state)}>
                <input type="text" className="inputText"
                    defaultValue={this.state.name}
                    onChange={(e) => this.handleUpdatedProfile(e.target.value)}
                ></input>
            </form>
            : <h2 className={"name"} onClick={(e) => this.toggleEdit(e)}>{this.state.name}</h2>}
{/* ADDRESS */}
            {this.state.edit
            ? <form onSubmit={(e) => this.props.updateBreederProfile(e, this.state.newAddress)}>
                <input type="text" className="inputText"
                    defaultValue={this.state.address}
                    onChange={(e) => this.handleUpdatedProfile(e.target.value)}
                ></input>
            </form>
            : <h2 className={"address"} onClick={(e) => this.toggleEdit(e)}>{this.state.address}</h2>}
{/* PHONE */}
            {this.state.edit
            ? <form onSubmit={(e) => this.props.updateBreederProfile(e, this.state.newPhone)}>
                <input type="text" className="inputText"
                    defaultValue={this.state.phone}
                    onChange={(e) => this.handleUpdatedProfile(e.target.value)}
                ></input>
            </form>
            : <h2 className={"phone"} onClick={(e) => this.toggleEdit(e)}>{this.state.phone}</h2>}
             
{/* EMAIL */}
            {this.state.edit
            ? <form onSubmit={(e) => this.props.updateBreederProfile(e, this.state.newEmail)}>
                <input type="text" className="inputText"
                    defaultValue={this.state.email}
                    onChange={(e) => this.handleUpdatedProfile(e.target.value)}
                ></input>
            </form>
            : <h2 className={"phone"} onClick={(e) => this.toggleEdit(e)}>{this.state.email}</h2>}
{/* PASSWORD */}
            {this.state.edit
            ? <form onSubmit={(e) => this.props.updateBreederProfile(e, this.state.newPassword)}>
                <input type="text" className="inputText"
                    defaultValue={this.state.password}
                    onChange={(e) => this.handleUpdatedProfile(e.target.value)}
                ></input>
            </form>
            : <h2 className={"password"} onClick={(e) => this.toggleEdit(e)}>{this.state.email}</h2>}
            </div>
        )
    }
}

export default UpdateBreederProfileForm