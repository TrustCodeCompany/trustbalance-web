interface HelloProps {
  name: string;
}

const Hello3: React.FC<HelloProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Hello3;
