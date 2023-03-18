import React from 'react';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

export function NavBar() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
    </>
  );
}
