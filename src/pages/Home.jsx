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
  {/* HERO SECTION */}
  <Grid
    container
    item
    xs={12}
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
        backgroundColor: 'rgba(100, 100, 100, 0.4)', // Dark overlay
        zIndex: 1,
      },
      '& > *': {
        position: 'relative',
        zIndex: 2,
      },
      py: 8,
      px: 4,
      color: 'white',
    }}
  >
    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        variant="h2"
        paragraph
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem' },
          mb: 4,
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        Supporting Growth, Nurturing Joy.
      </Typography>

      <Divider variant="middle" sx={{ bgcolor: 'white', mb: 3 }} />

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        <b>Welcome to Maxfield Counseling Services. </b>Taking the first step
        toward counseling is an act of courage, and I’m so glad you’re here.
        Whether you are seeking support for yourself, your child, or your
        family, you are not alone on this journey. I work with children, teens,
        adults, and families, offering a safe and compassionate space for
        healing and growth. Sessions are available in person at my Puyallup,
        Washington office, as well as through convenient and secure teletherapy.
      </Typography>

      {/* Buttons stack on mobile */}
      <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
        <Grid item>
          <Button
            component={RouterLink}
            to="/appointment"
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
            Schedule an Appointment
          </Button>
        </Grid>
        <Grid item>
          <ClientPortalButton displayText="Client Portal" />
        </Grid>
        <Grid item>
          <Button
            component={RouterLink}
            to="/about"
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Grid>

    {/* FeaturesCard — stacked below text on mobile */}
    <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 }, textAlign: 'center' }}>
      <FeaturesCard />
    </Grid>
  </Grid>

  {/* OUR APPROACH SECTION */}
  <Grid item xs={12} sx={{ bgcolor: 'background.default', py: 6 }}>
    <Grid container maxWidth="lg" sx={{ margin: '0 auto', px: 2 }} spacing={4}>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: 'center',
        }}
      >
        <Avatar
          variant="square"
          sx={{
            width: 180,
            height: 240,
            fontSize: 32,
            flexShrink: 0,
          }}
          alt="Amalea Maxfield"
          src={Headshot}
        />
      </Grid>

      <Grid item xs={12} md={9}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="body1" paragraph>
          I'm so glad you're here. I am a clinical social worker focused on
          bringing a warm, compassionate, and client-centered approach to
          counseling and therapy. Licensed for over 20 years, I specialize in
          supporting children, adolescents, adults, and families as they
          navigate life's challenges and move toward healing, growth, and
          resilience. My practice is grounded in evidence-based practices such
          as Cognitive Behavioral Therapy (CBT) and I specialize in helping
          clients address anxiety, depression, trauma, ADHD, and
          attachment-related challenges.
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Much of my work centers on helping children and teens regulate
          emotions, build resilience, and develop healthy coping strategies. I
          also support parents and caregivers in understanding their child's
          needs and strengthening family relationships. I have extensive
          experience helping individuals who have experienced trauma, including
          foster and adoptive children, and I am passionate about strengthening
          family bonds and promoting secure, healthy attachments.
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          Currently Accepting New Clients
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
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
  );
}

export default Home;