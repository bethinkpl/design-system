import { addons, types } from '@storybook/manager-api';
import { ChangeLocale } from './ChangeLocale';

addons.setConfig({
	sidebar: {
		showRoots: true,
	},
});

addons.register('change-locale-addon', () => {
	addons.add('change-locale-addon/tool', {
		type: types.TOOL,
		title: 'Change locale',
		match: ({ tabId, viewMode }) => !tabId && viewMode === 'story',
		render: ChangeLocale,
	});
});
