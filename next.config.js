const withImages = require('next-images');
module.exports = withImages({
    // webpack(config, _) {
    //     return config;
    // },
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat'
            });
        }
        return config;
    },
    domains: [],
    env: {}
});
