import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n';
import { CrystalPattern, GraduationCapIllustration } from './DecorativeElements';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onScrollToInvitation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToInvitation }) => {
  const { t } = useI18n();

  const handleScroll = () => {
    if (onScrollToInvitation) {
      onScrollToInvitation();
    } else {
      const target = document.getElementById('invitation');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.heroSection} id="hero" aria-label="Graduation Announcement">
      {/* Decorative Low-poly Crystal Background Patterns */}
      <CrystalPattern position="top-left" size="lg" opacity={0.6} />
      <CrystalPattern position="top-right" size="lg" opacity={0.65} />
      <CrystalPattern position="floating-right" size="sm" opacity={0.4} />

      <div className={`invitation-container ${styles.heroContainer}`}>
        {/* Main Heading */}
        <h1 className={styles.mainTitle}>
          <span className={styles.titleLine}>{t.hero.mainHeadingLine1}</span>
          <span className={`${styles.titleLine} ${styles.accentHighlight}`}>
            {t.hero.mainHeadingLine2}
          </span>
        </h1>

        {/* Graduation Cap Vector Decoration */}
        <div className={styles.illustrationWrapper}>
          <GraduationCapIllustration size={130} />
        </div>

        {/* University Info & Supporting Tagline */}
        <p className={styles.universityBadge}>{t.hero.subUniversity}</p>
        <p className={styles.universityBadge}>{t.hero.university}</p>

        {/* Graduate Name with Handwritten Script Aesthetic */}
        <div className={styles.graduateContainer}>
          <div className={styles.nameRuleLeft} aria-hidden="true" />
          <div className={styles.nameContent}>
            <div className={styles.graduateName}>{t.hero.graduateName}</div>
          </div>
          <div className={styles.nameRuleRight} aria-hidden="true" />
        </div>
        <p className={styles.supportingText}>
          &ldquo;{t.hero.supportingText}&rdquo;
        </p>

        {/* Subtle Scroll Down Indicator */}
        <div className={styles.scrollIndicatorWrapper}>
          <button
            type="button"
            onClick={handleScroll}
            className={styles.scrollButton}
            aria-label="Scroll down to personal invitation"
          >
            <span className={styles.scrollText}>{t.hero.viewInvitation}</span>
            <span className={styles.arrowBounce}>
              <ChevronDown size={20} strokeWidth={2.2} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
