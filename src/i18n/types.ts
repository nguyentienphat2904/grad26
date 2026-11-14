export type Language = 'vi' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    announcement: string;
    invitation: string;
    details: string;
    directions: string;
    mapRoute: string;
    celebrateTooltip: string;
    brandBadge: string;
    switchLangTooltip: string;
  };
  hero: {
    invitationPill: string;
    mainHeadingLine1: string;
    mainHeadingLine2: string;
    classOf: string;
    graduateName: string;
    graduateSignature: string;
    university: string;
    subUniversity: string;
    supportingText: string;
    viewInvitation: string;
  };
  invitation: {
    sectionBadge: string;
    heading: string;
    hostName: string;
    university: string;
    cordialText: string;
    defaultGuestName: string;
    bodyText: string;
    sealTooltip: string;
    tossConfetti: string;
    celebrated: string;
    inviteFriend: string;
    modal: {
      title: string;
      description: string;
      inputLabel: string;
      inputPlaceholder: string;
      previewLabel: string;
      copyButton: string;
      copiedButton: string;
      close: string;
    };
  };
  details: {
    subTitle: string;
    title: string;
    countdown: {
      tag: string;
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    when: {
      category: string;
      month: string;
      day: number;
      year: number;
      dayOfWeek: string;
      dateFormatted: string;
      time: string;
      timePeriod: string;
      addToGoogle: string;
      downloadIcal: string;
    };
    where: {
      category: string;
      venueTag: string;
      building: string;
      university: string;
      address: string;
      copyAddress: string;
      addressCopied: string;
    };
  };
  location: {
    subTitle: string;
    title: string;
    venueLabel: string;
    addressLabel: string;
    getDirections: string;
    loadingMap: string;
    campusTip: string;
    campusTipPrefix: string;
    openInMapsApp: string;
  };
  closing: {
    quote: string;
    salutation: string;
    signOff: string;
    author: string;
    backToTop: string;
    copyright: string;
    university: string;
    craftedWith: string;
    forFriends: string;
  };
}
