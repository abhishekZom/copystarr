import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { grey, red, yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import styledWrapper from 'styled-components';
import AvatarImg from '../../images/copystarr_avatar.jpg';
import LogoImg from '../../images/copystarr_logo.png';
import testimonial1 from '../../images/testimonial2.png';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Testimonials() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 750 , margin: '6rem auto' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Testimonials"
        titleTypographyProps = {{
          color: 'white',
          fontSize: '23px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Verdana' }}
        style={{color: 'white', background: '#141F29' }}
      />
      <CardActions disableSpacing style={{background: '#141F29'}}>
        <span style={{ 
          color: 'white',
          width: '100%',
          textAlign:'right'
          }}>see more</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more"
        >
          <Typography sx={{ color: 'white' }} variant="span" color="text.primary"></Typography>
          <ExpandMoreIcon style={{color: 'white' }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{ bgcolor: '#3b5b78', padding: '1rem' }}>
        <TestimonialCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#3b5b78' }} aria-label="recipe">
                KL
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Name: K. S. Luthra"
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

const CardMediaWrapper = styledWrapper.div`
  display: flex;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  padding: 1rem;
`;

const TestimonialCard = styled(Card)`
  margin: 0rem;
`;
