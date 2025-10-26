import './App.css';

function Patients() {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"50px", fontSize:"12px"}}>0000</p>
                <p style={{width:"200px", fontSize:"12px"}}>Patient</p>
                <p style={{width:"100px", fontSize:"12px"}}>Email</p>
                <p style={{width:"100px", fontSize:"12px"}}>Contact #</p>
                <div style={{ width:"100px", display: "flex", justifyContent: "center"}}>
                    <button>Select</button>
                </div>
            </div>
        </div>
    ); 
}

export default Patients;