import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counterTitle }) => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <>
      <h5>{ counterTitle }</h5>
      <h2>{ value }</h2>
      {/* think of as asyncronous call like state promise ------------------> OLD WAY BELOW */}
      {/* <button type="button" onClick={() => setValue(value + 1)}>Free Him!</button>
      <button type="button" onClick={() => setValue(value - 1)}>Don&apos;t Free Him! I hate him!</button>
      <button type="button" onClick={() => setValue(0)}>Reset(I dont care)</button> */}
      {/* wait until value updates, then adds one when it does -------------------> BETTER WAY BELOW */}
      <button type="button" onClick={handleClick}>Free Him!</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Don&apos;t Free Him! I hate him!</button>
      <button type="button" onClick={() => setValue(0)}>Reset(I dont care)</button>
    </>
  );
};

Counter.propTypes = {
  counterTitle: PropTypes.string,
};

Counter.defaultProps = {
  counterTitle: 'PawPaw!',
};

export default Counter;
