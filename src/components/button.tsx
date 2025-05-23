interface ButtonProps {
  name: string;
}

function Button(props: ButtonProps) {
  const { name } = props;

  return <button>{name}</button>;
}

export { Button };
