// LoginPage.jsx
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Static admin credentials check
        if (username === 'admin' && password === 'admin123') {
            onLogin(true); // Notify parent component of successful login
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Paper style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <Typography variant="h5" gutterBottom>
                Admin Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                    fullWidth
                >
                    Login
                </Button>
            </Box>
        </Paper>
    );
};

export default LoginPage;
