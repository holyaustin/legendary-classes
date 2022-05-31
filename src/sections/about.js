/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import PaymentThumb from 'assets/Legendry/logonew.jpg';
//import PaymentThumb from 'assets/Legendry/free.jpg';
import PaymentPattern from 'assets/payment-pattern.png';

const data = {
  subTitle: 'About Us',
  title: 'Legendary Classes, NFT, Learning in the Metaverse and DAO.',
  description:
    'We are the first official Classes NFT project in the metaverse! We LC’s believe to power an Ecosystem of Good that builds a better world, where our social significance initiative lie at the core of who we are. With each LC’s NFT sold, we sponsor children in need, ensuring access to quality education, good health care, nutrition, and a caring environment across India & Africa. Together, we aim to leverage the horizonless potential of Web3 to make a real-world impact.',
  btnURL: '#',
};

export default function About() {
  return (
    <section id="about" sx={{ variant: 'section.securePayment' }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={PaymentThumb} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox} >
          <TextFeature 
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: [
      '100%',
      null,
      null,
      'calc(50% + 400px)',
      'calc(50% + 480px)',
      'calc(50% + 570px)',
      null,
      'calc(50% + 625px)',
    ],
    backgroundImage: `url(${PaymentPattern})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, '-40px', null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['justify'],
    pt: [0, null, null, 0, 0, null, 1, 2],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};
