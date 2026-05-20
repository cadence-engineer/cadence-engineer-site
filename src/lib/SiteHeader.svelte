<script lang="ts">
	import { resolve } from '$app/paths';
	import cadenceEngineerLogo from '$lib/assets/cadence-engineer-logo.svg';

	const appAuthUrl = 'https://app.cadence.engineer/auth';
</script>

<header class="site-header" aria-label="Site header">
	<a class="brand-link" href={resolve('/')} aria-label="Cadence Engineer home">
		<img src={cadenceEngineerLogo} alt="" aria-hidden="true" />
	</a>

	<a class="button button-primary sign-in-button" href={appAuthUrl}>Sign In</a>
</header>

<style>
	.site-header {
		display: flex;
		min-height: 128px;
		align-items: center;
		justify-content: space-between;
		padding: 32px var(--site-gutter, 42px);
	}

	.brand-link {
		display: inline-flex;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
	}

	.brand-link img {
		display: block;
		width: 40px;
		height: 40px;
	}

	.button {
		display: inline-flex;
		min-height: 40px;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-control);
		font-size: 16px;
		font-weight: var(--font-weight-base);
		line-height: 1;
		padding: 0 18px;
		transition:
			background-color 140ms ease,
			color 140ms ease,
			transform 140ms ease;
	}

	.button:hover {
		transform: translateY(-1px);
	}

	.button-primary {
		background: var(--color-accent);
		color: var(--color-text-inverse);
	}

	.button-primary:hover {
		background: #e73553;
	}

	.sign-in-button {
		min-width: 92px;
	}

	@media (max-width: 900px) {
		.site-header {
			min-height: 104px;
			padding-block: 24px;
		}
	}

	@media (max-width: 560px) {
		.site-header {
			min-height: 86px;
			padding-block: 20px;
		}

		.brand-link,
		.brand-link img {
			width: 40px;
			height: 40px;
		}

		.button {
			min-height: 40px;
			padding: 0 18px;
		}

		.sign-in-button {
			min-width: 92px;
		}
	}
</style>
