import React, { PureComponent } from 'react'
import AllDogsCard from '../Component/AllDogsCard'
import Navbar from '../Component/Navbar'
class AllDogsContainer extends PureComponent {
    state = {
        
    }

    render() {
        
        console.log(this.props.dogs)
        return (
            <div>
                <Navbar UserNavbar={AllDogsContainer}/>
                {this.props.dogs.map(dog=><AllDogsCard saveDog={this.props.saveDog} currentLogin={this.props.currentLogin} dog={dog} key={dog.id}/>)}
            </div>
        )
    }
}

export default AllDogsContainer

