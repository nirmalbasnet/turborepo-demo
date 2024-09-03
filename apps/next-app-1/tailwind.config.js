import importedConfig from '@packages/tailwind/tailwind.config.js';
module.exports = {
  ...importedConfig,
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
};
