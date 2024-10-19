module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", 'https:'],
          "img-src": ["'self'", 'data:', 'blob:', 'res.cloudinary.com'], // If using Cloudinary for images
          "media-src": ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          "connect-src": ["'self'", 'http://localhost:1337', 'https:'] // Allow API calls from your frontend
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // Allow your Next.js app
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
