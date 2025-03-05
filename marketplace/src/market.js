import BuyComp from "./customElements/buycomp"
import SellComp from "./customElements/sellcomp"

function Market (){
    return(
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Market</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{width:"100px", color:"#ffdf00"}}>Coin</div>
                <div style={{width:"100px", color:"#ffdf00"}}>Bone cost</div>
                <div style={{width:"100px", color:"#ffdf00"}}>Quantity</div>
                <div style={{width:"100px", color:"#ffdf00"}}>Action</div>
            </div>
            <div>
                <BuyComp />
                <SellComp />
            </div>
        </div>
    )
}

export default Market;