import Profile from "./profile"
import Portfolio from "./portfolio"
import Home from "./home"
import Market from "./market"
import Bank from "./bank"

function Display(props) {
    return (
        
        <div style={{justifyContent: "center", 
                     width: "400px",
                     marginLeft:"10px", 
                     backgroundColor:"#333", 
                     paddingTop: "50px", 
                     height: "500px"}}>
            {props.sendData==="Home" && <Home/>}
            {props.sendData==="Profile" && <Profile/>}
            {props.sendData==="Portfolio" && <Portfolio/>}
            {props.sendData==="Market" && <Market />}
            {props.sendData==="Bank" && <Bank />}
        </div>
    ); 
}

export default Display;