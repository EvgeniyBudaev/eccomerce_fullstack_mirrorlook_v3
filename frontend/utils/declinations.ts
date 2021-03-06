const tovar: string[] = ["товар", "товара", "товаров"];
export const reviewDeclinations: string[] = ["отзыв", "отзыва", "отзывов"];
export const commentDeclinations: string[] = [
  "комментарий",
  "комментария",
  "комментариев",
];

export const getDeclination = (
  number: number,
  txt = tovar,
  cases = [2, 0, 1, 1, 1, 2]
): string =>
  txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
