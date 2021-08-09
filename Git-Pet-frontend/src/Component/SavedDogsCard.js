import React, { PureComponent } from 'react'
// import UserHomePage from '../Component/UserHomePage'

class SavedDogsCard extends PureComponent {
    
    state = {
        
    }
    render() {
        let dog = this.props.dog
        // console.log(dog)
        // console.log(currentLogin)

        return (
            <div>
                
                <div className={"dogPreview"} >
                <h1>{dog.name}</h1>
                <img>{dog.image}</img>
                <p>{dog.breed}</p>
                <p>{dog.age} years old</p>
                <p>{dog.gender}</p>
                <p>{dog.size} </p>
                <p>seller id: {dog.seller_id}</p>
                <button>request addoption</button>
                </div>
            </div>
        )
    }
}

export default SavedDogsCard


// import { useState, useEffect } from 'react'
// import Dog from './components/Dog'
// const PetContainer = () => {
    

//         return (
//             <div>
//                 <Dog/>
//             </div>
//         )
//     }


// export default PetContainer