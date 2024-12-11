export interface Exercise {
  id: string;
  exerciseName: string;
  setsAmount: string;
  repetitionAmount: string;
}

export interface TableRowProps {
  exercises: Exercise[];
  onDeleteRow: (id: string) => void;
}
