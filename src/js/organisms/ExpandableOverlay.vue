<template>
	<div class="o-expandableOverlay">
		<div class="o-expandableOverlay__bar" :class="{'o-expandableOverlay__fixed_bar': isExpanded}">
			<div v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</div>
			<div class="o-expandableOverlay__bar__showMore">
				<a class="a-button -text" @click.prevent="toggleIsExpanded">
					<span v-if="isExpanded">Zwiń</span>
					<span v-else>Czytaj więcej</span>
					<i class="wnl-icon fa" :class="{ 'fa-angle-up': !isExpanded, 'fa-angle-down': isExpanded }" />
				</a>
			</div>
		</div>
		<div v-if="isExpanded" class="o-expandableOverlay__screen">
			<div class="o-expandableOverlay__screen__body">
				<slot />
			</div>

			<div class="o-expandableOverlay__screen__footer">
				<div class="o-expandableOverlay__screen__footer__message">
					W razie problemów napisz do nas na Messengerze <br> lub wyślij maila na adres <a :href="mailtoContactEmail">{{contactEmail}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';

	.o-expandableOverlay {
		$bar-height: 56px;
		z-index: $z-index-critical-info-overlay;

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

		&__fixed_bar {
			position: fixed;
			top: $navbar-height;
			bottom: 0;
			left: 0;
			right: 0;
		}

		&__screen {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-image: linear-gradient(#E6E8EE, white);
			position: fixed;
			top: $navbar-height + $bar-height;
			bottom: 0;
			left: 0;
			right: 0;

			&__body {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;

			}

			&__footer {
				display: flex;
				text-align: center;
				justify-content: flex-end;
				align-items: center;
				height: 57px;
				width: 100%;

				&__message {
					margin-left: 100px;
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
			contactEmail: $wnl.contactInfo.email,
			mailtoContactEmail: 'mailto:' + $wnl.contactInfo.email,
		};
	},
	methods: {
		toggleIsExpanded() {
			this.isExpanded = !this.isExpanded;
		},
	}
};
</script>
