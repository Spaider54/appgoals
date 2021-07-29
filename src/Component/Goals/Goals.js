
import './Goals.css';

const Goals = ({ courseGoals, onRemoveGoal }) => {
  const removeGoalHandler = (idOfGoale) => {
    // send the id of item to remove it
    onRemoveGoal(idOfGoale);
    console.log(idOfGoale);
  };


  return (
    <div>
      <ul>
        {courseGoals.length === 0 ?
          <p> No Goal Set Here , add One (*-*) </p> :
        courseGoals.map((i) => {
          return (
            <li key={i.id}>
              <div>
                <p>{i.title}</p>
                <button
                  className="Supprimer"
                  onClick={() => removeGoalHandler(i.id)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Goals;