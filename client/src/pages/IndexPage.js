import React from 'react';
import Hero from '../components/IndexPage/Hero';
import CollectionSection from '../components/IndexPage/CollectionSection';
import SearchSection from '../components/IndexPage/SearchSection';
import Footer from '../components/IndexPage/Footer';

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <SearchSection />
      <Footer />
    </div>
  );
}
