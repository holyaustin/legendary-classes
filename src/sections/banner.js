/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
//import BannerThumb from 'assets/banner-thumb.png';
import BannerThumb from 'assets/Legendry/meta2.gif';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: client2,
    title: 'google',
  },

];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Legendary Classes
          </Heading>
          <Text as="p" variant="heroSecondary" sx={{ textAlign: 'justify',}} >
          Legendary Classes (LC's) is a beautiful community empowering creative minds to Learn & Grow, celebrating the dreamers & doers of the world. We are one of the unparalleled NFT artwork collection laying down steps for Metaverse Learning & spreading Love here and now. Featuring these innovative 3D classes, we are always working to bring the next big thing to the world.
            
          </Text>
          {/**
          <Flex>
          <a href="https://www.patreon.com/Legendary_Classes?fan_landing=true" target="_blank">
            <Button variant="whiteButton" aria-label="Get Started">
              Donate Now
            </Button>
          </a>
          
            <>
           
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="l7lq3RrHi3E" //"ZNA9rmDsYVE" //https://www.youtube.com/watch?v=l7lq3RrHi3E
                onClose={() => setVideoOpen(false)}
              />
               
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch this Video on Breathe to Energize: 
              </Button>
            
            </>
          </Flex>
           */}
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Sponsored by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '30px'],
      mt: [0, null, null, '40px', 4, 8, 8],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
