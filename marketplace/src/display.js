function Display(props) {
    return (
        
        <div style={{justifyContent: "center", 
                     width: "400px",
                     marginLeft:"10px", 
                     backgroundColor:"#333", 
                     paddingTop: "50px", 
                     paddingBottom: "100%"}}>
            <p>{props.sendData}</p>
        </div>
    ); 
}

export default Display;