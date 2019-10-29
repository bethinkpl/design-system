 <template>
	<span class="a-button" :class="{'-text': text, '-small': small, '-loading': loading, '-roundedCorners': roundedCorners}">
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		text: {
			type: Boolean,
			default: false
		},
		small: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false,
		},
		roundedCorners: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
