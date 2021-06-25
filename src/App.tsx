import React, { useState } from "react";

export function App(): JSX.Element {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header>
        <h1>Adithya Mahesh Bariki</h1>
      </header>
      <main>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
      </main>
    </>
  );
}
