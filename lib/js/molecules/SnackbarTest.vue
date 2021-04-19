<template>
	<v-snackbar
		v-model='snackbarVisible'
		class='snackbar'
		:timeout='-1'
		right
		bottom
		light
		max-width='324'
		content-class='snackbar__content'
	>
		<div
			v-if='!expanded'
			class='snackbar__smallContainer'>
			<div
				class='snackbar__timer'
				:class='{"-danger": timeRunningOut}'
			>
				{{ timer }}
			</div>
		</div>

		<div v-else>
			<div class='snackbar__navigationRight'>
				<wnl-button
					:type='BUTTON_TYPES.TEXT'
					:size='BUTTON_SIZES.SMALL'
					:icon-right='ICONS.FA_CHEVRON_DOWN_SOLID'
					@click.native='expanded = false'
				>
					Zwiń
				</wnl-button>
			</div>

			<div class='snackbar__container'>
				<div class='snackbar__title'>
					Wybacz, że przeszkadzamy…
				</div>
				<div class='snackbar__subtitle'>
					Wprowadziliśmy ważną aktualizację platformy.
				</div>
				<div class='snackbar__description'>
					Platforma może nie działać poprawnie, więc musimy w ciągu 1 minuty doprowadzić do odświeżenia
					strony.
				</div>
				<div class='snackbar__stopper'>
					<div class='snackbar__icon'>
						<img src='https://i.imgur.com/B7nmxJu.png' style='max-width: 94px;' alt='xx' />
					</div>
					<div class='snackbar__timer -bold snackbar__timer--expanded'
						 :class='{"-danger": timeRunningOut}'>{{ timer }}
					</div>
				</div>
				<div class='snackbar__additionalText'>
					Możesz dokończyć to, co robisz, lub odświeżyć stronę już teraz.
				</div>
				<div class='snackbar__button'>
					<wnl-button>
						Odśwież teraz
					</wnl-button>
				</div>
			</div>
		</div>


		<template v-if='!expanded' #action>
			<div class='snackbar__navigation'>
				<wnl-button
					:type='BUTTON_TYPES.TEXT'
					:size='BUTTON_SIZES.SMALL'
				>
					Odśwież teraz
				</wnl-button>

				<wnl-icon-button
					:size='BUTTON_SIZES.SMALL'
					:icon='ICONS.FA_CHEVRON_UP_SOLID'
					@click.native='expanded = true'
				/>
			</div>
		</template>
	</v-snackbar>
</template>

<style lang='scss' scoped>
@import '../../styles/settings/colors';
@import '../../styles/settings/spacings';
@import '../../styles/settings/typography';

::v-deep .snackbar__content {
	padding: 0 !important;
}

.snackbar {
	&__navigation {
		display: flex;
	}

	&__container {
		text-align: center;
		padding: $space-s $space-s $space-l $space-s;
	}

	&__smallContainer {
		padding: $space-xs $space-m;
	}

	&__title {
		@include headlineS();

		margin-bottom: $space-xxs;
	}

	&__subtitle {
		@include textM();

		margin-bottom: $space-s;
	}

	&__additionalText {
		@include headlineXS();

		margin-bottom: $space-m;
	}

	&__description {
		@include textS();

		color: $color-storm-gray;
		margin-bottom: $space-m;
	}

	&__icon {
		width: 100px;
		height: 100px;
		margin: 0 auto;
	}

	&__stopper {
		margin-bottom: $space-m;
		text-align: center;
	}

	&__navigationRight {
		text-align: right;
		margin-top: $space-xxs;
		margin-right: $space-xxs;
	}

	&__timer {
		@include textLight();

		font-size: 32px;
		line-height: 42px;
		color: $color-storm-gray;

		&--expanded {
			margin-top: $space-xxs;
		}
	}

	.-bold {
		@include textBold();
	}

	.-danger {
		color: $color-danger;
	}
}
</style>

<script>
import VSnackbar from 'vuetify/lib/components/VSnackbar';
import WnlButton, { BUTTON_SIZES, BUTTON_TYPES } from '../atoms/Button';
import WnlIconButton, { ICONS } from '../atoms/IconButton';

export default {
	name: 'SnackbarTest',
	components: { VSnackbar, WnlButton, WnlIconButton },
	props: {
		visible: {
			type: Boolean,
			default: null,
		},
		secondsLeft: {
			type: Number,
			default: 60,
		},
	},
	data() {
		return {
			snackbar: null,
			expanded: false,
		};
	},
	computed: {
		timeRunningOut() {
			return this.secondsLeft < 60;
		},
		timer() {
			return new Date(this.secondsLeft * 1000).toISOString().substr(14, 5);
		},
		snackbarVisible() {
			return this.snackbar || this.visible;
		},
	},
	created() {
		this.ICONS = ICONS;
		this.BUTTON_SIZES = BUTTON_SIZES;
		this.BUTTON_TYPES = BUTTON_TYPES;
	},
};
</script>
