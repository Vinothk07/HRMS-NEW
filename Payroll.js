import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import jsPDF from 'jspdf';

const Payroll = ({ employees }) => {
  // Function to generate PDF for a given employee
  const generatePayslip = (employee) => {
    const doc = new jsPDF();

    // Title and Payslip Header
    doc.setFontSize(18);
    doc.text('Payslip', 20, 20);

    // Employee Details
    doc.setFontSize(14);
    doc.text(`Employee Name: ${employee.name}`, 20, 40);
    doc.text(`Designation: ${employee.designation}`, 20, 50);
    doc.text(`PAN Number: ${employee.panNumber}`, 20, 60);
    doc.text(`Phone Number: ${employee.phoneNumber}`, 20, 70);
    doc.text(`Date of Birth: ${employee.dob}`, 20, 80);

    // Salary Details
    doc.text(`Gross Income: ₹${employee.grossIncome}`, 20, 100);
    doc.text(`Net Salary: ₹${employee.netSalary}`, 20, 110);

    // Footer
    doc.text('Thank you for your contribution!', 20, 140);

    // Save the PDF with the employee's name
    doc.save(`Payslip_${employee.name}.pdf`);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Payroll
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Gross Income</TableCell>
              <TableCell>Net Salary</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.designation}</TableCell>
                <TableCell>₹{employee.grossIncome}</TableCell>
                <TableCell>₹{employee.netSalary}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => generatePayslip(employee)}
                  >
                    Download Payslip
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Payroll;
