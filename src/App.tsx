import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { EventDetails } from './components/EventDetails';
import { LocationSection } from './components/LocationSection';
import { ClosingSection } from './components/ClosingSection';
import './styles/global.css';

export const App: React.FC = () => {
  // Intersection Observer for tasteful fade-in as sections scroll into view
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const sections = document.querySelectorAll('section, footer');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sections.forEach((sec) => {
      sec.classList.add('section-observe');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      {/* Floating navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Announcement */}
        <HeroSection />

        {/* Section 2: Personal Invitation Card */}
        <InvitationSection />

        {/* Section 3: Event Details (Date, Time, Venue) */}
        <EventDetails />

        {/* Section 4: Location & Google Maps Directions */}
        <LocationSection />
      </main>

      {/* Section 5: Closing Message & Sign-off */}
      <ClosingSection />
    </div>
  );
};

export default App;
