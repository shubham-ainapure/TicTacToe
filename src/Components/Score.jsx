import { useContext, useEffect,useState } from "react"
import { gameContext } from "../Context/context";
import { useLocation } from "react-router-dom";

function Score(){
  const context=useContext(gameContext);
  const location=useLocation();
  const {player1,player2}=location.state || {};
    const [x,setX]=useState(0);
    const [o,setO]=useState(0);
    

    useEffect(()=>{
        if(context.status===false && context.turn===false){
            setX(x+1)
           }
           else if(context.status===false && context.turn){
            setO(o+1)
           }
    },[context.status])

    return(
        <div>
        <label className={context.turn ? 'active' : 'normal'}>{player1} : {x}</label>
        <label className={context.turn ? 'normal' : 'active'}>{player2} : {o}</label>
        </div>
    )
}

export default Score