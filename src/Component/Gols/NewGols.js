import React, { useState } from 'react';

import './NewGols.css';

const NewGols = ({ onAddGoal }) => {
  
  const [entredText, setEntredText] = useState('');
  const addGoalHandlder = (event) => {
    event.preventDefault();
    if (entredText === '') {
      alert("My Brother ,The Goal is Empty !!\n\n\tEnter a Correct Goal");
    } else {
      const newGoalIt = {
        id: Math.random().toString(),
        title: entredText,
      };
      onAddGoal(newGoalIt);
    }
      setEntredText('');

    };
  const textChangeHandler = event => {
    setEntredText(event.target.value);
  };



  return (
    <form className="new-goal" onSubmit={addGoalHandlder}>
      <input type="text" value={entredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGols;