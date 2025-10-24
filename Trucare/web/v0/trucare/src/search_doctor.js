import './App.css';

function SearchDoctor() {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"150px", fontSize:"12px"}}>Doctor</p>
                <p style={{width:"100px", fontSize:"12px"}}>City</p>
                <p style={{width:"50px", fontSize:"12px"}}>St</p>
                <p style={{width:"100px", fontSize:"12px"}}>00000</p>
                <p style={{width:"1px", fontSize:"12px"}}></p>
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <button>Select</button>
                </div>
            </div>
        </div>
    ); 
}

export default SearchDoctor;