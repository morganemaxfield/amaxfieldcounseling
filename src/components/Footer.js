import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoticeOfPrivacyPractices from '../assets/NoticeOfPrivacyPractices.pdf'; 


function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.dark', 
        color: 'white',
        pt: 6,
        pb: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
              Amalea's Counseling
            </Typography>
            <Link 
                component={RouterLink} 
                to="https://maps.app.goo.gl/JUqLMQhshtH3WKpy5" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="body1">426 North Meridian</Typography>
              </Box>
              <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>Puyallup, WA 98371</Typography>
              </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Link 
                component={RouterLink} 
                to="tel:2532005193" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                (253) 200-5193
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Link 
                component={RouterLink} 
                to="mailto:amalea@amaxfieldcounseling.com" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                amalea@amaxfieldcounseling.com
              </Link>
            </Box>
          </Grid>
          
          {/* Office Hours */}
          <Grid item xs={12} md={4}>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink} 
                to="/" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                About
              </Link>
              <Link 
                component={RouterLink} 
                to="/specialties" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Specialties
              </Link>
              <Link 
                component={RouterLink} 
                to="/feesAndInsurance" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Fees and Insurance
              </Link>
              <Link 
                component={RouterLink} 
                to="/appointment" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: theme.palette.secondary.light,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Schedule Appointment
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <Grid container spacing={6}>
            <Grid item md={9}>
                <Typography 
                variant="body2" 
                align="left" 
                sx={{ 
                    opacity: 0.8,
                    fontSize: '0.875rem'
                }}
                >
                &copy; {year} Amalea Maxfield Counseling Services. All rights reserved.
                </Typography>
            </Grid>
            <Grid item md={3}>
                <Link 
                    href={NoticeOfPrivacyPractices} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'secondary.main',
                        '&:hover': {
                        textDecoration: 'underline'
                        }
                    }}
                >
                    <Typography variant="body2" align="right" sx={{ 
                    opacity: 0.8,
                    fontSize: '0.875rem'
                }}>
                    View Notice Of Privacy Practices(PDF)
                    </Typography>
                </Link>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;