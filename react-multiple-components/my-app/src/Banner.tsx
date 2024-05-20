type Props = {
  itemName: string;
};

export function Banner({ itemName }: Props) {
  return <h1>{itemName}</h1>;
}
