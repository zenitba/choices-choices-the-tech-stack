export default {
  build: {
    extractCSS: true,
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
      },
      {
        rel: 'stylesheet',
        href: '/assets/swiper-bundle.min.css',
      },
    ],
    script: [
      {
        src: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.js',
        integrity: 'sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg',
        crossorigin: 'anonymous',
      },
    ],
  },
  css: [
    '/assets/css/style.css', // Reference your local CSS file from the "css" folder
    '/assets/swiper-bundle.min.css', // Include external CSS
  ],
}