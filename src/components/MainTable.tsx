import TableRow from "./TableRow/TableRow";
import { v4 as uuid4 } from "uuid";

const exercises = [
  { exerciseName: "Biceps", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Chest", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Back", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
];

const MainTable: React.FC = () => {
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
        <TableRow exercises={exercises}></TableRow>
      </tbody>
    </table>
  );
};

export default MainTable;
