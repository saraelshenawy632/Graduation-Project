import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Profile
        </Typography>
        <ProfileForm />
      </Box>
    </Container>
  );
};

export default ProfilePage;