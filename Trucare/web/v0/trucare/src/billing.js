import './App.css';
import Dropdown from "./components/billing/dropdown"
import Receipt from './components/billing/receipt';

function Billing() {
    const dropdownOptions = [
        { value: 'Visit', label: 'Visit', cost: 45 },
        { value: 'Check-up', label: 'Check-Up', cost:25 },
    ];

    const dropdownResults = [
        {value:0 , label:"None" , cost: "0"},
    ];

    const handleOptionSelection = (selected) => {
        console.log('Selected option:', selected);
        console.log('Selected option:', selected.label);
        console.log('Selected res:', dropdownResults.label);
        dropdownResults.label = selected.label
        console.log('Selected rec:', dropdownResults.label);
        // Perform actions based on the selected option
    };

    return (
        <div>
            <p>Billing Screen</p>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"50px", fontSize:"12px"}}>ID</p>
                <input type='text' style={{width: "75px"}}></input>
                <p style={{width:"100px", fontSize:"12px"}}>Patient Name</p>
                <input type='text' style={{width: "200px"}}></input>
                <button style={{marginLeft:"10px"}}>Search</button>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display: "flex", height:"30px"}}>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Date</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}></input>
            </div>
            <Dropdown options={dropdownOptions} onSelect={handleOptionSelection} />
            <div style={{display: "flex", height:"30px"}}>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Other</p>
                <input type='text' placeholder="Enter Code " style={{width: "150px", height:"25px", alignSelf:"center"}}></input>
                <input type='text' placeholder='Enter Cost' style={{width: "75px", height:"25px", alignSelf:"center"}}></input>
                <button> Add</button>
            </div>
            <p style={{width: "500px", height:"25px", alignSelf:"center", justifyContent:"center"}}>Current Cost $0</p>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <Receipt options={dropdownResults} onSelect={handleOptionSelection} />
            <div style={{display: "flex", justifyContent: "center" }}>
                <button>Evaluate</button>
                <button>Save</button>
                <button>Recall</button>
                <button>Clear</button>
                <button>Email</button>
                <button>Charge</button>
            </div>
        </div>
    ); 
}

export default Billing;