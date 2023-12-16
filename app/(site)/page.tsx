import Brand from '../components/Brand';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Possibility from '../components/Possibility';
import WhatGPT3 from '../components/WhatGPT3';
import BlogContainer from '../containers/BlogContainer';
import FeatureContainer from '../containers/FeatureContainer';

export default function Home() {
  return (
    <div>
      <div className="bg-bg bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#002853] to-[#040C18]">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <FeatureContainer />
      <Possibility />
      <CTA />
      <BlogContainer />
      <Footer />
    </div>
  );
}
