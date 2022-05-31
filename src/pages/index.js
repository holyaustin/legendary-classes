import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import SocialImpact from 'sections/social-impact';
import Donation from 'sections/donation';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import Roadmap from 'sections/roadmap';
import Team from 'sections/team';
import About from 'sections/about';
import Package from 'sections/package';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Legendary Classes is a collection of unique 3D Classes on the Ethereum Blockchain. Every single item within the class has different education material where Holders can Learn & Grow" />
          <Banner />
          <About />
          <Roadmap />
          <SocialImpact />
          <PartnerSection />
          <Donation />
          <Team />
          <Faq />
          {/** 
          <KeyFeature />
          <Feature />
          <Package />
          */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
