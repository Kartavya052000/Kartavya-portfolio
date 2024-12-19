import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';
import Works from '../sections/Works';
import Contact from '../sections/Contact';
// mock
import { documentTitle } from '../mock/profile';
import dynamic from 'next/dynamic'

const LottieAnimation = dynamic(() => import('lottie-web'), { ssr: false });

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
   <LottieAnimation />
      <title>{documentTitle}</title>
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      {/* Skill Section  */}
      <Skills />
      {/* Works Section  */}
      <Works />
      {/* Contact Section  */}
      <Contact />
    </MainLayout>
  );
}
