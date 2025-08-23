import React, { useState} from 'react';
import {useTheme} from '@mui/material';

const Specialties = () => {
    const theme = useTheme()
  const [kidFocused, setKidFocused] = useState(false);
  
  // Since we don't have access to your theme context, I'll create a default theme structure
  // You can replace this with your actual theme hook when integrating

  const labels = ["Anxiety", "Depression", "Trauma", "Adoption", "ADD/ADHD", "Child or Adolescent", "Attachment Issues", "Parenting", "School Issues", "Behavioral Issues", "Coping Skills"];
  const approaches = ["Behavioral Therapy", "Cognitive Behavioral Therapy (CBT)", "Motivational Interviewing", "Strength-Based", "Trauma Focused"];

  const specialtyDescriptions = {
    "Anxiety": {
      adult: "Supporting individuals in managing overwhelming worry, panic attacks, and anxiety disorders through evidence-based techniques and coping strategies.",
      kid: "Helping children understand their worried feelings and teaching them fun ways to feel brave and calm, like breathing exercises and relaxation games."
    },
    "Depression": {
      adult: "Providing compassionate care for those experiencing persistent sadness, low mood, and depression through therapeutic intervention and support.",
      kid: "Supporting children who feel sad or down for a long time, helping them find their happy feelings again through play and talk therapy."
    },
    "Trauma": {
      adult: "Specialized treatment for individuals who have experienced traumatic events, focusing on healing and recovery through trauma-informed approaches.",
      kid: "Helping children who have been through scary or confusing experiences feel safe again and learn that they are strong and protected."
    },
    "Adoption": {
      adult: "Supporting adoptive families, adoptees, and birth parents through the unique challenges and emotional aspects of the adoption journey.",
      kid: "Helping adopted children understand their special story and supporting families as they grow together with love and understanding."
    },
    "ADD/ADHD": {
      adult: "Assisting individuals with attention and hyperactivity challenges in developing focus, organization, and self-management skills.",
      kid: "Helping children with busy brains and bodies learn cool tricks to pay attention, sit still when needed, and feel proud of their unique strengths."
    },
    "Child or Adolescent": {
      adult: "Specialized therapy designed specifically for young people, addressing their unique developmental needs and challenges.",
      kid: "Special therapy just for kids and teens that uses games, art, and activities to help with feelings and growing up challenges."
    },
    "Attachment Issues": {
      adult: "Addressing difficulties in forming and maintaining healthy relationships, often stemming from early childhood experiences.",
      kid: "Helping children learn to trust and connect with the important people in their lives, feeling safe and loved in relationships."
    },
    "Parenting": {
      adult: "Supporting parents and caregivers in developing effective parenting strategies and building stronger family relationships.",
      kid: "Helping families learn how to communicate better, solve problems together, and have more fun as a family team."
    },
    "School Issues": {
      adult: "Addressing academic challenges, school anxiety, and educational transitions that affect students and families.",
      kid: "Helping children feel more confident at school, make friends, and solve problems with homework, teachers, or classmates."
    },
    "Behavioral Issues": {
      adult: "Working with individuals to understand and modify challenging behaviors through positive behavioral interventions.",
      kid: "Helping children learn better ways to express their feelings and make good choices, even when they feel mad or frustrated."
    },
    "Coping Skills": {
      adult: "Teaching practical strategies and techniques for managing stress, emotions, and life's challenges effectively.",
      kid: "Teaching children their own special toolkit of fun ways to handle big feelings, solve problems, and feel better when things get tough."
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: theme.palette?.background?.default || '#f8f9fa',
      padding: '2rem 0' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: theme.palette?.primary?.main || '#1976d2',
            marginBottom: '1rem' 
          }}>
            Therapy Specialties
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: theme.palette?.text?.secondary || '#666',
            marginBottom: '1.5rem' 
          }}>
            Compassionate, evidence-based care tailored to your unique needs
          </p>
        </div>
        <div sx={{textAlign: "left", marginBottom: '4rem'}}>
            <button
                onClick={() => setKidFocused(!kidFocused)}
                style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: kidFocused ? 'none' : `2px solid ${theme.palette?.primary?.main || '#1976d2'}`,
                backgroundColor: kidFocused ? (theme.palette?.primary?.main || '#1976d2') : 'white',
                color: kidFocused ? 'white' : (theme.palette?.primary?.main || '#1976d2'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: kidFocused ? '0 4px 8px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
                }}
            >
            {kidFocused ? 'Click For Adult Specialties' : 'Click for Kid Focused Specialties'}
          </button>
        </div>

        {/* Specialties Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem' ,
          marginTop:"2rem"
        }}>
          {labels.map((specialty, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: theme.palette?.background?.paper || 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: `1px solid ${theme.palette?.divider || '#e0e0e0'}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: theme.palette?.text?.primary || '#333',
                  margin: 0 
                }}>
                  {specialty}
                </h3>
              </div>
              
              <p style={{ 
                color: theme.palette?.text?.secondary || '#666',
                lineHeight: '1.6',
                margin: 0 
              }}>
                {kidFocused ? specialtyDescriptions[specialty].kid : specialtyDescriptions[specialty].adult}
              </p>
            </div>
          ))}
        </div>

        {/* Approaches Section */}
        <div style={{
          backgroundColor: theme.palette?.background?.paper || 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: `1px solid ${theme.palette?.divider || '#e0e0e0'}`
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: theme.palette?.text?.primary || '#333',
            marginBottom: '0.5rem' 
          }}>
            Therapeutic Approaches
          </h2>
          <div style={{ 
            width: '60px', 
            height: '4px', 
            backgroundColor: theme.palette?.primary?.main || '#1976d2',
            margin: '0 auto 1.5rem auto',
            borderRadius: '2px'
          }}></div>
          <p style={{ 
            textAlign: 'center', 
            color: theme.palette?.text?.secondary || '#666',
            marginBottom: '1.5rem' 
          }}>
            Evidence-based methods tailored to each individual's needs
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem' 
          }}>
            {approaches.map((approach, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: theme.palette?.primary?.main || '#1976d2',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                {approach}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;