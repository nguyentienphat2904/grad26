import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useI18n } from '../i18n';
import {
  CrystalPattern,
  WashiTape,
  GraduationCapIllustration,
  AcademicSeal,
} from './DecorativeElements';
import styles from './ClosingSection.module.css';

export const ClosingSection: React.FC = () => {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.section} id="closing" aria-label="Closing Message">
      {/* Decorative Crystals */}
      <CrystalPattern position="bottom-left" size="lg" opacity={0.5} />
      <CrystalPattern position="bottom-right" size="lg" opacity={0.5} />

      <div className={`invitation-container invitation-container--narrow ${styles.container}`}>
        {/* Scrapbook Note Card for the Closing Message */}
        <div className={styles.noteWrapper}>
          <WashiTape variant="cyan" angle={-1.5} width={130} className={styles.topTape} />

          <div className={styles.noteCard}>
            <div className={styles.capSmall}>
              <GraduationCapIllustration size={72} />
            </div>

            {/* Warm Closing Quote */}
            <blockquote className={styles.quoteText}>
              &ldquo;{t.closing.quote}&rdquo;
            </blockquote>

            <p className={styles.salutationText}>
              <span>{t.closing.salutation}</span>
            </p>

            <div className={styles.signatureBlock}>
              <span className={styles.signOffText}>{t.closing.signOff}</span>
              <span className={styles.scriptSignature}>{t.closing.author}</span>
            </div>

            <div className={styles.sealSubtle}>
              <AcademicSeal size={68} />
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className={styles.backToTopWrapper}>
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopButton}
            aria-label={t.closing.backToTop}
          >
            <ArrowUp size={16} />
            <span>{t.closing.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
