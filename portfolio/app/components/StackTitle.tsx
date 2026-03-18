interface ITitle {
  title: string;
}

export default function StackTitle({ title }: ITitle) {
  return (
    <h2>{title}</h2>
  );
}