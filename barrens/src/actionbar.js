import {useNavigate} from 'react-router-dom'

function Actionbar(){
    let navigate = useNavigate();

    function RedirectToTitle(){ navigate('/')}

    return(
        <div style={{width:"710px", height:"40px", background:"#999", margin:"5px"}}>
            <button style={{height:"35px", margin: "3px"}}>Home</button>
            <button style={{height:"35px", margin: "3px"}}>Char</button>
            <button style={{height:"35px", margin: "3px"}}>Inv</button>
            <button style={{height:"35px", margin: "3px"}}>Skills</button>
            <button style={{height:"35px", marginTop: "3px"}} onClick={RedirectToTitle}>Exit</button>
        </div>
    );
}

export default Actionbar;