import { useCallback, useEffect, useState } from 'react';
import '../Style/Grid.css';
import Score from './Score';
import { gameContext } from '../Context/context';
import Restart from './Restart';

function Grid() {
    const [turn, setTurn] = useState(true);
    const [marks, setMarks] = useState(Array(9).fill(''));
    let [status,setStatus]=useState(true);
    let [draw,setDraw]=useState(false);

    var arr;
    var item=document.querySelectorAll('.item');
    const winner=document.querySelector('.winner');

    const indicesToCheck=[
        [0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]
    ]
    const handleClick = (index) => {
        if (marks[index] === '' && status) { // Only update if the cell is empty
            const newMarks = [...marks];
            newMarks[index] = turn ? 'X' : 'O';
            setMarks(newMarks);
            setTurn(!turn);
        }
    }
  

       useEffect(()=>{
        
        setTimeout(() => {
        
           for(let i=0;i<indicesToCheck.length;i++){
                 arr=indicesToCheck[i];
               if ( marks[arr[0]]==='X'&&marks[arr[1]]==='X'&&marks[arr[2]]==='X' || marks[arr[0]]==='O'&&marks[arr[1]]==='O'&&marks[arr[2]]==='O'){
                
                item[arr[0]].style.color=' #8cff32'
                item[arr[1]].style.color=' #8cff32'
                item[arr[2]].style.color=' #8cff32'
                winner.style.display='block';
                status=false;
                break;
               }
               
             }
             if(!status){
                setStatus(false);
             }
              if(!marks.includes('')){
                winner.style.display='block';
                setDraw(true);
             }
           
        }, 10);
       },[marks])

   
       
    return (
      <>
        <gameContext.Provider  value={{item,turn,status,draw,setMarks,setStatus,setTurn,setDraw}}>
        <div className='layoutContainer'>
        <Score />
       <div className="container">
            {marks.map((mark, index) => (
                <div 
                    key={index} 
                    className={`item item${index + 1}`} 
                    onClick={() => handleClick(index)}
                >
                    {mark}
                </div>
            ))}
        </div>
       <Restart/>
       </div>
        </gameContext.Provider>
      </>
    );
}

export default Grid;
