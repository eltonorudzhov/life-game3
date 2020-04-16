import React, { useState, useEffect } from "react";
import startGame from "../scripts/StartGame";
import checkEmpty from "../scripts/CheckEmpty";
import history from "../scripts/History";

interface IProps {
  count: string;
}

interface IPoint {
  color: string;
  id: string;
  around: number;
}

export const CreateTabel = (props: IProps) => {
  const [table, setTable] = useState<IPoint[][]>([[]]);
  useEffect(() => {
    const newTable = [];
    for (let i = 0; i < +props.count; i++) {
      const rowTable = [];
      for (let j = 0; j < +props.count; j++) {
        const a = {
          color: "die",
          id: `td${i}${j}`,
          around: 0,
        };
        rowTable.push(a);
      }
      newTable.push(rowTable);
    }
    setTable(newTable);
  }, [props.count]); // useEffect(()=>)
  let size: number
  const handleClick = async () => {
    let historyCollection: [{stepKey: string[]}] = [{ stepKey: ["",""] }];
    historyCollection = history(historyCollection, table);
    size = 1
    historyCollection.shift();
    while (checkEmpty(table) && (size===historyCollection.length)) {
      setTable(await startGame(table));
      historyCollection = history(historyCollection, table);
      size++
    }
    console.log("Конец игры")
  };

  return (
    <>
      <button
        onClick={async () => {
          handleClick();
        }}
      >
        Ok
      </button>
      <table>
        <tbody>
          {table.map((row: any, indexTr: number) => {
            return (
              <tr id={`tr${indexTr}`}>
                {row.map((el: IPoint, index: number) => {
                  return (
                    <td
                      key={el.id}
                      className={el.color}
                      id={el.id}
                      onClick={(event) => {
                        console.log(el);
                        el.color = el.color === "alive" ? "die" : "alive";
                        setTable(table.map((el) => [...el]));
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
