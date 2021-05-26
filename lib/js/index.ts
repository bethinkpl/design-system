export { default as BadgeScore } from './atoms/BadgeScore';
export * from './atoms/BadgeScore/BadgeScore.consts';
export { default as App } from './atoms/App';
export { default as Button } from './atoms/Button';
export * from './atoms/Button/Button.consts';
export { default as Icon } from './atoms/Icon';
export * from './atoms/Icon/Icon.consts';
export { default as IconButton } from './atoms/IconButton';
export * from './atoms/IconButton/IconButton.consts';
export { default as NumberInCircle } from './atoms/NumberInCircle';
export * from './atoms/NumberInCircle/NumberInCircle.consts';
export { default as TabItem } from './atoms/TabItem';
export { default as AccessStatus } from './molecules/AccessStatus.vue';

export {
	initialize as initializeIcons,
	initializeWithDomWatcher as initializeIconsWithDomWatcher,
} from './icons/fontawesome';
