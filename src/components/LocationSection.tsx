import React, { useState } from 'react';
import { Navigation, MapPin, ExternalLink, Compass } from 'lucide-react';
import { eventData } from '../data/event';
import { useI18n } from '../i18n';
import { WashiTape, CrystalPattern } from './DecorativeElements';
import styles from './LocationSection.module.css';

export const LocationSection: React.FC = () => {
  const { t } = useI18n();
  const { event } = eventData;
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className={styles.section} id="location" aria-label={t.location.title}>
      <CrystalPattern position="bottom-left" size="md" opacity={0.45} />
      <CrystalPattern position="floating-right" size="sm" opacity={0.35} />

      <div className={`invitation-container ${styles.container}`}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{t.location.title}</h2>
          <div className={styles.headerRule} aria-hidden="true" />
        </div>

        {/* Location Info & Directions Card */}
        <div className={styles.cardWrapper}>
          <WashiTape variant="cream" angle={-2} width={110} className={styles.tapeLeft} />
          <WashiTape variant="cyan" angle={1.5} width={110} className={styles.tapeRight} />

          <div className={styles.locationCard}>
            {/* Top Venue Information Strip */}
            <div className={styles.venueInfoBanner}>
              <div className={styles.infoCol}>
                <span className={styles.venueLabel}>{t.location.venueLabel}</span>
                <h3 className={styles.venueHeading}>
                  {t.details.where.building}, {t.details.where.university}
                </h3>
              </div>

              <div className={styles.infoColAddress}>
                <span className={styles.venueLabel}>{t.location.addressLabel}</span>
                <p className={styles.venueAddress}>
                  <MapPin size={16} className={styles.pinIcon} />
                  <span>{t.details.where.address}</span>
                </p>
              </div>

              {/* Prominent Get Directions Button */}
              <div className={styles.directionsAction}>
                <a
                  href={event.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.getDirectionsButton}
                  aria-label={`${t.location.getDirections} (Google Maps)`}
                >
                  <Compass size={18} className={styles.navIcon} />
                  <span>{t.location.getDirections}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className={styles.mapContainer}>
              {!isMapLoaded && (
                <div className={styles.mapLoadingPlaceholder} aria-hidden="true">
                  <div className={styles.mapSpinner} />
                  <span>{t.location.loadingMap}</span>
                </div>
              )}

              <iframe
                title="Google Maps Location of Building B4, Ho Chi Minh City University of Technology"
                src={event.googleMapsEmbedUrl}
                className={styles.mapIframe}
                onLoad={() => setIsMapLoaded(true)}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Bar: Quick link & venue guidance */}
            <div className={styles.cardFooter}>
              <div className={styles.campusTip}>
                <span className={styles.tipDot} />
                <span className={styles.tipText}>
                  {t.location.campusTip}
                </span>
              </div>

              <a
                href={event.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openMapsLink}
              >
                <span>{t.location.openInMapsApp}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
