import { TableRowProps } from "./interface";

const TableRow: React.FC<TableRowProps> = ({ exercises, onDeleteRow }) => {
  if (!exercises || exercises.length === 0) {
    return (
      <>
        <tr className="exerciseRow">
          <td className="exerciseData">No exercises available.</td>
        </tr>
      </>
    );
  }

  return (
    <>
      {exercises.map((exercise) => (
        <tr className="exerciseRow" key={exercise.id}>
          <td className="exerciseData">{exercise.exerciseName}</td>
          <td className="exerciseData">{exercise.setsAmount}</td>
          <td className="exerciseData">{exercise.repetitionAmount}</td>
          <td>
            <button className="deleteRowButton" onClick={() => onDeleteRow(exercise.id)}>
              Delete row
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
