import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import styledWrapper from 'styled-components';


import Kitty1Img from '../../images/kitty.jpg';
import Pro1Img from '../../images/pro1.png';
import Pro2Img from '../../images/pro2.png';
import Sentient1Img from '../../images/sentient1.png';
import Sentient2Img from '../../images/sentient2.png';
import Sentient3Img from '../../images/sentient3.png';
import Sentient4Img from '../../images/sentient4.jpg';
import StarrImg from '../../images/starr.jpg';
import Work1Img from '../../images/work1.jpg';

import { Autoplay, EffectCards, EffectCreative, Navigation, Pagination } from "swiper";
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

export default function SampleWork() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 1200 , margin: '6rem auto' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sample Work"
        titleTypographyProps = {{
          color: '#EABA3F',
          fontSize: '23px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Inknut Antiqua' }}
        style={{color: '#EABA3F', background: '#161616' }}
      />
      <CardContent sx={{ textAlign: 'center', background: '#fbf1d9' }}>
      <Swiper
          centeredSlides={true}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={Sentient2Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                <CardMedia
                    component="img"
                    height="auto"
                    image={Sentient1Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                <CardMedia
                    component="img"
                    height="auto"
                    image={Kitty1Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={Sentient3Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={Pro1Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={Pro2Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
              <CardMediaWrapper>
              <CardMedia
                    component="img"
                    height="auto"
                    image={Work1Img}
                    alt="Logo"
                  />
              </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={StarrImg}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={Sentient4Img}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
        </Swiper>
      </CardContent>
      {/* <CardActions disableSpacing style={{background: '#161616'}}>
        <span style={{ 
          color: '#e9ba3f',
          width: '100%',
          textAlign:'right'
          }}>see more</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more"
        >
          <Typography sx={{ color: '#EABA3F' }} variant="span" color="text.primary"></Typography>
          <ExpandMoreIcon style={{color: '#EABA3F' }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{ bgcolor: grey[400], padding: '1rem' }}>
        <TestimonialCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: yellow[900] }} aria-label="recipe">
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
              fontFamily: 'Inknut Antiqua'
            }}
            titleTypographyProps = {{
              color: '#EEE',
              fontSize: '16px',
              fontFamily: 'Inknut Antiqua'
            }}
            style={{color: '#EABA3F', background: '#161616' }}
          />
          <CardContent sx={{ bgcolor: grey[700], padding: '1rem' }}>
            <Typography sx={{ 
              textAlign: 'center', 
              fontSize: '18px', 
              background: 'lightgrey',
              fontFamily: 'Inknut Antiqua',
              padding: '0.5rem',
              borderRadius: '0.5rem' }} variant="h5" color="text.primary">
              Aon reached out to me randomly and started giving me insights on my business that 
              I had never thought of during last 10 years of my operations.
              My sales were boosted by 1.8x in the 2nd month itself. Great experience. Time for new milestones
            </Typography>
          </CardContent>
        </TestimonialCard>
      </CardContent>
      </Collapse> */}
    </Card>
  );
}

const ServicesSlideContainer = styledWrapper.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 300px;
  font-size: 2rem;
  font-weight: 600;
  lineHeight: '30px';
  border-radius: 5px;
`;

const SampleImageContainer = styledWrapper.div`
  width: 300px;
  height: 300px;
`

const CardMediaWrapper = styledWrapper.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const TestimonialCard = styled(Card)`
  margin: 0rem;
`;