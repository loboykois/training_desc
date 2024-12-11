import React, { useState } from "react";
import MainTable from ".//components/MainTable";
import { Exercise } from "./components/TableRow/interface";
import { v4 as uuid4 } from "uuid";

const initialExercises: Exercise[] = [
  { exerciseName: "Biceps", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Chest", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Back", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Legs", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "Triceps", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
  { exerciseName: "ABS", setsAmount: "4", repetitionAmount: "12", id: uuid4() },
];

const App: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);

  return (
    <>
      <MainTable exercises={exercises} setExercises={setExercises} />
    </>
  );
};

export default App;
