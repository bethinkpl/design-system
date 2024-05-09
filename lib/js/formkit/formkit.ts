import type { App } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from "./formkit.config";
import { createThemePlugin } from '@formkit/themes';
import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

const theme = createThemePlugin('genesis');

export function initialize(app: App) {
    app.use(plugin, defaultConfig(config));
}