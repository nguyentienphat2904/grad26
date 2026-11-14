import React, { useState, useEffect } from 'react';
import { Navigation, Menu, X, Languages } from 'lucide-react';
import { eventData } from '../data/event';
import { useI18n } from '../i18n';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { language, t, setLanguage } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['hero', 'invitation', 'details', 'location', 'closing'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={`invitation-container ${styles.navContainer}`} aria-label="Main Navigation">
        {/* Monogram / Brand */}
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className={styles.brandButton}
          aria-label="Scroll to top"
        >
          <span className={styles.brandBadge}>{t.nav.brandBadge}</span>
        </button>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className={`${styles.navLink} ${activeSection === 'hero' ? styles.active : ''}`}
          >
            {t.nav.announcement}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('invitation')}
            className={`${styles.navLink} ${activeSection === 'invitation' ? styles.active : ''}`}
          >
            {t.nav.invitation}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('details')}
            className={`${styles.navLink} ${activeSection === 'details' ? styles.active : ''}`}
          >
            {t.nav.details}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('location')}
            className={`${styles.navLink} ${activeSection === 'location' ? styles.active : ''}`}
          >
            {t.nav.directions}
          </button>
        </div>

        {/* Action Buttons: Language Switcher, Confetti, Directions */}
        <div className={styles.navActions}>
          {/* Language Switcher Pill */}
          <div className={styles.langSwitchWrapper} title={t.nav.switchLangTooltip}>
            <Languages size={14} className={styles.langIcon} aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLanguage('vi')}
              className={`${styles.langBtn} ${language === 'vi' ? styles.langActive : ''}`}
              aria-label="Tiếng Việt"
            >
              VI
            </button>
            <span className={styles.langDivider}>/</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <a
            href={eventData.event.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsPill}
          >
            <Navigation size={14} />
            <span>{t.nav.mapRoute}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileToggle}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileLinks}>
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className={styles.mobileNavLink}
            >
              {t.nav.announcement}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('invitation')}
              className={styles.mobileNavLink}
            >
              {t.nav.invitation}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('details')}
              className={styles.mobileNavLink}
            >
              {t.nav.details}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('location')}
              className={styles.mobileNavLink}
            >
              {t.nav.directions}
            </button>
            <a
              href={eventData.event.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileDirectionsLink}
            >
              <Navigation size={16} />
              <span>{t.location.getDirections}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
