import Marketcoin from "./customElements/marketcoin"

function Market (){
    return(
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Market</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{width:"100px", color:"#ffdf00"}}>Coin Type</div>
                <div style={{width:"100px", color:"#ffdf00"}}>Price (B)</div>
                <div style={{width:"100px", color:"#ffdf00"}}>Size</div>
            </div>
            <Marketcoin />
        </div>
    )
}

export default Market;