import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const WelcomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Free Shipping',
      description: 'Enjoy fast & free delivery on orders over $50',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: '24/7 Support',
      description: "We're here to help anytime, anywhere",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Secure Payment',
      description: 'All transactions are encrypted & safe',
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Easy Returns',
      description: 'Hassle-free 30-day return policy',
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Special Offers',
      description: 'Exclusive deals and discounts every week'
    },
    {
      icon: <StarIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Premium Quality',
      description: 'Only the best products for our customers'
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Best Price Guarantee',
      description: 'We match prices from authorized retailers'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: isDark
            ? 'linear-gradient(135deg, #0f0f0f 30%, #1a237e 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #e3f2fd 100%)',
          color: isDark ? '#fff' : '#0d0d0d',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 900,
              mb: 4,
              color: isDark ? '#ffffff' : '#0d0d0d',
              textShadow: isDark
                ? '0 0 20px #42a5f5, 0 0 40px #42a5f5'
                : '0 0 10px rgba(0,0,0,0.1)',
              transition: 'text-shadow 0.5s ease',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
            }}
          >
            Welcome to Aura Store
          </Typography>
          <Typography variant="h5" sx={{ mb: 5, fontWeight: 500 }}>
            Shop smart. Live better. Everything you need in one place.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/products')}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#d35400',
              }
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: isDark ? '#fff' : '#111',
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  backgroundColor: isDark ? '#1c1c1c' : '#ffffff',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDark ? 'grey.400' : 'text.secondary'}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomePage;
