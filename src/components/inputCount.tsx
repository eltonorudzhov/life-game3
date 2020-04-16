import React, { useState } from "react";
import { CreateTabel } from "./createTable";

export const InputCount = () => {
  const [count, setCount] = useState("");

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
