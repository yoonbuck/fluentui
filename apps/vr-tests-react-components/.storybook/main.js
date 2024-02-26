// @ts-check

const path = require('path');

const { registerTsPaths, registerRules, rules, loadWorkspaceAddon } = require('@fluentui/scripts-storybook');
const tsConfigPath = path.resolve(__dirname, '../../../tsconfig.base.json');

module.exports = /** @type {import('../../../.storybook/main').StorybookBaseConfig} */ ({
  addons: [
    {
      name: 'storybook-addon-swc',
      options: /** @type {import('storybook-addon-swc').StoryBookAddonSwcOptions} */ ({
        swcLoaderOptions: {
          jsc: {
            target: 'es2019',
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: true,
              dynamicImport: true,
            },
            transform: {
              decoratorMetadata: true,
              legacyDecorator: true,
            },
            keepClassNames: true,
            externalHelpers: true,
            loose: true,
          },
        },
        swcMinifyOptions: { mangle: false },
      }),
    },
    loadWorkspaceAddon('@fluentui/react-storybook-addon', { tsConfigPath }),
  ],
  stories: ['../src/**/*.stories.tsx'],
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  babel: {},
  typescript: {
    // disable react-docgen-typescript (totally not needed here, slows things down a lot)
    reactDocgen: false,
  },
  managerWebpack: (/** @type {import('webpack').Configuration}*/ config) => {
    config.resolve ??= {};
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.mjs': ['.mjs', '.mts'],
    };
    return config;
  },
  webpackFinal: config => {
    config.resolve ??= {};
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.mjs': ['.mjs', '.mts'],
    };
    registerTsPaths({ config, configFile: tsConfigPath });
    registerRules({ config, rules: [rules.griffelRule] });

    return config;
  },
});
