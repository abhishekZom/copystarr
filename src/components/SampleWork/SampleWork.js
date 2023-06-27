import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import styledWrapper from 'styled-components';

import eggcitingImg from '../../images/eggciting.png';
import Kitty1Img from '../../images/kitty.jpg';
import Meta from '../../images/meta.png';
import proImg from '../../images/pro.png';
import Pro1Img from '../../images/pro1.png';
import Pro2Img from '../../images/pro2.png';
import Sentient1Img from '../../images/sentient1.png';
import Sentient2Img from '../../images/sentient2.png';
import Sentient3Img from '../../images/sentient3.png';
import Sentient4Img from '../../images/sentient4.jpg';
import StarrImg from '../../images/starr.jpg';
import tohima1Img from '../../images/tohima1.png';
import tohima2Img from '../../images/tohima2.png';
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
          color: 'white',
          fontSize: '23px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Inknut Antiqua' }}
        style={{color: '#3b5b78', background: '#141F29' }}
      />
      <CardContent sx={{ textAlign: 'center', background: '#3b5b78' }}>
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
                    image={tohima1Img}
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
                    image={tohima2Img}
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
                    image={proImg}
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
                    image={eggcitingImg}
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
                    image={Meta}
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
        </Swiper>
      </CardContent>
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