import React, { useState } from "react";
import { CreateTable } from "./createTable";

export const InputCount = () => {
  const [count, setCount] = useState("");

  return (
    <div>
      Field size: 
      <input
        type="number"
        value={count}
        onChange={(value) => setCount(value.target.value)}
      />
      <CreateTable size={+count > 40? 40 : +count} />
    </div>
  );
};
