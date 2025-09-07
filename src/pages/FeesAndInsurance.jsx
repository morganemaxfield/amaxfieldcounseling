import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Alert, 
  Card, 
  CardContent, 
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';

function InsuranceAndFees() {
  const theme = useTheme();
  
  // Insurance types list
  const insuranceTypes = [
    'Premera Blue Cross',
    'LifeWise',
    'Cigna and Evernorth',
    'First Choice Health | FCH',
    'Optum',
    'UnitedHealthcare UHC | UBH',
    'Regence Blue Shield', 
  ];

  // Payment methods
  const paymentMethods = [
    'Cash',
    'Check',
    'Credit/Debit Cards',
    'HSA/FSA Cards',
    'Electronic Bank Transfer'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.light,
          color: 'white',
          py: 6,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Fees & Insurance
          </Typography>
          <Typography variant="h5">
            Transparent pricing and comprehensive insurance coverage
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Left Column - Insurance Information */}
          <Grid item xs={12} md={8}>
            {/* Accepted Insurance Section */}
            <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, mb: 4 }}>
              <Typography variant="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountBalanceIcon color="primary" />
                Accepted Insurance Plans
              </Typography>
              <Typography variant="body1" paragraph>
                We are in-network with several major insurance providers to make therapy accessible and affordable for our clients.
              </Typography>
              
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {insuranceTypes.map((insurance, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card elevation={1} sx={{ height: '100%' }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircleIcon color="success" />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {insurance}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              <Alert 
                severity="info" 
                icon={<InfoIcon />}
                sx={{ mt: 4 }}
              >
                <Typography variant="body1">
                  <strong>Don't see your insurance listed?</strong> We can assist with claims for out-of-network insurance reimbursement.
                </Typography>
              </Alert>
            </Paper>
          </Grid>
          
          {/* Right Column - Quick Actions & Additional Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              
              {/* Schedule Appointment Card */}
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                  Ready to Schedule?
                </Typography>
                <Typography variant="body1" paragraph>
                  Book your appointment or free consultation today.
                </Typography>
                <Button 
                  component={Link} 
                  to="/appointment" 
                  variant="contained" 
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  Schedule Appointment
                </Button>
                <Button 
                  component={Link} 
                  to="https://amaleamaxfield.clientsecure.me/sign-in" 
                  variant="outlined" 
                  size="large"
                  fullWidth
                  sx={{
                    borderColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'rgba(0, 0, 0, 0.6)',
                    '&:hover': {
                      borderColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'rgba(0, 0, 0, 0.8)',
                    },
                  }}
                >
                  Client Portal
                </Button>
              </Paper>
              
              {/* Insurance Verification Card */}
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                  Insurance Verification
                </Typography>
                <Typography variant="body1" paragraph>
                  Please check with your insurance to confirm coverage.
                </Typography>
              </Paper>
              
              {/* Sliding Scale Card */}
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                  Financial Assistance
                </Typography>
                <Typography variant="body1" paragraph>
                  Limited sliding scale spots available for those with financial hardship.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Please discuss financial concerns during your consultation. We believe everyone deserves access to mental health care.
                </Typography>
              </Paper>
              
            </Box>
          </Grid>
        </Grid>

        {/* Fee Structure and Payment Information Side by Side - Full Width */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                <Typography variant="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCardIcon color="primary" />
                    Fee Structure
                </Typography>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Card elevation={2} sx={{ height: '100%', border: `2px solid ${theme.palette.primary.main}` }}>
                        <CardContent sx={{ textAlign: 'center', p: 4 }}>
                        <Typography variant="h4" color="primary" gutterBottom>
                            Individual Therapy
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                            $125
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            per 50-minute session
                        </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    
                    
                    <Grid item xs={12}>
                    <Card elevation={1} sx={{ bgcolor: 'background.default' }}>
                        <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Initial Consultation
                        </Typography>
                        <Typography variant="body1">
                            Free 20 minute phone or in-person consultation to discuss your needs and determine if we are a good fit.
                        </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{pb: 8}}>
                {/* Payment Information Section */}
                <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                <Typography variant="h2" gutterBottom>
                    Payment Information
                </Typography>
                
                <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
                    Accepted Payment Methods
                </Typography>
                <List sx={{ pb: 10}}>
                    {paymentMethods.map((method, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                        <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={method} />
                    </ListItem>
                    ))}
                </List>
                </Paper>
            </Grid>
        </Grid>
      </Container>
      
      {/* Cancellation Policy Section */}
      <Box sx={{ bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
            <Typography variant="h2" gutterBottom align="center">
              Cancellation Policy
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>24-Hour Notice Required:</strong> Please provide at least 24 hours notice for any cancellations or rescheduling requests.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Late Cancellations & No-Shows:</strong> Appointments cancelled with less than 24 hours notice or missed appointments will be charged the full session fee, as these cannot be billed to insurance.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Emergency Situations:</strong> We understand that emergencies happen. Please contact us as soon as possible, and we will work with you on a case-by-case basis.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default InsuranceAndFees;