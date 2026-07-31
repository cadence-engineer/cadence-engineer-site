<script lang="ts">
	import { base } from '$app/paths';

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
		{#each links as link}
			<a href={`${base}${link.href}`}>{link.label}</a>
		{/each}
	</nav>

	<p>©&nbsp;2026 Cadence Engineer</p>
</footer>

<style>
	.site-footer {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

	.site-footer nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem 2rem;
	}

	.site-footer a {
		color: inherit;
		text-decoration: none;
	}

	.site-footer a:hover {
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.site-footer p {
		margin: 0;
	}
</style>
