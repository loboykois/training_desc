import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique ids

const Desc: React.FC = () => {
  // Define sets and repetitions as string | number
  const [data, setData] = useState([{ id: uuidv4(), exercise: "", sets: "", repetitions: "", saved: false }]);

  const handleAddRow = () => {
    setData([...data, { id: uuidv4(), exercise: "", sets: "", repetitions: "", saved: false }]);
  };

  const handleDeleteRow = (id: string) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleSaveRow = (id: string) => {
    setData((prevData) => {
      const updatedData = prevData.map((row) => (row.id === id ? { ...row, saved: true } : row));
      return updatedData; // No new row added after save
    });
  };

  const handleEditRow = (id: string) => {
    setData(
      data.map(
        (row) => (row.id === id ? { ...row, saved: false } : row) // Mark the row as editable
      )
    );
  };

  const handleChange = (id: string, field: string, value: string | number) => {
    setData(data.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  return (
    <div>
      <h2>Training Description</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Repetitions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.exercise}
                  onChange={(e) => handleChange(row.id, "exercise", e.target.value)}
                  disabled={row.saved} // Disable input if saved
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.sets}
                  onChange={(e) => handleChange(row.id, "sets", e.target.value)}
                  disabled={row.saved} // Disable input if saved
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.repetitions}
                  onChange={(e) => handleChange(row.id, "repetitions", e.target.value)}
                  disabled={row.saved} // Disable input if saved
                />
              </td>
              <td>
                {row.saved ? (
                  <>
                    <button onClick={() => handleEditRow(row.id)}>Edit</button>
                    <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
                  </>
                ) : (
                  <button onClick={() => handleSaveRow(row.id)}>Save</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Desc;
