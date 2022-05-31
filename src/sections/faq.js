/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What is LC’s?',
    contents: (
      <div sx={{ textAlign: 'justify',}} >
Legendary Classes (LC’s) is a beautiful community empowering creative minds to Learn & Grow, celebrating the dreamers & doers of the world. We are one of the unparalleled NFT artwork collection laying down steps for Metaverse Learning & spreading Love here and now. Featuring these innovative 3D classes, we are always working to bring the next big thing to the world.
<br />
<br />

We LC’s believe to power an Ecosystem of Good that builds a better world, where our social significance initiative lie at the core of who we are. With each LC’s NFT sold, we sponsor children in need, ensuring access to quality education, good health care, nutrition, and a caring environment across India & Africa. Together, we aim to leverage the horizonless potential of Web3 to make a real-world impact.
      </div>
    ),
  },
  {
    title: 'What are the benefits of owning an LC NFT?',
    contents: (
      <div sx={{ textAlign: 'justify',}} >
    •   Possession of a unique Legendary Classes artwork. <br />
    •   Access to Mindful Courses & Online Skilful Classes. <br />
    •   Priority access for Exclusive Airdrops including Physical Goodies. <br />
    •   Access to a host of LC’s utilities that increase in value with time. <br />
    •   Metaverse Learning Gateway 

      </div>
    ),
  },
  {
    title: `How much does a Legendary Child Support cost?`,
    contents: (
      <div sx={{ textAlign: 'justify',}} >
Access to quality education, good health care, nutrition, and a caring environment for a child per annum cost around 2500$+
      </div>
    ),
  },
  {
    title: `Where can I buy LC’s & how much?`,
    contents: (
      <div sx={{ textAlign: 'justify',}} >
Comming Soon
      </div>
    ),
  },
  {
    title: `I’m interested in collaborating, who do I contact?`,
    contents: (
      <div sx={{ textAlign: 'justify',}} >
We love collaborating with people, organizations & Institutes to spread love here & now…! Reach out us as legendry.classes@gmail.com 
      </div>
    ),
  },
  {
    title: `I’d like to donate money to a well, can I do that?`,
    contents: (
      <div sx={{ textAlign: 'justify',}} >
The world is a better, brighter place because of Legends like you…! You can directly visit our Patreon: https://www.patreon.com/Legendary_Classes
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }} id="faq">
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
