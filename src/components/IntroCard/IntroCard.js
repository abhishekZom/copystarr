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
import { grey, red, yellow } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styledWrapper from 'styled-components';
import AvatarImg from '../../images/copystarr_avatar.jpg';
import LogoImg from '../../images/copystarr_logo.png';

import { Autoplay, EffectCreative } from "swiper";
import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardWrapper sx={{ maxWidth: 1200 , margin: '1rem auto' }}>
      <CardHeader sx={{ padding: '2rem'}}
        title="Direct Response Copywriter"
        subheader='Reach me at "aonstarr@copystarr.com"'
        subheaderTypographyProps = {{
          color: '#EABA3F',
          fontSize: '18px',
          textAlign: 'center',
          lineHeight: '15px',
          fontFamily: 'Inknut Antiqua' }}
        titleTypographyProps = {{
          color: '#EABA3F',
          fontSize: '17px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Inknut Antiqua',
          marginBottom: '0.5rem' }}
        style={{color: '#EABA3F', background: '#3b5b78' }}
      />
      <CardMediaWrapper>
        <CardMedia
          component="img"
          height="400"
          image={LogoImg}
          alt="Logo"
        />
      </CardMediaWrapper>
      {/* <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant="h3" color="text.primary">
          Freelance Copywriter
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing style={{background: '#161616'}}>
        {/* <span style={{ color: yellow[700], fontSize: '24px', lineHeight: '45px' }}>
          SOCIALS:
        </span> */}
        <IconButton aria-label="instagram">
          <Link variant='a' href="https://www.instagram.com/copy_starr" target="_blank">
            <InstagramIcon style={{color: '#EABA3F' }} />
          </Link>
        </IconButton>
        <IconButton aria-label="twitter">
          <Link variant='a' href="https://twitter.com/copystarr" target="_blank">
            <TwitterIcon style={{color: '#EABA3F' }}  />
          </Link>
        </IconButton>
        
        {/* <ExpandMore
          expand={true}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color: '#EABA3F' }}/>
        </ExpandMore> */}
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
      <CardContent sx={{ textAlign: 'center', bgcolor: grey[400] }}>
        <Typography variant="h3" color="text.primary">
          <ServicesTitle style={{
            textAlign: 'center',
            textDecoration: 'underline',
            color: grey[900],
            fontFamily: 'Inknut Antiqua'
          }}>
            Sevices
          </ServicesTitle>
          
        </Typography>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          modules={[Autoplay, EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px'}}>
              Email Copywriting
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px'}}>
              Facebook Ads
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px'}}>
              Twitter Smartposts
            </ServicesSlideContainer>
          </SwiperSlide>
        </Swiper>
      </CardContent>
      </Collapse>
    </CardWrapper>
  );
}

const CardWrapper = styledWrapper(Card)`
  background: #000;
`;

const CardMediaWrapper = styledWrapper.div`
  display: flex;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  margin-left: 0.5rem;
  padding: 1rem;
  background: #000;
  margin-left: -0.1rem;
`;

const ServicesTitle = styledWrapper.span`
  display: inline-block;
  width 100%;
  color: #E9BA3F;
  margin-bottom: 1rem;
`;

const ServicesSlideContainer = styledWrapper.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 60%;
  height: 5rem;
  background: grey;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  border-radius: 5px;
`