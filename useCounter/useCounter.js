import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  return {
    counter,
    setCounter,
    increment: (value = 1) => setCounter(counter + value),
    decrement: (value = 1) => counter > 1 && setCounter(counter - value),
    reset: () => setCounter(initialValue),
  };
};
