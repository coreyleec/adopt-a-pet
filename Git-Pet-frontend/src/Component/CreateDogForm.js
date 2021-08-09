import React from 'react'
import {useState} from 'react'

const CreateDogForm = (props) => { 
    // const {} = props
    let [display, setDisplay] = useState(false)
    let [maleChecked, setMaleChecked] = useState(false)
    let [femaleChecked, setFemaleChecked] = useState(false)
    let [name, setName] = useState("")
    let [breed, setBreed] = useState("")
    let [age, setAge] = useState("")
    let [size, setSize] = useState("")

    let handleMaleChecked = () => {
        setMaleChecked(true)
    }

    let handleFemaleChecked = () => {
        setFemaleChecked(true)
    }

    let handleCreate = () => {
        setDisplay(!display)
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        let newPet = {
            name: e.target[0].value,
            breed: e.target[1].value,
            age: e.target[2].value,
            gender: e.target[3].value,
            size: e.target[4].value,
            seller_id: props.currentLogin.id,
            // user_id: null,
            // order_id: null
        }
console.log(newPet)
        fetch("http://localhost:3000/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(res => res.json())
        .then(pet => {
            {console.log(pet)}
            // alert(`${pet.name} is added to your profile` )
        })
    }

    return (
        <div>
            {console.log(props.currentLogin)}
           {display
        ?<div className={"dog-form"}>
            <button onClick={() => handleCreate() }>Hide</button>
            <form className={"dog-form"} onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text" name="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text" name="breed"
                value={breed}
                placeholder="Enter breed"
                onChange={(e) => setBreed(e.target.value)}
                />
                <input 
                type="text" name="age"
                value={age}
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
                />                
                {/* <input 
                type="text" name="gender"
                value=""
                placeholder="Enter your gender"
                /> */}
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input 
                type="text" name="size"
                value={size}
                placeholder="Enter size"
                onChange={(e) => setSize(e.target.value)}
                />
            <button>submit</button>
        </form>
        </div>
        :<button onClick={() => handleCreate() }>Create</button>
        }
        </div>
    )
}


export default CreateDogForm
