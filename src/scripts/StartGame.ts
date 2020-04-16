import checkAround from "./CheckAround";
interface IPoint {
  color: string;
  id: string;
  around: number;
}
/*
в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;

если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; 
в противном случае, если соседей меньше двух или больше трёх, 
клетка умирает («от одиночества» или «от перенаселённости»)*/

export default async function startGame(props: IPoint[][]): Promise<any> {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      props = checkAround(props);
      console.log(props);
      props.map((row) => {
        row.map((el) => {
          if (
            (el.color === "alive" && (el.around === 2 || el.around === 3)) ||
            (el.color === "die" && el.around === 3)
          )
            el.color = "alive";
          else el.color = "die";
        });
      });
      resolve([...props]);
    }, 1000);
  });

  let result = await promise;
  return result;
}
