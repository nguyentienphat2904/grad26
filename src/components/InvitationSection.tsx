import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Share2, Check, Copy } from 'lucide-react';
import { useI18n } from '../i18n';
import {
  WashiTape,
  CornerFlourish,
  AcademicSeal,
  CrystalPattern,
} from './DecorativeElements';
import styles from './InvitationSection.module.css';

interface InvitationSectionProps {
  initialGuestName?: string;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({
  initialGuestName,
}) => {
  const { language, t } = useI18n();
  const [guestName, setGuestName] = useState<string>(t.invitation.defaultGuestName);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [customNameInput, setCustomNameInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  // Read URL query parameter "?to=..." or "?name=..."
  useEffect(() => {
    if (initialGuestName?.trim()) {
      setGuestName(initialGuestName.trim());
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const queryName = searchParams.get('to') || searchParams.get('name');

    if (queryName?.trim()) {
      setGuestName(queryName.trim());
    } else {
      setGuestName(t.invitation.defaultGuestName);
    }
  }, [language, initialGuestName, t.invitation.defaultGuestName]);

  // Trigger celebration confetti in palette colors (primary blue, pastel cyan, icy blue, gold)
  const triggerCelebration = () => {
    setHasCelebrated(true);
    const colors = ['#168ED5', '#C7E5EF', '#426D83', '#D4AF37', '#FAF8F5'];

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors,
      disableForReducedMotion: true,
    });

    // Secondary soft pop
    setTimeout(() => {
      confetti({
        particleCount: 35,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.65 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 35,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.65 },
        colors,
        disableForReducedMotion: true,
      });
    }, 250);
  };

  const getPersonalizedUrl = (name: string) => {
    const origin = window.location.origin + window.location.pathname;
    const cleanName = name.trim();
    if (!cleanName) return `${origin}?lang=${language}`;
    return `${origin}?to=${encodeURIComponent(cleanName)}&lang=${language}`;
  };

  const handleCopyLink = async () => {
    const targetUrl = customNameInput.trim()
      ? getPersonalizedUrl(customNameInput)
      : window.location.href;

    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className={styles.section} id="invitation" aria-label={t.invitation.sectionBadge}>
      {/* Decorative crystal accents in outer margins */}
      <CrystalPattern position="floating-left" size="sm" opacity={0.5} />
      <CrystalPattern position="bottom-right" size="md" opacity={0.55} />

      <div className={`invitation-container invitation-container--narrow ${styles.container}`}>
        {/* The Printed Invitation Card / Letter */}
        <div className={styles.cardWrapper}>
          {/* Scrapbook Washi Tape Strips pinned at the top */}
          <WashiTape
            variant="cyan"
            angle={-3}
            width={125}
            className={styles.tapeTopLeft}
          />
          <WashiTape
            variant="cream"
            angle={2.5}
            width={115}
            className={styles.tapeTopRight}
          />

          <article className={styles.invitationCard}>
            {/* Delicate Victorian / Classic Corner Flourishes */}
            <CornerFlourish position="tl" />
            <CornerFlourish position="tr" />
            <CornerFlourish position="bl" />
            <CornerFlourish position="br" />

            {/* Inner Border Frame */}
            <div className={styles.cardInnerBorder}>
              {/* Card Header */}
              <header className={styles.cardHeader}>
                <p className={styles.scriptGreeting}>{t.invitation.heading}</p>
                <h2 className={styles.hostName}>{t.invitation.hostName}</h2>
                <div className={styles.hostSub}>{t.invitation.university}</div>
              </header>

              <div className={styles.cardDivider} aria-hidden="true">
                <span className={styles.dividerLine} />
                <span className={styles.dividerDiamond}>◆</span>
                <span className={styles.dividerLine} />
              </div>

              {/* Cordially Invites & Guest Name */}
              <div className={styles.guestSection}>
                <p className={styles.cordialText}>{t.invitation.cordialText}</p>

                <div className={styles.guestNameBox}>
                  <div className={styles.guestNameHighlight}>
                    {guestName}
                  </div>
                </div>

                <p className={styles.invitationBody}>
                  {t.invitation.bodyText}
                </p>
              </div>

              {/* Bottom Card Footer with Seal & Interactive Confetti */}
              <footer className={styles.cardFooter}>
                <div
                  className={styles.sealContainer}
                  onClick={triggerCelebration}
                  title={t.invitation.sealTooltip}
                >
                  <AcademicSeal size={80} />
                </div>

                <div className={styles.cardActionWrapper}>
                  <button
                    type="button"
                    onClick={triggerCelebration}
                    className={styles.celebrateButton}
                    aria-label={t.invitation.tossConfetti}
                  >
                    <Sparkles size={16} />
                    <span>{hasCelebrated ? t.invitation.celebrated : t.invitation.tossConfetti}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(true)}
                    className={styles.personalizeButton}
                    title={t.invitation.inviteFriend}
                  >
                    <Share2 size={15} />
                    <span>{t.invitation.inviteFriend}</span>
                  </button>
                </div>
              </footer>
            </div>
          </article>
        </div>

        {/* Personalized Link Modal / Drawer */}
        {isShareModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsShareModalOpen(false)}>
            <div
              className={styles.modalCard}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modalTitle"
            >
              <h3 id="modalTitle" className={styles.modalTitle}>
                {t.invitation.modal.title}
              </h3>
              <p className={styles.modalDescription}>
                {t.invitation.modal.description}
              </p>

              <div className={styles.inputGroup}>
                <label htmlFor="guestInput" className={styles.inputLabel}>
                  {t.invitation.modal.inputLabel}
                </label>
                <input
                  id="guestInput"
                  type="text"
                  placeholder={t.invitation.modal.inputPlaceholder}
                  value={customNameInput}
                  onChange={(e) => setCustomNameInput(e.target.value)}
                  className={styles.textInput}
                  autoFocus
                />
              </div>

              <div className={styles.previewBox}>
                <span className={styles.previewLabel}>{t.invitation.modal.previewLabel}</span>
                <code className={styles.previewUrl}>
                  {getPersonalizedUrl(customNameInput || (language === 'vi' ? 'Tên Khách Mời' : 'Guest Name'))}
                </code>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={styles.copyLinkButton}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>{t.invitation.modal.copiedButton}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>{t.invitation.modal.copyButton}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className={styles.closeModalButton}
                >
                  {t.invitation.modal.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
