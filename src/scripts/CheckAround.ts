interface IPoint {
  color: string;
  id: string;
  around: number;
}

export default function checkAround(
  table: IPoint[][]
): IPoint[][] {
  let flag: number;
  flag=0
  for (let i = 0; i < table.length; i++)
    for (let j = 0; j < table.length; j++) {
      if (j > 0) {
        if (table[i][j - 1].color === "alive") flag += 1;
      }
      if (j < table[i].length - 1) {
        if (table[i][j + 1].color === "alive") flag += 1;
      }
      if (i > 0) {
        if (table[i - 1][j].color === "alive") flag += 1;
      }
      if (i < table.length - 1) {
        if (table[i + 1][j].color === "alive") flag += 1;
      }
      if (j > 0 && i > 0) {
        if (table[i - 1][j - 1].color === "alive") flag += 1;
      }
      if (j < table[i].length - 1 && i > 0) {
        if (table[i - 1][j + 1].color === "alive") flag += 1;
      }
      if (i < table.length - 1 && j > 0) {
        if (table[i + 1][j - 1].color === "alive") flag += 1;
      }
      if (i < table.length - 1 && j < table[i].length - 1) {
        if (table[i + 1][j + 1].color === "alive") flag += 1;
      }
      table[i][j].around=flag
      flag=0
    }
    return table
}
