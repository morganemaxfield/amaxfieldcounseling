import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Divider,
  Grid,
  Card,
  CardContent,
  Stack,
  CardMedia
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Headshot from '../assets/headshot.JPG'
import Background from '../assets/jumping.jpg';
import Couch from '../assets/couch.jpg';
import Building from '../assets/building.JPEG';


function About() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', py: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.light,
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          mb: 4,
          minHeight: 400,
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
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
        <Container maxWidth="xlg" sx={{pt: 8}}>
          <Typography variant="h1" gutterBottom>
            About
          </Typography>
        </Container>
      </Box>

        {/* Meet Our Therapist */}
        <Container maxWidth="xlg" sx={{ mb: 6 }}>
        <Paper 
            elevation={2} 
            sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            p: 4, 
            alignItems: 'center', 
            gap: 3,
            borderRadius: 2
            }}
        >
            {/* Round Avatar */}
            <Avatar
            sx={{
                width: 150,
                height: 150,
                border: '3px solid white',
                boxShadow: 2
            }}
            alt="Amalea Maxfield"
            src={Headshot}
            />

            {/* Text Content */}
            <Box sx={{ textAlign: 'center'}}>
            <Typography variant="h4" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                Amalea Maxfield
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
                Licensed Clinical Social Worker
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, textAlign: 'left' }}>
              I bring over 20 years of experience as a licensed counselor and social worker, serving children, teens, adults, and families. My professional journey has taken me through schools, community agencies, adoption services, child welfare, and faith-based settings. These diverse experiences allow me to offer deep insight, practical tools, and a compassionate perspective to those I work with.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, textAlign: 'left' }}>
              Beyond my professional background, I’m also a parent of two adult children and a former foster parent. These roles have shaped my understanding of the challenges families face and the resilience required to overcome them. I know what it means to navigate seasons of change, and I’m here to walk alongside you with empathy and care.
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.6, textAlign: 'left' }}>
            My practice is rooted in hope, compassion, and integrity—values shaped by my Christian faith. While I warmly welcome clients from all backgrounds, my faith informs the belief that every person is worthy of healing, connection, and support. My goal is to create a safe, nurturing space where you feel seen, understood, and empowered to grow. Together, we’ll work toward healing and lasting change.
            </Typography>
            </Box>
        </Paper>
        </Container>

      {/* Experience & Background Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Experience & Background
        </Typography>
        
        <Grid container spacing={4}>
          {/* Education */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <SchoolIcon 
                  sx={{ 
                    fontSize: 60, 
                    mb: 2 
                  }} 
                />
                <Typography variant="h4" gutterBottom>
                  Education
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Master of Social Work (MSW)</strong><br />
                  Advanced clinical training in therapeutic interventions
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Bachelor of Social Work (BSW)</strong><br />
                  Foundation in human behavior and social work practice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Continuing education in trauma-informed care, CBT, and attachment theory
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Professional Experience */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <WorkIcon 
                  sx={{ 
                    fontSize: 60, 
                    mb: 2 
                  }} 
                />
                <Typography variant="h4" gutterBottom>
                  Professional Experience
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>20+ Years Licensed Practice</strong><br />
                  Clinical Social Worker specializing in children, adolescents, and families
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Specializations:</strong><br />
                  • Trauma & PTSD<br />
                  • Anxiety & Depression<br />
                  • ADHD Support<br />
                  • Attachment Issues
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Evidence-based practices including CBT and trauma-informed care
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Personal Experience */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <FamilyRestroomIcon 
                  sx={{ 
                    fontSize: 60, 
                    mb: 2 
                  }} 
                />
                <Typography variant="h4" gutterBottom>
                  Personal Experience
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Mother of Two Adult Children</strong><br />
                  Personal understanding of parenting challenges and family dynamics
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Former Foster Parent</strong><br />
                  Hands-on experience with trauma recovery and attachment healing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Faith-based approach grounded in compassion, hope, and integrity
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Clinical Approach */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PsychologyIcon 
                    sx={{ 
                      fontSize: 40, 
                      color: theme.palette.primary.main, 
                      mr: 2 
                    }} 
                  />
                  <Typography variant="h4" color="primary">
                    Clinical Approach
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Cognitive Behavioral Therapy (CBT)"
                      secondary="Evidence-based approach for anxiety, depression, and behavioral challenges"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Trauma-Informed Care"
                      secondary="Sensitive, healing-focused approach for trauma survivors"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Attachment Theory"
                      secondary="Strengthening bonds and promoting secure relationships"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Credentials & Certifications */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VerifiedIcon 
                    sx={{ 
                      fontSize: 40, 
                      color: theme.palette.success.main, 
                      mr: 2 
                    }} 
                  />
                  <Typography variant="h4" sx={{ color: theme.palette.success.main }}>
                    Credentials
                  </Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Licensed Clinical Social Worker (LCSW)"
                      secondary="State-licensed to provide clinical therapy services"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="20+ Years Experience"
                      secondary="Extensive clinical practice with diverse populations"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Continuing Education"
                      secondary="Ongoing training in latest therapeutic techniques"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Our Philosophy */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          My Philosophy
        </Typography>
        <Typography paragraph>
          I believe healing begins with connection. Whether you're navigating big emotions, anxiety, trauma, or family stress, you don't have to face it alone. I offer trauma-informed, evidence-based counseling rooted in compassion and care. Together, we'll create a space for growth, peace, and resilience—one step at a time.
        </Typography>
        <List>
          {[
            {
              primary: 'Compassionate Connection',
              secondary: 'I believe healing begins with a safe, supportive relationship built on empathy and trust.',
            },
            {
              primary: 'Trauma-Informed Support',
              secondary: 'I honor my clients\' experiences and provide care that is sensitive to the impact of trauma.',
            },
            {
              primary: 'Personalized Care for All Ages',
              secondary: 'From children to adults, I tailor therapy to meet each client\'s developmental and emotional needs.',
            },
            {
              primary: 'Attachment-Focused Approach',
              secondary: 'I help strengthen relationships by exploring connection, safety, and emotional attunement.',
            },
            {
              primary: 'Guided by Hope and Growth',
              secondary: 'I walk alongside my clients, fostering resilience, peace, and meaningful change—one step at a time.',
            }
          ].map((item, idx) => (
            <ListItem key={idx} alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<strong>{item.primary}</strong>}
                secondary={item.secondary}
              />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Begin Your Journey?
        </Typography>
        <Typography variant="h6" paragraph>
          I'm here to support you every step of the way.
        </Typography>
        {/* Replace Button with your custom button if available */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/appointment"
        >
          Schedule an Appointment
        </Button>
      </Container>
      {/* Location Section */}
      <Grid xs="12" sx={{justifyContent: "center"}}>
        <Card maxWidth="md" sx={{ display: 'flex', mx: 10, my: 3}}>
          <CardContent>
            <Stack>
              <Typography variant="h3" align="left" gutterBottom>
                Location
              </Typography>
              <Typography variant="subtitle" align="left" gutterBottom sx={{mt: 5}}>
                  <strong>Meridian Professional Counseling</strong><br/>
                  426 North Meridian<br/>
                  Puyallup, WA 98371
              </Typography>
              <Button  
                href="https://maps.app.goo.gl/JUqLMQhshtH3WKpy5" 
                variant="contained" 
                color="primary"
                sx={{mt: 10}}>
                Get Directions
              </Button>
            </Stack>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ maxWidth: 275, ml: 30, mr: 12, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)'}}
            image={Couch}
            alt="Counseling office inside image"
            align="right"
          />
          <CardMedia
            component="img"
            sx={{ maxWidth: 275, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)'}}
            image={Building}
            alt="Counseling office Building"
            align="right"
          />
        </Card>
      </Grid>
    </Box>
  );
}

export default About;