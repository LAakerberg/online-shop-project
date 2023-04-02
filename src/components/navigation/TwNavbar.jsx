import React from 'react';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

export function Navbar() {
  return (
    <>
      <Navigation />
      <MobileNavigation className="z-10" />
    </>
  );
}
