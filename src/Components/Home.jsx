import { useState } from "react"
import '../Style/Home.css'
import { Link, useNavigate } from "react-router-dom"
function Home(){
 const [player1,setPlayer1]= useState('')
 const [player2,setPlayer2]= useState('')
 const navigate=useNavigate()

 const validate=()=>{
    
    if(player1==='' || player2===''){
        alert('please enter player name')
    }
    else
     navigate('/grid',{state:{player1,player2}})
 }
    return(
        <>
         <div className="Container">
         <h2>Tic Tac Toe</h2>
          <input  className='player1' type="text" value={player1} onChange={(e)=>setPlayer1(e.target.value)} placeholder="Player 1 name"/>
          <input className='player2' type="text" value={player2} onChange={(e)=>setPlayer2(e.target.value)} placeholder="Player 2 name"/>
          <button className="start" onClick={validate}>Start</button>
         </div>
        </>
    )
}

export default Home