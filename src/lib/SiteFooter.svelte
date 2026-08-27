<script lang="ts">
	import { base } from '$app/paths';
	import CopyrightLabel from './CopyrightLabel.svelte';

	const links = [
		{ href: '/contact/', label: 'Contact' },
		{ href: '/cookies/', label: 'Cookies' },
		{ href: '/privacy/', label: 'Privacy Policy' },
		{ href: '/terms/', label: 'Terms of Service' },
		{ href: '/imprint/', label: 'Imprint' }
	];
</script>

<footer class="site-footer">
	<nav aria-label="Legal and contact navigation">
		{#each links as link (link.href)}
			<!-- These base-prefixed static-page URLs are deployment-safe and cannot use route resolution. -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={`${base}${link.href}`}>{link.label}</a>
		{/each}
	</nav>

	<CopyrightLabel />
</footer>

<style>
	.site-footer {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

	.site-footer nav {
		display: flex;
		width: 100%;
		max-width: 75rem;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem 2rem;
		margin-inline: auto;
	}

	.site-footer a {
		color: inherit;
		text-decoration: none;
	}

	.site-footer a:hover {
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
</style>
