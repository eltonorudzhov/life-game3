interface IPoint {
  color: string;
  id: string;
  around: number;
}

export default function checkEmpty(table: IPoint[][]): Boolean {
  let flg = 0;
  table.map((row) => {
    row.map((el) => {
      if (el.color === "alive") {
        flg = 1;
        return true;
      }
    });
  });
  if (flg) return true;
  else return false;
}
