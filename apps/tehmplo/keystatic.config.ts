import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Tehmplo CMS' } },

  singletons: {
    siteSettings: singleton({
      label: 'Configuración del Sitio',
      path: 'content/site-settings',
      schema: {
        siteName: fields.text({ label: 'Nombre del sitio' }),
        tagline: fields.text({ label: 'Tagline / Eslogan' }),
        logo: fields.image({ label: 'Logo', directory: 'public/images', publicPath: '/images' }),
        logoDark: fields.image({ label: 'Logo (versión oscura)', directory: 'public/images', publicPath: '/images' }),
        favicon: fields.image({ label: 'Favicon', directory: 'public', publicPath: '/' }),
        ...seoFields,
        social: fields.object(socialFields, { label: 'Redes Sociales' }),
      },
    }),

    homepage: singleton({
      label: 'Homepage Hero',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Hero Title',
          description: 'Main headline displayed over the hero',
          defaultValue: 'ELEVATE YOUR TULUM EXPERIENCE',
        }),
        heroSubtitle: fields.text({
          label: 'Hero Subtitle',
          description: 'Secondary line below the title',
          multiline: true,
          defaultValue: 'Premium open-air jungle nightclub in the heart of Tulum',
        }),
        heroBackgroundImage: fields.image({
          label: 'Hero Background Image',
          description: 'Fallback image for the hero section',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroVideoUrl: fields.url({
          label: 'Hero Background Video URL',
          description: 'Optional video URL for hero background (MP4 recommended)',
        }),
        ctaText: fields.text({
          label: 'CTA Button Text',
          defaultValue: 'Reserve Your Table',
        }),
        ctaLink: fields.url({
          label: 'CTA Button Link',
          description: 'Link for the main call-to-action button',
        }),
        ctaSecondaryText: fields.text({
          label: 'Secondary CTA Text',
          defaultValue: 'View Events',
        }),
      },
    }),

    vipSection: singleton({
      label: 'VIP Tables Section',
      path: 'content/vip-section',
      schema: {
        title: fields.text({
          label: 'Section Title',
          defaultValue: 'VIP TABLES',
        }),
        description: fields.text({
          label: 'Section Description',
          multiline: true,
          defaultValue:
            'Elevate your night with an exclusive VIP table experience. Personalized service, premium bottle selection, and the best views of the stage.',
        }),
        whatsappNumber: fields.text({
          label: 'WhatsApp Number',
          description: 'Include country code, e.g. 529841234567',
          defaultValue: '529841234567',
        }),
        whatsappMessage: fields.text({
          label: 'WhatsApp Pre-filled Message',
          multiline: true,
          defaultValue: 'Hola! Me gustaría reservar una mesa VIP en Tehmplo.',
        }),
        packages: fields.array(
          fields.object({
            name: fields.text({ label: 'Package Name' }),
            description: fields.text({ label: 'Package Description', multiline: true }),
            minSpend: fields.text({ label: 'Minimum Spend', description: 'e.g. $5,000 MXN' }),
            features: fields.text({
              label: 'Features',
              description: 'One feature per line',
              multiline: true,
            }),
            highlighted: fields.checkbox({
              label: 'Highlight this package',
              defaultValue: false,
            }),
          }),
          {
            label: 'VIP Packages',
            itemLabel: (props) => props.fields.name.value || 'Package',
          }
        ),
      },
    }),

    about: singleton({
      label: 'About Section',
      path: 'content/about',
      schema: {
        title: fields.text({
          label: 'Section Title',
          defaultValue: 'THE TEHMPLO EXPERIENCE',
        }),
        description: fields.text({
          label: 'Section Description',
          multiline: true,
          defaultValue:
            'Nestled within the lush jungle of Tulum, Tehmplo is more than a nightclub — it is a sanctuary where ancient energy meets contemporary sound.',
        }),
        pillars: fields.array(
          fields.object({
            title: fields.text({ label: 'Pillar Title' }),
            description: fields.text({ label: 'Pillar Description', multiline: true }),
            icon: fields.text({
              label: 'Icon',
              description: 'Icon name or emoji for this pillar',
            }),
          }),
          {
            label: 'Three Pillars',
            itemLabel: (props) => props.fields.title.value || 'Pillar',
          }
        ),
      },
    }),

    location: singleton({
      label: 'Location Section',
      path: 'content/location',
      schema: {
        address: fields.text({
          label: 'Full Address',
          defaultValue: 'Carretera Tulum-Boca Paila Km 5.5, Tulum, Quintana Roo, Mexico',
        }),
        mapUrl: fields.url({
          label: 'Google Maps Embed URL',
          description: 'Embed URL from Google Maps (iframe src)',
        }),
        mapDirectionsUrl: fields.url({
          label: 'Google Maps Directions URL',
          description: 'Link to open in Google Maps',
        }),
        phone: fields.text({
          label: 'Phone Number',
          defaultValue: '+52 984 123 4567',
        }),
        email: fields.text({
          label: 'Email',
          defaultValue: 'hello@tehmplo.mx',
        }),
        travelTimes: fields.array(
          fields.object({
            from: fields.text({ label: 'From Location' }),
            duration: fields.text({ label: 'Travel Duration' }),
            method: fields.text({ label: 'Travel Method', description: 'e.g. car, taxi, walking' }),
          }),
          {
            label: 'Travel Times',
            itemLabel: (props) => props.fields.from.value || 'Location',
          }
        ),
        openingHours: fields.text({
          label: 'Opening Hours',
          multiline: true,
          defaultValue: 'Thursday – Sunday\n10:00 PM – 5:00 AM',
        }),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'content/events/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Event Title',
            description: 'Name of the event or DJ',
          },
        }),
        date: fields.date({
          label: 'Event Date',
          description: 'Date of the event',
        }),
        time: fields.text({
          label: 'Doors Open Time',
          defaultValue: '10:00 PM',
        }),
        description: fields.text({
          label: 'Event Description',
          multiline: true,
        }),
        image: fields.image({
          label: 'Event Image',
          directory: 'public/images/events',
          publicPath: '/images/events',
        }),
        djName: fields.text({
          label: 'DJ / Artist Name',
          description: 'Main performer for the event',
        }),
        djOrigin: fields.text({
          label: 'DJ Origin',
          description: 'City/country the DJ is from, e.g. Berlin, Germany',
        }),
        genre: fields.text({
          label: 'Music Genre',
          description: 'e.g. Organic House, Afro House, Melodic Techno',
        }),
        ticketUrl: fields.url({
          label: 'Ticket URL',
          description: 'External ticketing link',
        }),
        ticketPrice: fields.text({
          label: 'Ticket Price',
          description: 'e.g. $500 MXN',
        }),
        featured: fields.checkbox({
          label: 'Featured Event',
          description: 'Show prominently on homepage',
          defaultValue: false,
        }),
        soldOut: fields.checkbox({
          label: 'Sold Out',
          defaultValue: false,
        }),
      },
    }),
  },
});
