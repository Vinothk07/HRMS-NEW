import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import LeaveManagement from './components/LeaveManagement';
import Payroll from './components/Payroll';
import Performance from './components/Performance';

import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';

function App() {
  const [currentPage, setCurrentPage] = useState('employee');

  // Shared state for employees and leaves
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', designation: 'Software Engineer', panNumber: 'ABC12345', phoneNumber: '1234567890', grossIncome: 50000, netSalary: 45000 },
    { id: 2, name: 'Jane Smith', designation: 'Project Manager', panNumber: 'DEF67890', phoneNumber: '0987654321', grossIncome: 60000, netSalary: 55000 },
  ]);

  const [leaves, setLeaves] = useState([
    { id: 1, employee: 'John Doe', type: 'Sick Leave', status: 'Pending' },
    { id: 2, employee: 'Jane Smith', type: 'Vacation Leave', status: 'Pending' },
  ]);

  // Function to add a new employee
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  // Function to add a leave request
  const addLeaveRequest = (newLeaveRequest) => {
    setLeaves([...leaves, newLeaveRequest]);
  };

  // Function to approve a leave request
  const approveLeave = (id) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status: 'Approved' } : leave
    );
    setLeaves(updatedLeaves);
  };

  // Function to reject a leave request
  const rejectLeave = (id) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status: 'Rejected' } : leave
    );
    setLeaves(updatedLeaves);
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'employee':
        return <EmployeeList employees={employees} addLeaveRequest={addLeaveRequest} />;
      case 'addEmployee':
        return <AddEmployee addEmployee={addEmployee} />;
      case 'leave':
        return <LeaveManagement leaves={leaves} approveLeave={approveLeave} rejectLeave={rejectLeave} />;
      case 'payroll':
        return <Payroll employees={employees} />;
      case 'performance':
        return <Performance employees={employees} />;
      default:
        return <EmployeeList employees={employees} addLeaveRequest={addLeaveRequest} />;
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            HRMS System
          </Typography>
          <Button color="inherit" onClick={() => setCurrentPage('employee')}>
            Employee List
          </Button>
          <Button color="inherit" onClick={() => setCurrentPage('addEmployee')}>
            Add Employee
          </Button>
          <Button color="inherit" onClick={() => setCurrentPage('leave')}>
            Leave Management
          </Button>
          <Button color="inherit" onClick={() => setCurrentPage('payroll')}>
            Payroll
          </Button>
          <Button color="inherit" onClick={() => setCurrentPage('performance')}>
            Performance
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>{renderPage()}</Container>
    </div>
  );
}

export default App;
