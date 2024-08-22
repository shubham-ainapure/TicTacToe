import { useContext } from "react"
import { gameContext } from "../Context/context"
import { useLocation } from "react-router-dom";

function Restart(){

 const context=useContext(gameContext);
 const winner=document.querySelector('.winner');
 const location=useLocation();
  const draw=context.draw;
 const {player1,player2}=location.state || {};
    const restart=()=>{
        context.setMarks(Array(9).fill(''));
        context.setStatus(true);
        context.setTurn(true);
        context.setDraw(false);
        context.item.forEach(item => item.style.color = 'white');
        winner.style.display='none';

       }

    return(
        <div className='head'>
        <h3 className="winner">{draw ? 'Draw': context.turn ? `${player2} won`:`${player1} won`}</h3>
        <button onClick={restart}>Restart</button>
       </div>
    )
}
export default Restart