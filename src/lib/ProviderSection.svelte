<script lang="ts">
	import Section from './Section.svelte';
	import LogoGrid from './LogoGrid.svelte';

	type Provider = {
		logo: string;
		name: string;
	};

	type Props = {
		description: string;
		providers: Provider[];
		title: string;
	};

	let { description, providers, title }: Props = $props();
	let titleID = $derived(`${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`);
</script>

<Section>
	<div class="provider-section" aria-labelledby={titleID}>
		<header>
			<h2 class="type-section-title" id={titleID}>{title}</h2>
			<p class="type-body">{description}</p>
		</header>

		<LogoGrid logos={providers.map((provider) => ({ alt: provider.name, src: provider.logo }))} />
	</div>
</Section>

<style>
	.provider-section {
		display: grid;
		max-width: 75rem;
		margin-inline: auto;
		gap: 6rem;
	}

	.provider-section header {
		display: grid;
		max-width: 52rem;
		margin-inline: auto;
		gap: 1rem;
		text-align: center;
	}

	.provider-section h2,
	.provider-section p {
		margin: 0;
	}

	.provider-section p {
		line-height: 1.4;
	}

	@media (max-width: 40rem) {
		.provider-section {
			gap: 4rem;
		}
	}
</style>
