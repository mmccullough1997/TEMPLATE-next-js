import { useState, useEffect } from 'react';
import counterData from '../api/counterData';
import Counter from '../components/Counter';

function Home() {
  const [data, setData] = useState([]);
  // const [value, setValue] = useState(0);
  // useState returns an array, the first thing being the value (taco; anytime we wanna update value we use setValue (taco, like setTaco)
  // useState is a hook. We need to pass it a default

  useEffect(() => {
    counterData().then(setData);
  }, []);

  return (
    <>
      {data.map(({ title, id }) => (
        <Counter counterTitle={title} key={id} />
      ))};
    </>
  );
}

export default Home;
