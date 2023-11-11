export const SPEED = 100;
export enum CellState {
    Die = 0,
    Alive = 1
}

export type CellType = {
  state: CellState;
  id: string;
  aliveNeighbor: number;
}

export const getEmptyCell = (id: string) => {
    return {
        state: CellState.Die,
        id: id,
        aliveNeighbor: 0
      }
}