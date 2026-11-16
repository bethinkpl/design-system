import { afterEach, describe, expect, it } from 'vitest';
import { defineComponent, h, nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import {
	FloatingPanelTarget,
	provideFloatingPanelTarget,
	useFloatingPanelTarget,
} from './floatingPanelTarget';

type Resolved = ReturnType<typeof useFloatingPanelTarget>;

const setup = ({
	providers = [],
	teleportTo = null,
	isTeleported,
}: {
	providers?: Array<() => FloatingPanelTarget>;
	teleportTo?: FloatingPanelTarget;
	isTeleported?: () => boolean;
} = {}) => {
	let resolved: Resolved | undefined;

	// eslint-disable-next-line vue/one-component-per-file
	const Consumer = defineComponent({
		name: 'Consumer',
		setup() {
			resolved = useFloatingPanelTarget(() => teleportTo, isTeleported);
			return () => null;
		},
	});

	// Each provider wraps the next one, so the last provider is the nearest to the consumer.
	const tree = providers.reduceRight<ReturnType<typeof defineComponent>>(
		(child, target) =>
			// eslint-disable-next-line vue/one-component-per-file
			defineComponent({
				name: 'Provider',
				setup() {
					provideFloatingPanelTarget(target);
					return () => h(child);
				},
			}),
		Consumer,
	);

	mount(tree);

	return resolved as Resolved;
};

const createElement = (id?: string) => {
	const element = document.createElement('div');
	if (id) element.id = id;
	document.body.appendChild(element);
	return element;
};

describe('useFloatingPanelTarget', () => {
	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('should default to body with the viewport as the boundary', () => {
		const { to, getCollisionBoundary } = setup();

		expect(to.value).toBe('body');
		expect(getCollisionBoundary()).toBeNull();
	});

	it('should use a provided element as the target and the boundary', () => {
		const element = createElement();

		const { to, getCollisionBoundary } = setup({ providers: [() => element] });

		expect(to.value).toBe(element);
		expect(getCollisionBoundary()).toBe(element);
	});

	it('should use the nearest provider', () => {
		const outer = createElement();
		const inner = createElement();

		const { to } = setup({ providers: [() => outer, () => inner] });

		expect(to.value).toBe(inner);
	});

	it('should prefer the teleportTo prop over a provider', () => {
		const provided = createElement();
		const own = createElement();

		const { to, getCollisionBoundary } = setup({
			providers: [() => provided],
			teleportTo: own,
		});

		expect(to.value).toBe(own);
		expect(getCollisionBoundary()).toBe(own);
	});

	it('should fall back to body while the provided target is null and follow it once set', async () => {
		const target = ref<HTMLElement | null>(null);

		const { to, getCollisionBoundary } = setup({ providers: [() => target.value] });

		expect(to.value).toBe('body');
		expect(getCollisionBoundary()).toBeNull();

		const element = createElement();
		target.value = element;
		await nextTick();

		expect(to.value).toBe(element);
		expect(getCollisionBoundary()).toBe(element);
	});

	it('should resolve a selector target to its element for the boundary', () => {
		const element = createElement('container');

		const { to, getCollisionBoundary } = setup({ teleportTo: '#container' });

		expect(to.value).toBe('#container');
		expect(getCollisionBoundary()).toBe(element);
	});

	it.each(['body', () => document.body])(
		'should keep the viewport as the boundary when the target is body: %s',
		(target) => {
			const { getCollisionBoundary } = setup({
				teleportTo: typeof target === 'function' ? target() : target,
			});

			expect(getCollisionBoundary()).toBeNull();
		},
	);

	it('should keep the viewport as the boundary when the panel renders in place', () => {
		const element = createElement();

		const { getCollisionBoundary } = setup({
			providers: [() => element],
			isTeleported: () => false,
		});

		expect(getCollisionBoundary()).toBeNull();
	});
});
