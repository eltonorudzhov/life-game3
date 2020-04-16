import React, { useState, useEffect } from "react";
import startGame from '../scripts/StartGame'
import checkAround from '../scripts/CheckAround'

interface IProps {
  count: string;
}

interface IPoint {
  color: string;
  id: string;
  around: number;
}

export const CreateTabel = (props: IProps, arr?: IPoint[][]) => {
  const [table, setTable] = useState<IPoint[][]>([[]]);
  
  useEffect(() => {
    const newTable = []
    for (let i=0; i<+props.count; i++){
      const rowTable = []
      for (let j=0; j<+props.count; j++){
        const a = {
          color: 'die',
          id: `td${i}${j}`,
          around: 0
        }
        rowTable.push(a)
      }
        newTable.push( rowTable )
    }
    setTable(newTable);
  }, [props.count]);

 // useEffect(()=>)

  return (
    <>
    <button onClick={async ()=>
    
     setTable(await startGame(table)) 
    }>Ok</button>
      <table >
        <tbody >
          {table.map((row: any, indexTr: number) => {
            return (
              <tr id={`tr${indexTr}`} >
                {row.map((el: IPoint, index: number) => {
                      
                  return (
                    <td
                      key={el.id}
                      className={el.color}
                      id={el.id}
                      onClick={
                        (event) => {
                          console.log(el)
                          el.color =  el.color === 'alive' ? 'die' : 'alive'
                          setTable(table.map((el)=>[...el]))
                        }   
                      }
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
