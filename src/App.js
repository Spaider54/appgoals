import "./App.css";

import React, { useState } from 'react';

// ***** Import Component  ********

import Head from "./Component/Head/Head";
import Footer from "./Component/Footer/Footer";
import Gols from "./Component/Gols/Gols";
import NewGols from "./Component/Gols/NewGols";


// ** Import Other Ressource  */

function App() {


  const [courseGols, setCourseGols] = useState([
    {
      id: "g1",
      title: "Understande JSX In ReactJS",
    },
    {
      id: "g2",
      title: "Understande Syling In ReactJS",
    },
    {
      id: "g3",
      title: "Understande How to Connact React to NodeJS",
    },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGols(prevCourseGols => prevCourseGols.concat(newGoal));
  };
  const afterRemoveHandler = (id) => {
    setCourseGols(courseGols.filter((i) => i.id !== id));
  }

  return (
    <div className="App">
      <Head/>
      <h2>Gols of My Course MERN Stack</h2>
      <NewGols onAddGoal={addNewGoalHandler} />
      <Gols courseGols={courseGols} onRemoveGoal={afterRemoveHandler} />
      <Footer />
    </div>
  );
}

export default App;
