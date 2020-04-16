interface IPoint {
  color: string;
  id: string;
  around: number;
}


export default function history(
  historyCollection: [{stepKey: string[]}],
  
  table: IPoint[][]
):  [{stepKey: string[]}]{
  let tmp: string[] = [];
  
let count = 0
  table.map((row) => {
    row.map((el) => {
      tmp.push(el.color);
    });
  });
  historyCollection.map((el)=>{
      for (let i=0; i<el.stepKey.length; i++)
          if (el.stepKey[i]!==tmp[i]){
                       count++
            return
          }
      })
  console.log(count)
  if (count===historyCollection.length)
  historyCollection.push({ stepKey: tmp });
  console.log(historyCollection)
  return historyCollection;
}
