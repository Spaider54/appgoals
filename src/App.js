import "./App.css";

import React, { useState } from 'react';

// ***** Import Component  ********

import Head from "./Component/Head/Head";
import Footer from "./Component/Footer/Footer";
import Goals from "./Component/Goals/Goals";
import NewGoals from "./Component/Goals/NewGoals";


// ** Import Other Ressource  */

function App() {


  const [courseGoals, setCourseGoals] = useState([
    {
      id: 'g1',
      title: "Understande JSX",
    },
    {
      id:'g2',
      title: "Understande Components Functional & Class",
    },
    {
      id: 'g3',
      title: "Understande props & state & cond rendering",
    },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };
  const afterRemoveHandler = (id) => {
    setCourseGoals(courseGoals.filter((i) => i.id !== id));
  }

  return (
    <div className="App">
      <Head/>
      <h2>Goals of My Course</h2>
      <NewGoals onAddGoal={addNewGoalHandler} />
      <Goals courseGoals={courseGoals} onRemoveGoal={afterRemoveHandler} />
      <Footer />
    </div>
  );
}

export default App;
