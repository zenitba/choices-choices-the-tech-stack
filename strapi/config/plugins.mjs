// plugins.js

export default {
    graphql: {
      enabled: true,
      defaultType: 'graphql',
      settings: {
        path: '/graphql',
        apolloServer: {
          tracing: false,
          cacheControl: true,
        },
      },
    },
  };
  