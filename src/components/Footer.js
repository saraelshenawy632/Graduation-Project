import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2, // Reduced padding
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}> {/* Reduced spacing */}
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted source for quality products.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Facebook
            </Link>
            <Link href="#" color="inherit">
              Twitter
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
