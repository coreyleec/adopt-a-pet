import React, { PureComponent } from 'react'
import Navbar from "./Navbar"
// import Navbar from "./Component/Navbar"
import DogContainer from './SavedDogsCard'


class BreederHomePage extends PureComponent {
    
    state = {
        dogs:this.props.currentLogin.pets,
        expandContainer:false,
        itemsToShow: 4
    }

    
     
    render() {
        
    
        return (
            <div>
                <Navbar />
                <div id="flex-inline-block">
                    <div class="saved-dogs">
                        <h1>manage dogs</h1>
                        {console.log(this.props.currentLogin)}
                        
                        {this.state.dogs.map(dog =><DogContainer dog={dog} key={dog.id}/>)}
                    <br></br>

                    </div>
                    <div class="float-child">
                        <h1>view requests</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreederHomePage