<script lang="ts">
	import { base } from '$app/paths';
	import BrandLogo from './BrandLogo.svelte';
</script>

<header class="site-header">
	<nav aria-label="Primary navigation">
		<a href={`${base}/`} aria-label="Cadence Engineer home">
			<BrandLogo alt="" />
		</a>
	</nav>
</header>

<style>
	.site-header {
		display: flex;
		min-height: 4rem;
		align-items: center;
		box-sizing: border-box;
		padding-inline: 1rem;
	}

	.site-header nav,
	.site-header a {
		display: flex;
		align-items: center;
	}

	.site-header a {
		color: inherit;
	}

	.site-header :global(.brand-logo) {
		--brand-logo-size: 2rem;
	}
</style>
