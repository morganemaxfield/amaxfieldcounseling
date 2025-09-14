import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import emailjs from 'emailjs-com';

import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  Button, 
  MenuItem, 
  Paper, 
  Alert, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Card, 
  CardContent, 
  Divider,
  useTheme
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningIcon from '@mui/icons-material/Warning';

function Appointment() {
  const theme = useTheme();
  
  // Insurance types list - modify this array to add/remove insurance options
  const insuranceTypes = [
    'Premera Blue Cross',
    'LifeWise',
    'Cigna and Evernorth',
    'First Choice Health | FCH',
    'Optum',
    'UnitedHealthcare UHC | UBH',
    'Regence Blue Shield', 
  ];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    appointmentType: '',
    message: '',
    insuranceType: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8dx2147', 'template_qwt8ztq', formRef.current, 'DCatDl8abKo_GzpFa')
      .then((result) => {
        console.log('Success!', result.text);
      }, (error) => {
        console.log('Failed:', error.text);
      });
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      appointmentType: '',
      message: '',
      insuranceType: '',
    });
    setSubmitted(false);
  };
  
  // Generate available dates (next 14 days)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    
    return dates;
  };
  
  const availableDates = generateAvailableDates();
  
  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];
  
  // Steps for the "What to Expect" section
  const steps = [
    {
      label: 'Submit Your Request',
      description: 'Fill out the form with your contact information and preferred appointment time.',
    },
    {
      label: 'Confirmation',
      description: 'We\'ll contact you within 24 hours to confirm your appointment or suggest alternative times.',
    },
    {
      label: 'Initial Session',
      description: 'Your first appointment will be an opportunity to discuss your needs and establish goals for therapy.',
    },
    {
      label: 'Ongoing Support',
      description: 'Together, we\'ll develop a personalized treatment plan and schedule regular sessions.',
    },
  ];

  React.useEffect(() => {
    // Check if script is already loaded
    if (!document.querySelector('script[src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            Schedule an Appointment
          </Typography>
          <Typography variant="h5">
            Take the first step toward positive change
          </Typography>
        </Container>
      </Box>
      
      {/* Appointment Form Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper 
                        elevation={3} 
                        sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center" }}
                    >
                        <Typography variant="h4" gutterBottom>For existing clients</Typography>
                        <Typography variant="body1" paragraph>
                        Access the client portal here
                        </Typography>
                        <Button 
                        component={Link} 
                        to="https://amaleamaxfield.clientsecure.me/sign-in" 
                        variant="contained" 
                        size="large"
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: 'white',
                            '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            },
                        }}
                        >
                        Client Portal
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, textAlign: "center" }}>
                        <Typography variant="h4" gutterBottom>New to the practice?</Typography>
                        <Typography variant="body1" paragraph>
                            Request a free 20 minute initial consultation or a full appointment.
                        </Typography>
                        
                        <Button
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: 'white',
                            textDecoration: "none",
                            '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            },
                        }}>

                            <a 
                            href="https://amaleamaxfield.clientsecure.me" 
                            className="spwidget-button" 
                            data-spwidget-scope-id="f9956af3-2877-4f52-831f-82596eb10981" 
                            data-spwidget-scope-uri="amaleamaxfield" 
                            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" 
                            data-spwidget-scope-global 
                            data-spwidget-autobind
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                            >
                            Request Appointment
                            </a>
                        </Button>
                    </Paper>
                </Grid>
          <Grid item xs={12} md={8}>
            {!submitted ? (
              <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Contact Amalea
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Please fill out the form below to contact Amalea.
                </Typography>
                
                <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        label="Type your message here..."
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      sx={{ px: 5, py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ) : (
              <Paper 
                elevation={3} 
                sx={{ 
                  p: { xs: 3, md: 5 }, 
                  borderRadius: 2, 
                  textAlign: 'center',
                  backgroundColor: 'primary.light',
                  color: 'white'
                }}
              >
                <Typography variant="h3" gutterBottom>Thank You!</Typography>
                <Typography variant="body1" paragraph>
                  Your message has been sent to Amalea successfully.
                </Typography>
                <Typography variant="body1" paragraph>
                  We'll contact you at {formData.email} or {formData.phone} as soon as possible.
                </Typography>
                <Button 
                  onClick={resetForm} 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send another message
                </Button>
              </Paper>
            )}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper 
                elevation={3} 
                sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}
              >
                <Typography variant="h4" gutterBottom>Accepted Insurance</Typography>
                <Typography variant="body1" paragraph>
                  We accept the following insurance plans:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                  {insuranceTypes.map(insurance => (
                    <Typography key={insurance} component="li" variant="body1" sx={{ mb: 1 }}>
                      {insurance === 'LifeWise' ? 'LifeWise Health Plan' : insurance}
                      {insurance === 'Other Insurance' ? ' (please contact us to verify)' : ''}
                    </Typography>
                  ))}
                </Box>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                  Don't see your insurance listed? Please check with your insurance to confirm coverage.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      
      {/* What to Expect Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          What to Expect
        </Typography>
        <Box sx={{ my: 4 }}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label} active={true}>
                <StepLabel>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
      
      {/* Office Hours Section */}
      <Box sx={{ bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="md"> 
          <Alert 
            severity="warning" 
            icon={<WarningIcon />}
            sx={{ 
              bgcolor: 'rgba(255, 244, 229, 0.8)',
              '& .MuiAlert-icon': {
                color: theme.palette.warning.main
              }
            }}
          >
            <Typography variant="body1">
              <strong>Note:</strong> If you're experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </Typography>
          </Alert>
        </Container>
      </Box>
    </Box>
  );
}

export default Appointment;