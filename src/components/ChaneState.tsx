import React from "react";

interface IProps {
  element: any;
}

export const ChaneState = (props: IProps) => {
  
  console.log("DDD")
  return (
    <>
    
       <td className={`${+props.element.className*(-1)}`} id={props.element.id}></td>
    </>
  );
};