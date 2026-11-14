export interface EventData {
  graduate: {
    fullName: string;
    scriptName: string;
    romanName: string;
    university: string;
    subUniversity: string;
    universityShort: string;
    campus: string;
    year: string;
  };
  hero: {
    invitationPill: string;
    mainHeadingLine1: string;
    mainHeadingLine2: string;
    supportingText: string;
  };
  invitation: {
    heading: string;
    hostName: string;
    cordialText: string;
    defaultGuestName: string;
    bodyText: string;
  };
  event: {
    dayOfWeek: string;
    dateFormatted: string;
    month: string;
    day: number;
    year: number;
    time: string;
    timePeriod: string;
    timeZone: string;
    isoDateTime: string;
    venueName: string;
    building: string;
    fullAddress: string;
    googleMapsDirectionsUrl: string;
    googleMapsEmbedUrl: string;
  };
  closing: {
    quote: string;
    salutation: string;
    signOff: string;
    author: string;
  };
  theme: {
    colors: {
      background: string;
      primaryBlue: string;
      lightBlue: string;
      darkBlue: string;
      text: string;
      white: string;
    };
  };
}

export const eventData: EventData = {
  graduate: {
    fullName: 'NGUYEN TIEN PHAT',
    scriptName: 'Nguyen Tien Phat',
    romanName: 'Nguyen Tien Phat',
    university: 'Ho Chi Minh City University of Technology',
    subUniversity: 'Vietnam National University Ho Chi Minh City',
    universityShort: 'HCMUT - VNU',
    campus: 'Campus 1 (Ly Thuong Kiet)',
    year: '2026',
  },
  hero: {
    invitationPill: 'YOU ARE INVITED TO',
    mainHeadingLine1: 'CELEBRATE MY',
    mainHeadingLine2: 'GRADUATION',
    supportingText: 'Bachelor of Engineering in Computer Science',
  },
  invitation: {
    heading: 'Happy Graduation!',
    hostName: 'Nguyen Tien Phat',
    cordialText: 'Cordially invites',
    defaultGuestName: 'Dearest Friends & Family',
    bodyText: 'To celebrate this special milestone and share a memorable moment together.',
  },
  event: {
    dayOfWeek: 'Saturday',
    dateFormatted: 'Saturday, November 28, 2026',
    month: 'November',
    day: 28,
    year: 2026,
    time: '12:00 PM',
    timePeriod: 'Noon',
    timeZone: 'GMT+7 (ICT)',
    isoDateTime: '2026-11-28T12:00:00+07:00',
    venueName: 'Ho Chi Minh City University of Technology',
    building: 'Building B4',
    fullAddress: '268 Ly Thuong Kiet Street, Dien Hong Ward, Ho Chi Minh City, Vietnam.',
    // Google Maps official Directions API format
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Building+B4,+Ho+Chi+Minh+City+University+of+Technology,+268+Ly+Thuong+Kiet+Street,+Dien+Hong+Ward,+Ho+Chi+Minh+City,+Vietnam',
    // Google Maps embed URL
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Building+B4,+Ho+Chi+Minh+City+University+of+Technology,+268+Ly+Thuong+Kiet+Street,+Dien+Hong+Ward,+Ho+Chi+Minh+City,+Vietnam&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  closing: {
    quote: 'Your presence would make this special day even more memorable.',
    salutation: 'Hope to see you there!',
    signOff: 'With love,',
    author: 'Nguyen Tien Phat',
  },
  theme: {
    colors: {
      background: '#F5F2EB',
      primaryBlue: '#168ED5',
      lightBlue: '#C7E5EF',
      darkBlue: '#426D83',
      text: '#554D4B',
      white: '#FFFFFF',
    },
  },
};
