import { useState } from 'react';

function Home() {
  // useState returns an array, the first thing being the value (taco; anytime we wanna update value we use setValue (taco, like setTaco)
  // useState is a hook. We need to pass it a default
  const [value, setValue] = useState(0);

  return (
    <>
      <h5>Who wants to Free PawPaw?</h5>
      <h2>{ value }</h2>
      {/* think of as asyncronous call like state promise ------------------> OLD WAY BELOW */}
      {/* <button type="button" onClick={() => setValue(value + 1)}>Free Him!</button>
      <button type="button" onClick={() => setValue(value - 1)}>Don&apos;t Free Him! I hate him!</button>
      <button type="button" onClick={() => setValue(0)}>Reset(I dont care)</button> */}
      {/* wait until value updates, then adds one when it does -------------------> BETTER WAY BELOW */}
      <button type="button" onClick={() => setValue((prevState) => prevState + 1)}>Free Him!</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Don&apos;t Free Him! I hate him!</button>
      <button type="button" onClick={() => setValue(0)}>Reset(I dont care)</button>
    </>
  );
}

export default Home;
