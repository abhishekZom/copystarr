import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import testimonial1 from '../../images/testimonial2.png';

export default function Testimonials() {
  const [expanded] = React.useState(true);

  return (
    <Card sx={{ maxWidth: 750 , margin: '6rem auto' }}>
      <CardHeader
        title="Testimonials"
        titleTypographyProps = {{
          color: 'white',
          fontSize: '23px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Verdana' }}
        style={{color: 'white', background: '#141F29' }}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{ bgcolor: '#3b5b78', padding: '1rem' }}>
        <p style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
          }}>
          <a
            href="https://drive.google.com/drive/folders/1oM4jKPJkhTMYW-RYK55bbqzEJJryI7hi?usp=sharing" 
            target="_blank"
            style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            lineHeight: "18px",
            fontSize: "18px"
          }}>Click see all testimonials</a>
        </p>
        <TestimonialCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#3b5b78' }} aria-label="recipe">
                KL
              </Avatar>
            }
            title="Name: Mr. K. S. Luthra"
            subheader="(Tohima Filters)"
            subheaderTypographyProps = {{
              color: '#EEE',
              fontSize: '16px',
              fontFamily: 'Verdana'
            }}
            titleTypographyProps = {{
              color: '#EEE',
              fontSize: '16px',
              fontFamily: 'Verdana'
            }}
            style={{color: '#EABA3F', background: '#141F29' }}
          />
          <CardContent sx={{ bgcolor: '#2a4156', padding: '1rem' }}>
            <Typography sx={{ 
              textAlign: 'left', 
              fontSize: '16px', 
              background: '#3b5b78',
              fontFamily: 'Verdana',
              padding: '0.5rem',
              color: 'white',
              borderRadius: '0.5rem' }} variant="h5" color="text.primary">
              <CardMedia
                component="img"
                height="auto"
                image={testimonial1}
                alt="Logo"
              />
            </Typography>
          </CardContent>
        </TestimonialCard>
      </CardContent>
      </Collapse>
    </Card>
  );
}

const TestimonialCard = styled(Card)`
  margin: 0rem;
`;
