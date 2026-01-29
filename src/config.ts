// Site Configuration
// UPDATE: Replace placeholder values with actual business information

export const siteConfig = {
  // Business Information
  businessName: 'Fort Myers Mattress By Appointment',
  shortName: 'Fort Myers Mattress',
  tagline: 'Private, no-pressure mattress shopping',

  // Contact
  phone: '(239) 200-6022',
  phoneRaw: '+12392006022', // For tel: and sms: links
  email: 'info@fortmyersmattress.com', // UPDATE: Add actual email

  // Address
  address: {
    street: '2950 Winkler Ave #601',
    city: 'Fort Myers',
    state: 'FL',
    zip: '33916',
    full: '2950 Winkler Ave #601, Fort Myers, FL 33916',
  },

  // Hours - UPDATE with actual hours
  hours: {
    note: 'By Appointment Only',
    schedule: [
      { days: 'Monday - Friday', hours: 'By Appointment' },
      { days: 'Saturday', hours: 'By Appointment' },
      { days: 'Sunday', hours: 'By Appointment' },
    ],
  },

  // Social Media
  socials: {
    facebook: 'https://www.facebook.com/fortmyersmattressbyappointment',
    instagram: '', // UPDATE: e.g., 'https://instagram.com/fortmyersmattress'
    google: '', // UPDATE: Google Business Profile URL
    yelp: '', // UPDATE: Yelp page URL
  },

  // SEO
  siteUrl: 'https://fort-myers-mattress.netlify.app', // TODO: Update to custom domain when ready

  // Google Maps
  googleMapsEmbed: 'https://maps.google.com/maps?q=2950+Winkler+Ave+%23601,+Fort+Myers,+FL+33916&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=2950+Winkler+Ave+%23601+Fort+Myers+FL+33916',

  // Area Served
  areaServed: ['Fort Myers', 'Cape Coral', 'Lehigh Acres', 'Bonita Springs', 'Estero', 'Naples', 'Southwest Florida'],
};

export type SiteConfig = typeof siteConfig;
