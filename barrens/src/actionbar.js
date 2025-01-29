import {useNavigate} from 'react-router-dom'

function Actionbar(props){
    let navigate = useNavigate();

    function RedirectToTitle(){ navigate('/')}

    function setResponseInv(){
        props.getResp('inv')
    }

    function setResponseHome(){
        props.getResp("home")
    }

 

    return(
        <div style={{width:"810px", height:"40px", background:"#999", margin:"5px"}}>
            <button style={{height:"35px", margin: "3px"}} onClick={setResponseHome}>Home</button>
            <button style={{height:"35px", margin: "3px"}}>Char</button>
            <button style={{height:"35px", margin: "3px"}} onClick={setResponseInv}>Inv</button>
            <button style={{height:"35px", margin: "3px"}}>Skills</button>
            <button style={{height:"35px", marginTop: "3px"}} onClick={RedirectToTitle}>Exit</button>
        </div>
    );
}

export default Actionbar;