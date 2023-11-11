import { CellState, CellType } from "../utils/helpers";

export default function checkNeighbors(
  table: CellType[][]
): CellType[][] {
  let flag: number;
  for (let i = 0; i < table.length; i++){
    flag = 0;
    for (let j = 0; j < table.length; j++) {
      if (j > 0) {
        if (table[i][j - 1].state === CellState.Alive) flag += 1;
      }
      if (j < table[i].length - 1) {
        if (table[i][j + 1].state === CellState.Alive) flag += 1;
      }
      if (i > 0) {
        if (table[i - 1][j].state === CellState.Alive) flag += 1;
      }
      if (i < table.length - 1) {
        if (table[i + 1][j].state === CellState.Alive) flag += 1;
      }
      if (j > 0 && i > 0) {
        if (table[i - 1][j - 1].state === CellState.Alive) flag += 1;
      }
      if (j < table[i].length - 1 && i > 0) {
        if (table[i - 1][j + 1].state === CellState.Alive) flag += 1;
      }
      if (i < table.length - 1 && j > 0) {
        if (table[i + 1][j - 1].state === CellState.Alive) flag += 1;
      }
      if (i < table.length - 1 && j < table[i].length - 1) {
        if (table[i + 1][j + 1].state === CellState.Alive) flag += 1;
      }
      table[i][j].aliveNeighbor = flag
    }
  }
    return table
}
