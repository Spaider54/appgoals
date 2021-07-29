
import './Gols.css';

const Gols = ({ courseGols, onRemoveGoal }) => {
  const removeGoalHandler = (idOfGole) => {
    // send the id of item to remove it
    onRemoveGoal(idOfGole);
    console.log(idOfGole);
  };


  return (
    <div>
      <ul>
        {courseGols.length === 0 ?
          <p> No Goal Set Here , add One (*-*) </p> :
        courseGols.map((i) => {
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

export default Gols;