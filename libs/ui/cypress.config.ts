import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  // cypress-visual-regression config
  env: {
    pluginVisualRegressionUpdateImage: false,
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
  },
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
  component: {
    ...nxComponentTestingPreset(__dirname),
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  }
});
