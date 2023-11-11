import { CellState, CellType } from "../utils/helpers";

export default function checkEmpty(table: CellType[][]): Boolean {
  return !table.find((row) => {
    return row.find(item=> item.state === CellState.Alive);
  });
}
