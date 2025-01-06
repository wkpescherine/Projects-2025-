function Display(props) {
    return (
        <div>
            <div style={{justifyContent: "center", width: "300px"}}></div>
            {props.sendData}
        </div>
    ); 
}

export default Display;