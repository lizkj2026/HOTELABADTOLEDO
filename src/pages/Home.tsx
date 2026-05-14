/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import BenefitsBar from '../components/BenefitsBar';
import Introduction from '../components/Introduction';
import RoomsSection from '../components/RoomsSection';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <Introduction />
      <RoomsSection />
      <Experience />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
