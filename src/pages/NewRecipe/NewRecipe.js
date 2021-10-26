import { useState } from "react";

const NewRecipe = () => {
  const [counter, setCounter] = useState(0);
  
  const decrementhandler = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const incrementhandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1 className='title'>New Recipe</h1>
      <button onClick={decrementhandler}>-</button>
      <span>{counter}</span>
      <button onClick={incrementhandler}>+</button>
    </div>
  );
};

export default NewRecipe;
