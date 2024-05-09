import type { App } from 'vue';
import { createLibraryPlugin, form, text, select } from '@formkit/inputs';
import { createThemePlugin } from '@formkit/themes';
import { plugin, defineFormKitConfig, bindings } from '@formkit/vue';
import { en, pl } from '@formkit/i18n';
import { rootClasses } from "./formkit.theme"
import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

const library = createLibraryPlugin({ text, form, select });
const theme = createThemePlugin('genesis');

export function initialize(app: App) {
    app.use(plugin, defineFormKitConfig({
        config: {
            rootClasses,
        },
        plugins: [theme, bindings],
        locales: { en, pl },
        locale: 'en',
    }));
}