## Componente

- Atributos:

```tsx
function Button(props: { name: string }) {
  const { name } = props;

  return <button>{name}</button>;
}

interface ButtonProps {
  name: string;
}

function Button2(props: ButtonProps) {
  const { name } = props;

  return <button>{name}</button>;
}
```

- Utilização:

```tsx
...
function Home() {
  return <>
    <main>
    <h1>Home</h1>
    <Button name="Clique aqui"/>
    </main>
  </>
}
```
