import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  CalendarPlus,
  Copy,
  Check,
  Building,
} from 'lucide-react';
import { eventData } from '../data/event';
import { useI18n } from '../i18n';
import { WashiTape, CrystalPattern } from './DecorativeElements';
import styles from './EventDetails.module.css';

export const EventDetails: React.FC = () => {
  const { language, t } = useI18n();
  const { event } = eventData;
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  // Live countdown to Saturday, November 28, 2026, 12:00 PM ICT
  useEffect(() => {
    const targetDate = new Date(event.isoDateTime).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [event.isoDateTime]);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(t.details.where.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2400);
    } catch {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2400);
    }
  };

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(
      language === 'vi'
        ? 'Lễ Tốt Nghiệp • Nguyễn Tiến Phát'
        : 'Graduation Celebration • Nguyen Tien Phat'
    );
    const details = encodeURIComponent(
      language === 'vi'
        ? 'Lễ tốt nghiệp và chụp hình kỷ niệm cùng Nguyễn Tiến Phát tại Tòa nhà B4, Trường Đại học Bách Khoa TP.HCM.'
        : 'Graduation ceremony and gathering for Nguyen Tien Phat at Building B4, Ho Chi Minh City University of Technology.'
    );
    const location = encodeURIComponent(`${t.details.where.building}, ${t.details.where.university}, ${t.details.where.address}`);
    // 20261128T120000 ICT is 20261128T050000Z
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261128T050000Z/20261128T090000Z&details=${details}&location=${location}`;
  };

  // Download .ics file for Apple Calendar / Outlook
  const downloadIcs = () => {
    const calTitle =
      language === 'vi'
        ? 'Lễ Tốt Nghiệp • Nguyễn Tiến Phát'
        : 'Graduation Celebration • Nguyen Tien Phat';
    const calDesc =
      language === 'vi'
        ? `Lễ tốt nghiệp và chụp hình kỷ niệm cùng Nguyễn Tiến Phát tại ${t.details.where.building}, ${t.details.where.university}.`
        : `Celebrate the graduation of Nguyen Tien Phat at ${t.details.where.building}, ${t.details.where.university}.`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NTP Graduation Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${calTitle}`,
      `DESCRIPTION:${calDesc}`,
      `LOCATION:${t.details.where.building}, ${t.details.where.university}, ${t.details.where.address}`,
      'DTSTART:20261128T050000Z',
      'DTEND:20261128T090000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Nguyen-Tien-Phat-Graduation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.section} id="details" aria-label={t.details.title}>
      <CrystalPattern position="top-right" size="md" opacity={0.4} />

      <div className={`invitation-container ${styles.container}`}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>{t.details.subTitle}</span>
          <h2 className={styles.title}>{t.details.title}</h2>
          <div className={styles.headerRule} aria-hidden="true" />
        </div>

        {/* Live Countdown Ribbon */}
        {!countdown.isPast && (
          <div className={styles.countdownBanner}>
            <span className={styles.countdownTag}>{t.details.countdown.tag}</span>
            <div className={styles.countdownGrid}>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>{countdown.days}</span>
                <span className={styles.countdownLabel}>{t.details.countdown.days}</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>{t.details.countdown.hours}</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>{t.details.countdown.minutes}</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>{t.details.countdown.seconds}</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Details Grid: Date/Time Card & Venue Card */}
        <div className={styles.detailsGrid}>
          {/* Card 1: Date & Time */}
          <div className={styles.cardContainer}>
            <WashiTape variant="pattern" angle={-1.5} width={90} className={styles.tapeCard1} />
            
            <div className={styles.detailCard}>
              <div className={styles.cardIconHeader}>
                <div className={styles.iconCircle}>
                  <CalendarIcon size={22} className={styles.cardIcon} />
                </div>
                <span className={styles.cardCategory}>{t.details.when.category}</span>
              </div>

              {/* Big Calendar Badge Display */}
              <div className={styles.calendarBadge}>
                <div className={styles.calendarMonth}>{t.details.when.month}</div>
                <div className={styles.calendarDay}>{t.details.when.day}</div>
                <div className={styles.calendarYear}>{t.details.when.year}</div>
              </div>

              <div className={styles.dateTimeText}>
                <h3 className={styles.cardPrimaryText}>{t.details.when.dayOfWeek}</h3>
                <p className={styles.cardSecondaryText}>{t.details.when.dateFormatted}</p>

                <div className={styles.timeRow}>
                  <Clock size={18} className={styles.timeIcon} />
                  <span className={styles.timeText}>{t.details.when.time}</span>
                  <span className={styles.timeZoneBadge}>{t.details.when.timePeriod}</span>
                </div>
              </div>

              {/* Add to Calendar Actions */}
              <div className={styles.calendarActions}>
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.calendarButton}
                >
                  <CalendarPlus size={15} />
                  <span>{t.details.when.addToGoogle}</span>
                </a>
                <button
                  type="button"
                  onClick={downloadIcs}
                  className={styles.icsButton}
                  title="Download iCal file for Apple Calendar or Outlook"
                >
                  <span>{t.details.when.downloadIcal}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Venue & Address */}
          <div className={styles.cardContainer}>
            <WashiTape variant="cyan" angle={2} width={90} className={styles.tapeCard2} />

            <div className={styles.detailCard}>
              <div className={styles.cardIconHeader}>
                <div className={styles.iconCircle}>
                  <Building size={22} className={styles.cardIcon} />
                </div>
                <span className={styles.cardCategory}>{t.details.where.category}</span>
              </div>

              <div className={styles.venueBadge}>
                <span className={styles.buildingTag}>{t.details.where.venueTag}</span>
                <h3 className={styles.buildingName}>{t.details.where.building}</h3>
              </div>

              <div className={styles.venueContent}>
                <p className={styles.universityName}>{t.details.where.university}</p>

                <div className={styles.addressBox}>
                  <MapPin size={18} className={styles.addressIcon} />
                  <p className={styles.addressText}>{t.details.where.address}</p>
                </div>
              </div>

              {/* Copy Address Action */}
              <div className={styles.addressActions}>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className={styles.copyAddressButton}
                  aria-label={t.details.where.copyAddress}
                >
                  {copiedAddress ? (
                    <>
                      <Check size={15} className={styles.successIcon} />
                      <span>{t.details.where.addressCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>{t.details.where.copyAddress}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
