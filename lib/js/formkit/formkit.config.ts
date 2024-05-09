import { createProPlugin, inputs } from '@formkit/pro';
import { form, text, select } from '@formkit/inputs';
import { DefaultConfigOptions } from '@formkit/vue/dist/index.d.mjs';
import { rootClasses } from "./formkit.theme"
import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

const pro = createProPlugin('fk-7dff3553dc7', inputs);

const config: DefaultConfigOptions = {
  config: {
    rootClasses,
  },
  // List all used FormKit inputs that should be included in the bundle
  inputs: {
    form,
    text,
    select,
  },
  plugins: [pro],
  theme: 'genesis'
}

export default config