import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import { Duo, DoneAll, Payment } from '@mui/icons-material';
import {useTheme} from '@mui/material';


const FeaturesCard = () => {
    const theme = useTheme()
  const services = [
    {
      icon: <Duo sx={{color: "white"}}/>,
      title: "Online and In-Person Appointments"
    },
    {
      icon: <DoneAll sx={{ color: 'white' }} />,
      title: "Accepts Insurances"
    },
    {
      icon: <Payment sx={{ color: 'white' }} />,
      title: "Accepts Online Payments"
    }
  ];
  

  return (
    <Card 
      sx={{
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        maxWidth: 600,
        margin: '0 auto',
        backgroundColor:"transparent",
      }}
    >
      <CardContent sx={{ padding: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {services.map((service, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2 
              }}
            >
              <Avatar
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  width: 48,
                  height: 48
                }}
              >
                {service.icon}
              </Avatar>

                    <Typography
                        variant="body1"
                        sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1rem'
                        }}
                    >
                    {service.title}
                    </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;