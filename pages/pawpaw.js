import React from 'react';
import Loading from '../components/Loading';

export default function pawpaw() {
  // showing component Loading on DOM with JSX syntax; the <> </> is a FRAGMENT, like an empty DIV
  return (
    <>
      <Loading />
      <div>Hello, PawPaw</div>
      <div>
        <h3>Should we Free PawPaw from Jail?</h3>
        <button type="submit">Like this if You Want to Free PawPaw from Jail</button>
        <button type="submit">Like this if You Don&apos;t Want to Free PawPaw from Jail</button>
        <button type="submit">Like this to Reset</button>
      </div>
    </>
  );
  // return ( <--------------------- OLD WAY
  //   Loading()
  // );
}
