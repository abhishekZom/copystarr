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
import dp from '../../images/dp.jpg';

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
    <CardWrapper sx={{ maxWidth: 1200 , margin: '1rem auto', color: "white" }}>
      <ProfilePicWrapper>
        <CardMedia
            component="img"
            width="200"
            height="200"
            image={dp}
            alt="Logo"
          />
      </ProfilePicWrapper>
      <CardContent>
        <Typography sx={{ textAlign: 'center'}} variant="p" color="text.primary" >
          <Typography variant="p" 
            style={{
            margin: "0!important", 
            padding: "0.3rem", 
            display: "block",
            color: "#cccccc"
            }}>Direct Response Copywriter</Typography>
          <Typography variant="p" style={{
              margin: "0!important",
              padding: "0.3rem",
              display: "block",
              color: "#cccccc"
            }}>
              Reach me via &nbsp;
            <Link
              variant='a'
              href="mailto:aonstarr@copystarr.com"
              target="_blank"
              style={{
                display: "inline-block",
                marginLeft: "3px!important",
                padding: "0.3rem",
                textDecoration: "none",
                border: "2px solid lightblue",
                borderRadius: "10px",
                color: "#cccccc"
              }}>
              Email
            </Link>
          </Typography>
          <Typography variant="p" style={{
              margin: "0!important",
              padding: "0.3rem",
              display: "block",
              color: "#cccccc"
            }}>
              Book a call Now : &nbsp;
            <Link
              variant='a'
              href="https://calendly.com/copystarr/discovery-call"
              target="_blank"
              style={{
                display: "inline-block",
                marginLeft: "3px!important",
                padding: "0.3rem",
                textDecoration: "none",
                border: "2px solid lightblue",
                borderRadius: "10px"
              }}>
              Calendly
            </Link>
          </Typography>
          <Typography variant="p"style={{margin: "0!important", padding: "0.3rem", display: "block",
            color: "#cccccc"}}>
            Socials : &nbsp;
            <Link
              variant='a'
              href="https://twitter.com/copystarr"
              target="_blank"
              style={{
                display: "inline-block",
                marginLeft: "3px!important",
                padding: "0.3rem",
                textDecoration: "none",
                border: "2px solid lightblue",
                borderRadius: "10px"
              }}>
              Twitter
            </Link>
            &nbsp; , 
            &nbsp;
            <Link
              variant='a'
              href="https://www.instagram.com/copy_starr/"
              target="_blank"
              style={{
                display: "inline-block",
                marginLeft: "3px!important",
                padding: "0.3rem",
                textDecoration: "none",
                border: "2px solid lightblue",
                borderRadius: "10px"
              }}>
              Instagram
            </Link>
          </Typography>
          <Typography variant="p"style={{margin: "0!important", padding: "2rem", display: "block",
            color: "#cccccc"}}>
            I believe in immediate execution without sacrificing the quality of work. You can now competely focus on your brand image since you are the product. I will smoothen out the marketing side of things with content that is produced to sell and breed loyalty.
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{background: '#161616'}}>
        <IconButton aria-label="instagram">
          <Link variant='a' href="https://www.instagram.com/copy_starr" target="_blank">
            <InstagramIcon style={{color: 'white' }} />
          </Link>
        </IconButton>
        <IconButton aria-label="twitter">
          <Link variant='a' href="https://twitter.com/copystarr" target="_blank">
            <TwitterIcon style={{color: 'white' }}  />
          </Link>
        </IconButton>
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
      <CardContent sx={{ textAlign: 'center', bgcolor: '#141F29' }}>
        <Typography variant="h4" color="text.primary">
          <ServicesTitle style={{
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Verdana',
            marginBottom: '3rem'
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
          <SwiperSlide style={{ color: 'white', bgcolor: '#3b5b78'}}>
            <ServicesSlideContainer
              style={{ lineHeight: '30px', color: 'white', bgcolor: '#3b5b78'}}>
              Email Copywriting
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px', color: 'white', bgcolor: '#3b5b78'}}>
              Facebook Ads
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px', color: 'white', bgcolor: '#3b5b78'}}>
              Twitter Smartposts
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px', color: 'white', bgcolor: '#3b5b78'}}>
              Landing Pages
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer
              style={{ lineHeight: '30px', color: 'white', bgcolor: '#3b5b78'}}>
              Sales Letter
            </ServicesSlideContainer>
          </SwiperSlide>
        </Swiper>
      </CardContent>
      </Collapse>
    </CardWrapper>
  );
}

const ProfilePicWrapper = styledWrapper.div`
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  border-radius: 100px;
  overflow: hidden;
`

const CardWrapper = styledWrapper(Card)`
  padding: 1rem;
  background: #1E2F3E!important;
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
  color: white;
  margin-bottom: 1rem;
`;

const ServicesSlideContainer = styledWrapper.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 60%;
  height: 5rem;
  background: #3b5b78;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  border-radius: 5px;
`