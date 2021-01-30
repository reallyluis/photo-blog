const workboxBuild = require('workbox-build');
const args = process.argv.slice(2); 
const dir = args[0] || 'build';

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: dir,
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: `${dir}/sw.js`,

    // Define runtime caching rules.
    runtimeCaching: [{
      // Match any request that ends with .ico, .png, .jpg, .jpeg, .svg or .webp.
      urlPattern: /\.(?:ico|png|jpg|jpeg|svg|webp)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    }],
  });
};

buildSW();