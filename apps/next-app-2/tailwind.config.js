import sharedTailwindConfig from '@packages/tailwind/tailwind.config.js';

const config = {
  ...sharedTailwindConfig,
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
};

export default config;
