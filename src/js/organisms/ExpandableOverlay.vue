<template>
	<div class="o-expandableOverlay" :class="{'o-expandableOverlay__expanded': isExpanded}">
		<div class="o-expandableOverlay__bar" :class="{'o-expandableOverlay__fixed_bar': isExpanded}">
			<div></div>
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
			<a class="a-button -text" @click.prevent="toggleIsExpanded">
				<template v-if="isMobile">
					<span v-if="isExpanded">Zwiń</span>
					<span v-else>Czytaj więcej</span>
				</template>
				<i class="wnl-icon fa" :class="{ 'fa-angle-up': !isExpanded, 'fa-angle-down': isExpanded }" />
			</a>
		</div>
		<div v-if="isExpanded" class="o-expandableOverlay__screen">
			<div class="o-expandableOverlay__screen__body">
				<slot />
			</div>

			<div class="o-expandableOverlay__screen__footer">
				<div v-if="isMobile" class="o-expandableOverlay__screen__footer__message">
					W razie problemów napisz do nas na Messengerze <br> lub wyślij maila na adres <a :href="mailtoContactEmail">{{contactEmail}}</a>
				</div>
				<img
					class="o-expandableOverlay__screen__footer__messenger margin vertical"
					:src="messengerIconSrc"
					alt="Messenger icon"
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';

	.o-expandableOverlay {
		$bar-height: 56px;
		z-index: $z-index-critical-info-overlay;

		&__expanded {
			height: 100%;
		}
		&__bar {
			display: flex;
			flex: 0 57px;
			justify-content: space-between;
			height: $bar-height;
			background-color: #E6E8EE;
			box-shadow: 0 8px 16px 0 rgba(12, 23, 38, 0.15);
			align-items: center;
			text-align: center;


			&__message {
				position: fixed;
				width: 100%;
				color: #0C1726;
				font-family: Lato, monospace;
				font-size: 16px;
				letter-spacing: 0;
				line-height: 24px;
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
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: flex-end;
			background-image: linear-gradient(#E6E8EE, white);
			position: relative;
			top: $navbar-height;
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
					margin-bottom: 23px;
				}

				&__messenger {
					margin-left: 23px;
					margin-right: 24px;
					height: 46px;
					width: 46px;
				}
			}
		}
	}

</style>

<script>
import { getSharedImageUrl } from 'js/utils/env';
import { mapGetters } from 'vuex';

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
	computed: {
		messengerIconSrc() {
			return this.getSharedImageUrl('messenger-icon.svg');
		},
		...mapGetters('ui', ['isMobile']),
	},
	methods: {
		toggleIsExpanded() {
			this.isExpanded = !this.isExpanded;
		},
		getSharedImageUrl,
	}
};
</script>
