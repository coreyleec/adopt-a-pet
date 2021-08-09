import React, { Component } from "react";
import SavedDogsCard from './SavedDogsCard'
import Navbar from "./Navbar"
import RequestContainer from "../Containers/RequestContainer"
export default class UserHomePage extends Component {

    render() {
        console.log(this.props.currentLogin.pets)
        return (
            <div>
           {Object.keys(this.props.currentLogin).length > 0
                ?<div>
                <Navbar UserNavbar={UserHomePage}/>
                <p>Welcome back {this.props.currentLogin.name}</p>
                <p>{this.props.currentLogin.email}</p>
                <div id="flex-inline-block">
                    <div class="saved-dogs">
                        <h1>saved dogs</h1>
                        {this.props.currentLogin.pets.map(dog =><SavedDogsCard dog={dog} key={dog.id}/>)}
                    </div>
                    
                    <div class="float-child">
                    <h1>view requests</h1>
                    {this.props.order.map(order =><RequestContainer order={order} key={order.id} />)}
                    </div>
                </div>
            </div>
            :this.props.history.push('/landing')
    }
            
            </div>
        )
    }
}