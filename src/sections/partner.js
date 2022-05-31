/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Partner from 'assets/BreathYoga-partner.webp';
import Partner2 from 'assets/Legendry/peaceinsideme.png';
import Partner3 from 'assets/Legendry/headtoheart.png';

const data = {
  subTitle: 'Partners',
  title: 'Learn BreathYoga',
  description:
    'Breath to heal, Breath to energize, Breathwork, Breath Holding and Meditation, Boost energy, vitality and mental peace using breathwork which recreates high altitude training wherever you are, Learn how with BreathYoga.',
  btnName: 'Get Started',
  btnURL: 'https://www.breathyoga.org/',

  subTitle2: '',
  title2: ' Peaceinside.me',
  description2:
    'You don’t need to travel to the far ends of the world to find what you’re looking for. All the answers lie within.',
  btnName2: 'Get Started',
  btnURL2: ' https://peaceinside.me/',

  subTitle3: '',
  title3: 'Learn more about the MindBody ',
  description3:
    'I meet you where you are.We all need to open our hearts and be brave enough to speak our truth. The truth sets us free.',
  btnName3: 'Get Started',
  btnURL3: 'https://www.headtoheart.ca/',
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }}  id="partner">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
          <TextFeature
            subTitle={data.subTitle2}
            title={data.title2}
            description={data.description2}
            btnName={data.btnName2}
            btnURL={data.btnURL2}
          />

          <TextFeature
            subTitle={data.subTitle3}
            title={data.title3}
            description={data.description3}
            btnName={data.btnName3}
            btnURL={data.btnURL3}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
         
          <Image sx={styles.img} src={Partner} alt="Partner" />
          <Image sx={styles.img1} src={Partner2} alt="Partner" />
          <Image sx={styles.img2} src={Partner3} alt="Partner" />
         
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  img: {
    width: ['250px', null, '655px'],
    height: 'auto',
    flexShrink: 0,
    mx: [5, 100],
    my: [5, 40],
  },
  img1: {
    width: ['75px', null, '200px'],
    height: 'auto',
    flexShrink: 0,
    alignItems: 'center',
    mx: [5, 100],
    my: [5, 80],
  },
  img2: {
    width: ['250px', null, '655px'],
    height: 'auto',
    flexShrink: 0,
    mx: [5, 100],
    my: [5, 20],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['justify'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
