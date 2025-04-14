import React, {useState} from 'react';

function CompleteCreate(){
    const[charName,setCharName] = useState ("");
    
    const handleCharNameChange = (event) => {
        setCharName(event.target.value)
    }
    
    return(
        <div>
            <p>
                <input class="inputField" type="text" placeholder="Enter name" onChange={handleCharNameChange}></input>
            </p>
            <button>Create</button>
        </div>
    )
}

export default CompleteCreate;