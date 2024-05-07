<FormKit type="form" #default="{ value }" :actions="false">
	<slot />
	<pre wrap>{{ value }}</pre>
</FormKit>

<script lang="ts">
export default {
	name: 'Form',
};
</script>
