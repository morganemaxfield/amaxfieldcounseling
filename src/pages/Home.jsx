import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  useTheme, 
  Avatar,
  Divider,
  Stack,
  Box,
  CardMedia
} from '@mui/material';
import Headshot from '../assets/headshot.JPG';
import FeaturesCard from "../components/FeaturesCard.jsx";
import ClientPortalButton from "../components/ClientPortalButton.jsx";
import Background from '../assets/familyBW.jpg';
import Couch from '../assets/couch.jpg';
import Building from '../assets/building.JPEG';


function Home() {
  const theme = useTheme(); // Access the theme
  
  return (
    <Grid container xs={12}>
        <Grid
          container xs={12}
          maxWidth="lg" 
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(100, 100, 100, 0.4)' , // Dark overlay
              zIndex: 1
            },
            '& > *': {
              position: 'relative',
              zIndex: 2
            },
            py:8,
            px:4,
            color: "white"
          }}
        >
          <Grid xs={1}></Grid>
          <Grid 
            item 
            xs={5} 
            md={5} // Change to md={8} for better responsive behavior
            sx={{ textAlign: { xs: 'center', md: 'center' }, alignContent:"left", '& .MuiTypography-root': {
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            } }}
          >
            <Typography variant="h2" paragraph sx={{ fontSize: '1.2rem', mb: 4, fontStyle: "bold"}}>
              Supporting Growth, Nurturing Joy.
            </Typography>
            <Divider variant="middle"/>
            <Typography variant="body1" paragraph sx={{mb: 4, mt: 3}}>
              <b>Welcome to Maxfield Counseling Services. </b>Taking the first step toward counseling is an act of courage, and I’m so glad you’re here. Whether you are seeking support for yourself, your child, or your family, you are not alone on this journey. I work with children, teens, adults, and families, offering a safe and compassionate space for healing and growth. Sessions are available in person at my Puyallup, Washington office, as well as through convenient and secure teletherapy.
            </Typography>
            <Button 
              component={RouterLink} 
              to="/appointment" 
              variant="contained" 
              size="large"
              sx={{
                mr: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark transparent background
                color: 'white', // White text for visibility
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker on hover
                },
              }}
            >
              Schedule an Appointment
            </Button>
            <ClientPortalButton displayText="Client Portal"/>
            <Button 
              component={RouterLink} 
              to="/about" 
              variant="outlined" 
              color="white"
              size="large"
              sx={{ml: 2}}
            >
              Learn More
            </Button>
          </Grid>
          <Grid xs={2}></Grid>
          <Grid 
            item 
            xs={4} 
            md={4}
            sx={{align:"right"}}>
            <FeaturesCard/>
          </Grid>
      </Grid>

      {/* Our Approach Section */}
      <Grid item xs={12} sx={{ bgcolor: 'background.default', py: 6 }}>
        <Grid container maxWidth="lg" sx={{ margin: '0 auto', px: 0 }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'left' }}>
              <Avatar
                variant="square"
                sx={{
                  width: 180,
                  height: 240,
                  fontSize: 32,
                  flexShrink: 0 // prevents the avatar from shrinking
                }}
                alt="Amalea Maxfield"
                src={Headshot}
              />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome
            </Typography>
            <Divider sx={{ mb: 4 }}/>
            <Typography variant="body1" paragraph>
            I'm so glad you're here. I am a clinical social worker focused on bringing a warm, compassionate, and client-centered approach to counseling and therapy. Licensed for over 20 years, I specialize in supporting children, adolescents, adults, and families as they navigate life's challenges and move toward healing, growth, and resilience. My practice is grounded in evidence-based practices such as Cognitive Behavioral Therapy (CBT) and I specialize in helping clients address anxiety, depression, trauma, ADHD, and attachment-related challenges.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Much of my work centers on helping children and teens regulate emotions, build resilience, and develop healthy coping strategies. I also support parents and caregivers in understanding their child's needs and strengthening family relationships. I have extensive experience helping individuals who have experienced trauma, including foster and adoptive children, and I am passionate about strengthening family bonds and promoting secure, healthy attachments.            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            Currently Accepting New Clients
            </Typography>
            <Grid container sx={{ justifyContent: 'center' }}>
              <Grid item>
                <Button 
                  component={RouterLink} 
                  to="/about" 
                  variant="contained" 
                  color="primary"
                >
                  Learn More About Me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;