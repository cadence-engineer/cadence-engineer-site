<script lang="ts">
	import { base } from '$app/paths';
	import BrandLogo from './BrandLogo.svelte';
	import Button from './Button.svelte';
</script>

<header class="site-header">
	<nav aria-label="Primary navigation">
		<a class="home-link" href={`${base}/`} aria-label="Cadence Engineer home">
			<BrandLogo alt="" />
		</a>

		<Button href="https://app.cadence.engineer/auth">Sign in</Button>
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
	.site-header .home-link {
		display: flex;
		align-items: center;
	}

	.site-header nav {
		width: 100%;
		max-width: 75rem;
		margin-inline: auto;
		justify-content: space-between;
		gap: 1rem;
	}

	.site-header .home-link {
		color: inherit;
	}

	.site-header :global(.brand-logo) {
		--brand-logo-size: 2rem;
	}
</style>
