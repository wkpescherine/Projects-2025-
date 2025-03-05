function SellComp(){
    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <input class="sellInput" type="text" placeholder="Coin Type"></input>
                <input class="sellInput" type="text" placeholder="Coin Type"></input>
                <input class="sellInput" type="text" placeholder="Coin Type"></input>
                <div style={{width:"100px", justifyContent:"center"}}>
                    <button class='buyButton'>SELL</button>
                </div>
            </div>
        </div>
    )
}

export default SellComp;