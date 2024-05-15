type Props = {
  count: number;
};

export function ClickCount({ count }: Props) {
  return <p>Click Count: {count}</p>;
}
