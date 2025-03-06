import React, {useState, useContext} from 'react';

function Bank(){
    const[bonesAvailable, setBonesAvailable] = useState(0)
    const[personalBonesAvailable, setPersonalBonesAvailable] = useState(0)

    return(
        <div style={{justifyContent: "center"}}>
            <label>Bank</label>
            <br></br>
            <label class="headerSubText">Current bone value: $0.00 USD</label>
            <div>
                <label>Purchase bones:</label>
                <input class="bankbones"></input>
                <label> of {bonesAvailable}</label>
                <button class="buyButton">BUY</button>
            </div>
            <div>
                <label>Sell bones:</label>
                <input class="bankbones"></input>
                <label> of {personalBonesAvailable}</label>
                <button class="buyButton">BUY</button>
            </div>
        </div>
    )
}

export default Bank;