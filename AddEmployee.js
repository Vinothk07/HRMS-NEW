import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grossIncome, setGrossIncome] = useState('');
  const [netSalary, setNetSalary] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dateOfJoining, setDateOfJoining] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating new employee object with additional fields
    const newEmployee = {
      id: Math.floor(Math.random() * 1000), // Generate random ID
      name,
      designation,
      panNumber,
      dob,
      phoneNumber,
      grossIncome: parseFloat(grossIncome),
      netSalary: parseFloat(netSalary),
      photo: photo ? URL.createObjectURL(photo) : null, // Create a URL for the photo
      dateOfJoining
    };

    addEmployee(newEmployee); // Adding new employee
    setName('');
    setDesignation('');
    setPanNumber('');
    setDob('');
    setPhoneNumber('');
    setGrossIncome('');
    setNetSalary('');
    setPhoto(null);
    setDateOfJoining('');
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Add New Employee
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Designation"
          variant="outlined"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="PAN Number"
          variant="outlined"
          value={panNumber}
          onChange={(e) => setPanNumber(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          type="tel"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Gross Income"
          type="number"
          variant="outlined"
          value={grossIncome}
          onChange={(e) => setGrossIncome(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Net Salary"
          type="number"
          variant="outlined"
          value={netSalary}
          onChange={(e) => setNetSalary(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Date of Joining"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={dateOfJoining}
          onChange={(e) => setDateOfJoining(e.target.value)}
          required
        />
        <Button
          fullWidth
          variant="contained"
          component="label"
          style={{ marginTop: '20px' }}
        >
          Upload Photo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          fullWidth
        >
          Add Employee
        </Button>
      </Box>
    </Paper>
  );
};

export default AddEmployee;
