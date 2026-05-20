<script lang="ts">
	import { resolve } from '$app/paths';

	const contactHref = resolve('/contact');
</script>

<footer class="site-footer">
	<nav class="footer-links" aria-label="Footer links">
		<a href={contactHref}>Contact</a>
		<a href={resolve('/cookies')}>Cookies</a>
		<a href={resolve('/privacy')}>Privacy Policy</a>
		<a href={resolve('/terms')}>Terms of Service</a>
	</nav>

	<p>Cadence Engineer 2026</p>
</footer>

<style>
	.site-footer {
		display: flex;
		min-height: 92px;
		align-items: stretch;
		flex-direction: column;
		justify-content: center;
		gap: 28px;
		padding: 24px var(--site-gutter, 42px) 36px;
		color: var(--color-text);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-base);
		line-height: 1.2;
	}

	.site-footer p {
		align-self: flex-start;
		margin: 0;
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 42px;
		width: 100%;
	}

	.footer-links a:hover {
		color: var(--color-accent);
	}

	@media (max-width: 900px) {
		.site-footer {
			padding: 28px var(--site-gutter, 28px);
		}

		.footer-links {
			gap: 18px 30px;
		}
	}

	@media (max-width: 560px) {
		.site-footer {
			padding: 24px var(--site-gutter, 18px) 30px;
			font-size: 16px;
		}

		.footer-links {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 16px;
		}
	}
</style>
