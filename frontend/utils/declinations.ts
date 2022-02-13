const tovar: string[] = ["товар", "товара", "товаров"];

export const getDeclination = (
  number: number,
  txt = tovar,
  cases = [2, 0, 1, 1, 1, 2]
) =>
  txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
