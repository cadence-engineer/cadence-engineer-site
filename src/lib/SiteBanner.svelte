<script lang="ts">
	type Props = {
		message?: string;
	};

	let {
		message = 'CadenceEngineer currently in development and is not intended for public use.'
	}: Props = $props();
</script>

<aside class="site-banner" aria-label="Site announcement">
	{message}
</aside>

<style>
	.site-banner {
		display: flex;
		min-height: 3rem;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 1rem;
		background: var(--color-accent);
		color: var(--brand-color-white);
		text-align: center;
	}
</style>
