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
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.123!2d-81.871!3d26.5975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM1JzUxLjAiTiA4McKwNTInMTUuNiJX!5e0!3m2!1sen!2sus!4v1600000000000',
  googleMapsLink: 'https://maps.google.com/?q=2950+Winkler+Ave+%23601,+Fort+Myers,+FL+33916',

  // Area Served
  areaServed: ['Fort Myers', 'Cape Coral', 'Lehigh Acres', 'Bonita Springs', 'Estero', 'Naples', 'Southwest Florida'],
};

export type SiteConfig = typeof siteConfig;
