import { CellState, CellType, SPEED } from "../utils/helpers";
import checkNeighbors from "./checkNeighbors";

/*
в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;

если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; 
в противном случае, если соседей меньше двух или больше трёх, 
клетка умирает («от одиночества» или «от перенаселённости»)*/

export default async function startGame(props: CellType[][]): Promise<any> {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const _table = checkNeighbors(props);
      _table.forEach((row) => {
        row.forEach((el) => {
          if (
            (el.state === CellState.Alive && (el.aliveNeighbor === 2 || el.aliveNeighbor === 3)) ||
            (el.state === CellState.Die && el.aliveNeighbor === 3)
          ){
            el.state = CellState.Alive;
          } else {
            el.state = CellState.Die
          };
        });
      });
      resolve([...props]);
    }, SPEED);
  });

  let result = await promise;
  return result;
}
