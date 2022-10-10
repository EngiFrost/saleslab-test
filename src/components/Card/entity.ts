export type TCard = {
  title: string;
  amount: number;
  money?: number;
  img: string;
  color: keyof typeof Colors;
};

export enum Colors {
  'purple' = '#C37ADD',
  'green' = '#7AD744',
  'red' = '#F85C5C',
  'blue' = '#68C4FF',
}
