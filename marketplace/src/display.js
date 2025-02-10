import Profile from "./profile"
import Portfolio from "./portfolio"
import Home from "./home"
import Market from "./market"
import Bank from "./bank"
import Vault from "./vault"
import Settings from "./settings"
import About from "./about"

function Display(props) {
    return (
        <div style={{justifyContent: "center", width: "400px", marginLeft:"10px", backgroundColor:"#333", paddingTop: "50px", height: "500px"}}>
            {props.sendData==="Home" && <Home/>}
            {props.sendData==="Profile" && <Profile/>}
            {props.sendData==="Portfolio" && <Portfolio/>}
            {props.sendData==="Market" && <Market />}
            {props.sendData==="Bank" && <Bank />}
            {props.sendData==="Vault" && <Vault />}
            {props.sendData==="Settings" && <Settings />}
            {props.sendData==="About" && <About />}
        </div>
    ); 
}

export default Display;