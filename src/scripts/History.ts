import { CellType } from "../utils/helpers";

export default function history(
  historyCollection: {stepKey: number[]}[],
  table: CellType[][]
):  {stepKey: number[]}[]{
  let tmp: number[] = [];
  let hasDifference = false;
  table.map((row) => {
      row.map((el) => {
        tmp.push(el.state);
      });
  });
  if (historyCollection.length){
    const lastCollection = historyCollection[historyCollection.length - 1];
    for (let i=0; i<lastCollection.stepKey.length; i++){
      if (lastCollection.stepKey[i] !== tmp[i]){
        hasDifference = true
        break;
      }
    }     
  } else {
    hasDifference = true;
  }
  if (hasDifference){
    historyCollection.push({ stepKey: tmp });
  }
  return historyCollection;
}
