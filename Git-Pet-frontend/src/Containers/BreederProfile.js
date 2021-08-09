import React, { Component } from 'react'
import UpdateBreederProfileForm from '../Component/UpdateBreederProfileForm';

class BreederProfile extends Component {
    
    state = {
        
    }

    render() {
        return (
            <div>
                {this.props.breeder.map(breeder => 
                <UpdateBreederProfileForm currentLogin={this.props.currentLogin} key={breeder.id}/>)}
            </div>
        )
    }
}

export default BreederProfile