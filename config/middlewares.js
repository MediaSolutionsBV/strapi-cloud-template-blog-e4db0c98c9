module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'", // Dit staat scripts toe van hetzelfde domein als je Strapi-app
            'https://cdn.ckeditor.com', // CKEditor bron
            'https://sublime-deer-8d96a70d84.strapiapp.com' // Voeg het domein toe waar je script vandaan komt
          ],
          'script-src-elem': [
            "'self'",
            'https://cdn.ckeditor.com',
            'https://sublime-deer-8d96a70d84.strapiapp.com'
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
