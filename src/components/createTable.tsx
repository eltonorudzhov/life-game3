import React, { useState, useEffect } from "react";
import { ChaneState } from "./ChaneState";

interface IProps {
  count: string;
}

export const CreateTabel = (props: IProps) => {
  const [table, setTable] = useState<number[]>([]);
  useEffect(() => {
    setTable(new Array(+props.count).fill(0));
  }, [props.count]);
  //let ff: any =  new Array(props.count).fill(0)
  //     let gameFill: any;

  //   for (let j = 0; j < props.count; j++и) {
  //     gameFill += <tr id={`tr${j}`}> </tr>;
  //     for (let i = 0; i < props.count; i++) {
  //       gameFill += <td id={`td${i}`}> </td>;
  //     }

  console.log("f");

  return (
    <table>
      <tbody>
        {table.map((el: any, index: number) => {
          return (
            <tr id={`tr${index}`}>
              {table.map((el: any, index: number) => {
                return (
                  <td
                    className={"die"}
                    id={`td${index}`}
                    onClick={(event) =>
                      event.currentTarget.className == "die"
                        ? (event.currentTarget.className = "alive")
                        : (event.currentTarget.className = "die")
                    }
                  ></td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
