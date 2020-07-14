<template>
	<div class="o-expandableOverlay">
		<div class="o-expandableOverlay__bar">
			<div v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</div>
			<div class="o-expandableOverlay__bar__showMore">
				<a class="a-button -text" @click.prevent="toggleIsExpanded">
					<span v-if="isExpanded">Zwiń</span>
					<span v-else>Czytaj więcej</span>
					<i class="wnl-icon fa fa-angle-down FIXME" />
				</a>
			</div>
		</div>
		<div v-if="isExpanded" class="o-expandableOverlay__screen">
			<div class="o-expandableOverlay__screen__body">
				<slot />
			</div>

			<div class="o-expandableOverlay__screen__footer">
				<div class="o-expandableOverlay__screen__footer__message">
					W razie problemów napisz do nas na Messengerze <br> lub wyślij maila na adres <a>FIXME</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';

	.o-expandableOverlay {
		$bar-height: 56px;

		&__bar {
			display: flex;
			flex: 0 57px;
			width: 100%;
			justify-content: flex-end;
			height: $bar-height;
			background-color: #E6E8EE;
			box-shadow: 0 8px 16px 0 rgba(12, 23, 38, 0.15);

			&__message {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 45%;
				color: #0C1726;
				font-family: Lato, monospace;
				font-size: 16px;
				letter-spacing: 0;
				line-height: 24px;
				text-align: center;
			}

			&__showMore {
				width: 30%;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.a-button {
					margin-right: 10%;
					height: 32px;
					width: 160px;
				}
			}
		}

		&__screen {
			align-items: center;
			background-color: #E6E8EE;
			bottom: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			left: 0;
			position: fixed;
			right: 0;
			top: $navbar-height + $bar-height;
			// FIXME it covers top nav dropdowns
			z-index: $z-index-overlay;

			&__body {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
			}

			&__footer {
				display: flex;
				height: 57px;
				width: 100%;
				text-align: center;
				justify-content: flex-end;
				align-items: center;

				&__message {
					margin-right: 102px;
					margin-bottom: 23px;
				}
			}
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
		toggleIsExpanded() {
			this.isExpanded = !this.isExpanded;
		},
	}
};
</script>
