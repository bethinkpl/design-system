<template>
	<div class="ds-gallery">
		<swiper
			class="ds-verticalSwiper"
			:modules="verticalModules"
			:space-between="0"
			navigation
			:pagination="{ clickable: true }"
			:scrollbar="{ draggable: true }"
			:keyboard="{
			  enabled: true,
			}"
			:direction="'vertical'"
			:hash-navigation="{ replaceState: true }"
			@swiper="onVerticalSwiper"
			@slideChange="onSlideChange"
			ref="verticalSwiper"
		>
			<swiper-slide v-for="(option, assetIndex) in gallery" :key="`asset-${assetIndex}`">
				<swiper
					class="ds-horizontalSwiper"
					:modules="horizontalModules"
					:space-between="0"
					navigation
					:pagination="{ clickable: true }"
					:scrollbar="{ draggable: true }"
					:keyboard="{
						enabled: true,
					}"
					@swiper="onHorizontalSwiper"
					@slideChange="onAssetSlideChange"
					@zoom-change="zoomChange"
					:zoom="{
						enabled: true,
						maxRatio: 10,
						limitToOriginalSize: true,
					}"
					:mousewheel="true"
					ref="horizontalSwiper"
				>
					<swiper-slide
						v-for="(option, variantIndex) in gallery[assetIndex]"
						:key="`variant-${variantIndex}`"
						:class="`swipper-${assetIndex}-${variantIndex}`"
					>
						<div
							class="ds-slide"
						>
							<img class="ds-slide__background" :src="gallery[assetIndex][variantIndex]" />
							<div class="swiper-zoom-container">
								<img class="ds-slide__image swiper-zoom-target" :src="gallery[assetIndex][variantIndex]" />
							</div>
						</div>
					</swiper-slide>
					<div class="ds-zoomMap" :class="{'-disabled': !isCustomZoomEnabled}">
						<img :src="activeImageUrl" class="ds-zoomMap__image">
						<div class="ds-zoomMap__marker"></div>
					</div>
				</swiper>
			</swiper-slide>
		</swiper>
	</div>
	<br />
	<ds-checkbox :is-selected="isKeyboardEnabled" label="Skróty klawiszowe" @update:is-selected="onIsKeyboardEnabledChange"/>
	<br />
	<ds-checkbox :is-selected="isZoomEnabled" label="Zoom (jednopoziomowy, podwójne kliknięcie + pinch on mobile)" @update:is-selected="onIsZoomEnabledChange"/>
	<br />
	<ds-checkbox :is-selected="isCustomZoomEnabled" label="Własny plugin zoom (bieda mapka + scroll)" @update:is-selected="onIsCustomZoomEnabledChange"/>
</template>

<style lang="scss">
.ds-gallery {
	height: 500px;
}

.swiper {
	width: 100%;
	height: 100%;
}

.ds-slide {
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
		z-index: -1;
		filter: brightness(1) blur(1.5rem);
		opacity: 0.2;
		user-select: none;
	}

	&__image {
		max-height: 100%;
		max-width: 100%;
		margin: auto;
		z-index: 1;
		user-select: none;
	}
}

.ds-zoomMap {
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 100;

	&.-disabled {
		display: none;
	}

	&__image {
		max-width: 200px;
		max-height: 200px;
	}

	&__marker {
		width: calc(100% - 6px);
		height: calc(100% - 6px);
		border: 3px solid red;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
}

// Hide Swiper buttons from Navigation plugin
// Navigation plugin needs to be enabled, due to zoomed image mouse events
.swiper-button-prev,
.swiper-button-next {
	display: none;
}
</style>

<script lang="ts">
import { Pagination, A11y, Keyboard, Zoom, Thumbs, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import DsCheckbox from '../Form/Checkbox/Checkbox.vue';
import gallery from './gallery.json';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/zoom';
import 'swiper/css/navigation';


const CustomScrollZoom = ({ swiper, extendParams, on, emit }) => {
	swiper.on('init', () => {
		extendParams({
			customZoom: {
				enabled: false,
			}
		});
		swiper.customZoom = {
			enabled: false
		};
		swiper.wrapperEl.addEventListener('wheel', (event) => {
			if (!swiper.customZoom.enabled) {
				return;
			}
			const targetEl = swiper.wrapperEl.querySelector('.swiper-slide-active > .ds-slide > .swiper-zoom-container > .swiper-zoom-target');
			const ratioChange = 0.05;
			const maxRatio = targetEl.naturalWidth / targetEl.offsetWidth;

			if (swiper.zoom.enabled && maxRatio > 1) {
				let ratio = 1;
				if (event.deltaY < 0) {
					ratio = Math.min(maxRatio, swiper.zoom.scale + ratioChange);
				} else {
					ratio = Math.max(1, swiper.zoom.scale - ratioChange);
				}
				swiper.zoom.in(ratio)
			}
		});
	});
	swiper.on('zoomChange', (swiper, ratio) => {
		if (!swiper.customZoom.enabled) {
			return;
		}
		const mapImage = swiper.wrapperEl.parentNode.querySelector('.ds-zoomMap__image');
		const mapMarker = swiper.wrapperEl.parentNode.querySelector('.ds-zoomMap__marker');

		const markerWidth = mapImage.offsetWidth / ratio;
		const markerHeight = mapImage.offsetHeight / ratio;

		// minus border size
		mapMarker.style.width = `${markerWidth - 6}px`;
		mapMarker.style.height = `${markerHeight - 6}px`;
	});
}


export default {
	name: 'ImageViewer',
	components: {
		DsCheckbox,
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			gallery: Object.freeze(gallery),
			activeAsset: 0,
			activeVariant: gallery.map(() => 0),
			isKeyboardEnabled: true,
			isZoomEnabled: true,
			isCustomZoomEnabled: false,
			horizontalModules: [ Pagination, Navigation, Thumbs, Keyboard, Zoom, CustomScrollZoom ],
			verticalModules: [ Pagination, Navigation, Keyboard ],
			verticalSwiper: null,
			horizontalSwipers: [],
		};
	},
	computed: {
		activeImageUrl() {
			return gallery[this.activeAsset][this.activeVariant[this.activeAsset]];
		},
	},
	methods: {
		onVerticalSwiper(swiper) {
			this.verticalSwiper = swiper;
		},
		onHorizontalSwiper(swiper) {
			this.horizontalSwipers.push(swiper);
		},
		onSlideChange(swiper) {
			this.activeAsset = swiper.activeIndex;
		},
		onAssetSlideChange(swiper) {
			this.activeVariant[this.activeAsset] = swiper.activeIndex;
		},
		zoomChange(swiper, zoom) {
			const allowMove = zoom === 1;

			this.verticalSwiper.allowSlideNext = allowMove;
			this.verticalSwiper.allowSlidePrev = allowMove;
			this.horizontalSwipers.forEach((swiper) => {
				swiper.allowSlideNext = allowMove;
				swiper.allowSlidePrev = allowMove;
			});
		},
		onIsKeyboardEnabledChange() {
			this.isKeyboardEnabled = !this.isKeyboardEnabled;
			const method = this.isKeyboardEnabled ? 'enable' : 'disable';

			this.verticalSwiper.keyboard[method]();
			this.horizontalSwipers.forEach((swiper) => {
				swiper.keyboard[method]();
			});
		},
		onIsZoomEnabledChange() {
			this.isZoomEnabled = !this.isZoomEnabled;
			const method = this.isZoomEnabled ? 'enable' : 'disable';

			this.horizontalSwipers.forEach((swiper) => {
				swiper.zoom[method]();
			});
		},
		onIsCustomZoomEnabledChange() {
			this.isCustomZoomEnabled = !this.isCustomZoomEnabled;

			this.horizontalSwipers.forEach((swiper) => {
				swiper.customZoom.enabled = this.isCustomZoomEnabled;
			});
		},
	}
};
</script>
