<script lang="ts">
	import type { Snippet } from 'svelte';
	import FeatureCard from './FeatureCard.svelte';
	import Section from './Section.svelte';

	type Props = {
		caption: string;
		children?: Snippet;
		description: string;
		feature: string;
	};

	let { caption, children, description, feature }: Props = $props();
</script>

<Section>
	<div class="feature-showcase">
		<div class="feature-showcase__description">
			<header>
				<h2>{feature}</h2>
				<h3>{caption}</h3>
			</header>

			<p>{description}</p>
		</div>

		<div class="feature-showcase__card">
			<FeatureCard>
				{#if children}
					{@render children()}
				{/if}
			</FeatureCard>
		</div>
	</div>
</Section>

<style>
	.feature-showcase {
		display: flex;
		max-width: 75rem;
		margin-inline: auto;
		gap: 2rem;
	}

	.feature-showcase__description,
	.feature-showcase__card {
		flex: 1 1 0;
		min-width: 0;
	}

	.feature-showcase__description {
		display: grid;
		align-content: center;
		gap: 2rem;
	}

	.feature-showcase__description header {
		display: grid;
		gap: 2rem;
	}

	.feature-showcase__description h2,
	.feature-showcase__description h3,
	.feature-showcase__description p {
		margin: 0;
	}

	.feature-showcase__description h2 {
		font-size: 1rem;
	}

	.feature-showcase__description h3 {
		font-size: 2rem;
	}

	.feature-showcase__card {
		display: flex;
	}
</style>
