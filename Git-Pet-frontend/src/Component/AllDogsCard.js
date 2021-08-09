import React, { PureComponent } from 'react'

class AllDogsCard extends PureComponent {
    
    state = {
        
    }

    render() {
        let dog = this.props.dog
        console.log(dog)
        return (
               <div className={"dogCard"} >
               <h1>{dog.name}</h1>
                <img>{dog.image}</img>
                <p>{dog.breed}</p>
                <p>{dog.age} years old</p>
                <p>{dog.gender}</p>
                <p>{dog.size} </p>
                <p>seller id: {dog.seller_id}</p>
                <button onClick={()=> this.props.saveDog(dog)}>save dog</button>
                {/* <p>dog card</p>  */}
                </div>
        )
    }
}

export default AllDogsCard