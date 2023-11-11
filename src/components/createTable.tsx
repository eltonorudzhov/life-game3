import React, { useState, useEffect } from "react";
import startGame from "../scripts/StartGame";
import checkEmpty from "../scripts/CheckEmpty";
import history from "../scripts/History";
import { CellState, CellType, getEmptyCell } from "../utils/helpers";

interface IProps {
  size: number;
}
let historyCollection: { stepKey: number[] }[] = [];

export const CreateTable = (props: IProps) => {
  const [table, setTable] = useState<CellType[][]>([[]]);
  const [able, setAble] = useState(false);
  
  useEffect(() => {
      const newTable = Array.from({ length: props.size }).map((row, rowIndex) => { 
      const _newRow = Array.from({ length: props.size });
      return _newRow.map((cell, cellIndex)=> getEmptyCell(`td${rowIndex}${cellIndex}`))
    })
   
    setTable(newTable);
  }, [props.size]);


  const handleClick = async () => {
    let count = 0;
    while (checkEmpty(table) && count === historyCollection.length) {
      setTable(await startGame(table));
      historyCollection = history(historyCollection, table);
      count++;
    } 
    setAble(false);
    historyCollection = [];
    console.log("Конец игры");
  };
  const clean = () => { 
    setTable(table.map((row) => row.map(cell=> {
      cell.state = CellState.Die
      return cell
    })))
  }
  return (
    <>
      <button
        disabled={able}
        onClick={async () => {
          setAble(true);
          handleClick();
        }}
      >
        Ok
      </button>
      <button
        disabled={able}
        onClick={ () => {
          setAble(false);
          clean();
        }}
      >
        Clean
      </button>
      <table>
        <tbody>
          {table.map((row: any, indexTr: number) => {
            return (
              <tr key={`tr${indexTr}`} id={`tr${indexTr}`}>
                {row.map((el: CellType, index: number) => {
                  return (
                    <td
                      key={el.id}
                      className={`color_${el.state}`}
                      id={el.id}
                      onClick={(event) => {
                        if (!able) {
                          el.state = +!el.state;
                          setTable(table.map((el) => [...el]));
                        }
                      }}
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
