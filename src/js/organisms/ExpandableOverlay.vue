<template>
	<div class="o-expandableOverlay" :class="{'o-expandableOverlay__expanded': isExpanded}">
		<div :class="{'o-expandableOverlay__container': isExpanded}">
			<div class="o-expandableOverlay__bar">
				<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
				<a class="a-button -text" @click.prevent="toggleIsExpanded">
					<span v-if="isExpanded" class="o-expandableOverlay__bar__text">Zwiń</span>
					<span v-else class="o-expandableOverlay__bar__text">Czytaj więcej</span>
					<i class="wnl-icon fa" :class="isExpanded ? 'fa-angle-up' : 'fa-angle-down'" />
				</a>
			</div>
			<template v-if="isExpanded">
				<div class="o-expandableOverlay__body">
					<slot name="body" :collapse="collapse" />
				</div>
				<div class="o-expandableOverlay__footer">
					<slot name="footer" />
				</div>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';
	@import 'resources/assets/styles/styleguide/settings/colors';

	.o-expandableOverlay {
		$bar-height: 56px;
		z-index: $z-index-critical-info-overlay;
		background-color: $color-athens-grey;

		&__expanded {
			overflow-x: scroll;
			position: fixed;
			background-image: linear-gradient(#E6E8EE, white);
			top: $navbar-height;
			left: 0;
			right: 0;
			bottom: 0;
		}

		&__container {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
		}

		&__bar {
			display: flex;
			flex: 0 57px;
			justify-content: flex-end;
			height: $bar-height;
			align-items: center;
			text-align: center;
			width: 100%;

			&__text {
				@media all and (max-width: 640px) {
					display: none;
				}
			}

			&__message {
				position: absolute;
				width: 100%;
				color: #0C1726;
				font-family: Lato, monospace;
				font-size: 16px;
				letter-spacing: 0;
				line-height: 24px;
			}
		}

		&__body {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-bottom: 51px;
		}

		&__footer {
			width: 100%;
		}
	}
</style>

<script>

export default {
	name: 'ExpandableOverlay',
	props: {
		shortMessage: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isExpanded: true,
		};
	},
	methods: {
		collapse() {
			this.isExpanded = false;
		},
		toggleIsExpanded() {
			this.isExpanded = !this.isExpanded;
		},
	}
};
</script>
