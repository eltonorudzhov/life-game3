import React, { useState } from "react";
import { CreateTabel } from "./createTable";

export const InputCount = () => {
  const [count, setCount] = useState("");
  //let ff: any =  new Array(props.count).fill(0)
  //     let gameFill: any;

  //   for (let j = 0; j < props.count; j++и) {
  //     gameFill += <tr id={`tr${j}`}> </tr>;
  //     for (let i = 0; i < props.count; i++) {
  //       gameFill += <td id={`td${i}`}> </td>;
  //     }

  return (
    <>
      <form>
        <label>
          Field size: 
          <input
            type="number"
            value={count}
            onChange={(value) => setCount(value.target.value)}
          />
        </label>
      </form>
      <CreateTabel count={count} />
    </>
  );
};
