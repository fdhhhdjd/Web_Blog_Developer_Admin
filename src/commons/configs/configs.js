//* Configs Dev
const development = {
  app: {
    // Todo: NODE DEVELOPER
    node_dev: process.env.NODE_ENV,
  },
};

//* Configs Production
const production = {
  app: {
    // Todo: NODE PRODUCTION
    node_dev: process.env.NODE_ENV,
  },
};

// Todo: CONFIGS
const configs = {
  development,
  production,
};

const env = process.env.NODE_ENV;
export default configs[env];
