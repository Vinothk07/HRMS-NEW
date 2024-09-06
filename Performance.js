import React, { useState } from 'react';

const Performance = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', rating: 4 },
  ]);

  return (
    <div>
      <h2>Performance Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Performance;
