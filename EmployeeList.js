import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';

const EmployeeList = ({ employees, addLeaveRequest }) => {
    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [leaveType, setLeaveType] = useState('');

    // Open dialog to request leave
    const handleOpen = (employee) => {
        setSelectedEmployee(employee);
        setOpen(true);
    };

    // Close dialog
    const handleClose = () => {
        setOpen(false);
        setSelectedEmployee(null);
        setLeaveType('');
    };

    // Submit leave request
    const handleSubmitLeaveRequest = () => {
        if (selectedEmployee && leaveType) {
            const leaveRequest = {
                id: Math.floor(Math.random() * 1000), // Generate a random ID for the leave request
                employee: selectedEmployee.name,
                type: leaveType,
                status: 'Pending',
            };
            addLeaveRequest(leaveRequest); // Add leave request to the system
            handleClose();
        }
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Employee List
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Photo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>PAN Number</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Gross Income</TableCell>
                            <TableCell>Net Salary</TableCell>
                            <TableCell>Leave Request</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>
                                    {employee.photo ? (
                                        <img
                                            src={employee.photo}
                                            alt={employee.name}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        'No Photo'
                                    )}
                                </TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.designation}</TableCell>
                                <TableCell>{employee.panNumber}</TableCell>
                                <TableCell>{employee.phoneNumber}</TableCell>
                                <TableCell>₹{employee.grossIncome}</TableCell>
                                <TableCell>₹{employee.netSalary}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleOpen(employee)}>
                                        Request Leave
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Leave Request Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Request Leave for {selectedEmployee?.name}</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Leave Type"
                        variant="outlined"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitLeaveRequest} color="primary">
                        Submit Request
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EmployeeList;
