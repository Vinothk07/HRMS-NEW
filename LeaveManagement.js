import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const LeaveManagement = ({ leaves, approveLeave, rejectLeave }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Leave Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Employee</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.id}</TableCell>
                <TableCell>{leave.employee}</TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell>{leave.status}</TableCell>
                <TableCell>
                  {leave.status === 'Pending' && (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '10px' }}
                        onClick={() => approveLeave(leave.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => rejectLeave(leave.id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaveManagement;
