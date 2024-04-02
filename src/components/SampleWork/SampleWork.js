import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import styledWrapper from 'styled-components';

import Meta from '../../images/meta.png';
import proImg from '../../images/pro.png';
import Pro1Img from '../../images/pro1.png';
import Pro2Img from '../../images/pro2.png';
import Sentient1Img from '../../images/sentient1.png';
import Sentient2Img from '../../images/sentient2.png';
import Sentient3Img from '../../images/sentient3.png';
import StarrImg from '../../images/starr.jpg';
import tohima1Img from '../../images/tohima1.png';
import tohima2Img from '../../images/tohima2.png';
import Work1Img from '../../images/work1.jpg';
import email1 from '../../images/email1.png';
import email2 from '../../images/email2.png';
import email3 from '../../images/email3.png';

import { EffectCards } from "swiper";
import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SampleWork() {

  return (
    <Card sx={{ maxWidth: 750 , margin: '6rem auto' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Gallery"
        titleTypographyProps = {{
          color: 'white',
          fontSize: '23px',
          textAlign: 'center',
          lineHeight: '30px',
          fontFamily: 'Verdana' }}
        style={{color: '#3b5b78', background: '#141F29' }}
      />
      <CardContent sx={{ textAlign: 'center', background: '#3b5b78' }}>
      <Swiper
          centeredSlides={true}
          effect={"cube"}
          grabCursor={true}
          modules={[EffectCards, ]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
          <SwiperSlide>
          <SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={email1}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={email2}
                    alt="Logo"
                  />
                </CardMediaWrapper>
              </SampleImageContainer>
            </ServicesSlideContainer>
          </SwiperSlide>
            <ServicesSlideContainer>
              <SampleImageContainer>
                <CardMediaWrapper>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={email3}
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

