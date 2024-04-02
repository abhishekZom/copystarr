import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styledWrapper from 'styled-components';
import dp from '../../images/dp.jpg';

import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecipeReviewCard() {

  return (
    <CardWrapper sx={{ maxWidth: 750 , margin: '1rem auto', color: "white" }}>
      <ProfilePicWrapper>
        <CardMedia
            component="img"
            width="150"
            height="150"
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
            }}><b>Aon | Direct Response Copywriter</b></Typography>
          <Typography variant="p" style={{
              margin: "0!important",
              padding: "0.3rem",
              display: "block",
              color: "#cccccc"
            }}>
              aon@copystarr.com
          </Typography>
          <Typography variant="p"style={{margin: "0!important", padding: "2rem", display: "block",
            color: "#cccccc"}}>
            I write auto responder sequences and high conversion short form emails for 6 figure brands.
          </Typography>
          <Typography variant="p" style={{
              margin: "0!important",
              padding: "0.3rem",
              display: "block",
              color: "#cccccc"
            }}>
              Book a call and lets get to work : &nbsp;
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
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}

const ProfilePicWrapper = styledWrapper.div`
  width: 150px;
  height: 150px;
  margin: 1rem auto;
  border-radius: 75px;
  overflow: hidden;
`

const CardWrapper = styledWrapper(Card)`
  padding: 1rem;
  background: #1E2F3E!important;
`;

