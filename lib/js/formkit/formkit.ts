import type { App } from 'vue';
import { form, text, select } from '@formkit/inputs';
import { createThemePlugin } from '@formkit/themes';
import { plugin, defineFormKitConfig, bindings } from '@formkit/vue';
import { en, pl } from '@formkit/i18n';
import { rootClasses } from "./formkit.theme"
import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

const theme = createThemePlugin('genesis');

export function initialize(app: App) {
    app.use(plugin, defineFormKitConfig({
        config: {
            rootClasses,
        },
        inputs: {
            text, form, select,
        },
        plugins: [theme, bindings],
        locales: { en, pl },
        locale: 'en',
    }));
}