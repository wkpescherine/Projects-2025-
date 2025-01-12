import Profile from "./profile"
import Portfolio from "./portfolio"
import Home from "./home"

function Display(props) {
    return (
        
        <div style={{justifyContent: "center", 
                     width: "400px",
                     marginLeft:"10px", 
                     backgroundColor:"#333", 
                     paddingTop: "50px", 
                     paddingBottom: "100%"}}>
            {props.sendData==="Home" && <Home/>}
            {props.sendData==="Profile" && <Profile/>}
            {props.sendData==="Portfolio" && <Portfolio/>}
        </div>
    ); 
}

export default Display;