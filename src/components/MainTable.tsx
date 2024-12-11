import { Exercise } from "./TableRow/interface";
import TableRow from "./TableRow/TableRow";

interface MainTableProps {
  exercises: Exercise[];
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const MainTable: React.FC<MainTableProps> = ({ exercises, setExercises }) => {
  const handleDeleteRow = (id: string) => {
    setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== id));
  };

  return (
    <table className="mainTable">
      <thead className="tableHeader">
        <tr>
          <th className="exerciseName">Exercise name:</th>
          <th className="set">Sets:</th>
          <th className="repetition">Repetitions:</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        <TableRow exercises={exercises} onDeleteRow={handleDeleteRow}></TableRow>
      </tbody>
    </table>
  );
};

export default MainTable;
