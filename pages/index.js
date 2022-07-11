import Counter from '../components/Counter';

function Home() {
  // useState returns an array, the first thing being the value (taco; anytime we wanna update value we use setValue (taco, like setTaco)
  // useState is a hook. We need to pass it a default

  return (
    <>
      <Counter counterTitle="Counter 1" />
      <Counter counterTitle="Counter 2" />
      <Counter />
    </>
  );
}

export default Home;
