<script lang="ts">
	import Button from './Button.svelte';
	import FeatureCard from './FeatureCard.svelte';
	import Pill from './Pill.svelte';

	type PricingSection = {
		items: string[];
		label: string;
	};

	type Props = {
		actionHref: string;
		actionLabel: string;
		name: string;
		period?: string;
		price: string;
		sections: PricingSection[];
		tone?: 'basic' | 'enterprise' | 'premium';
	};

	let { actionHref, actionLabel, name, period, price, sections, tone = 'basic' }: Props = $props();
	let buttonVariant: 'inverse' | 'primary' | 'secondary' = $derived(
		tone === 'premium' ? 'secondary' : tone === 'enterprise' ? 'inverse' : 'primary'
	);
	let cardVariant: 'default' | 'inverse' = $derived(tone === 'enterprise' ? 'inverse' : 'default');
	let pillTone: 'inverse' | 'primary' | 'secondary' = $derived(
		tone === 'premium' ? 'secondary' : tone === 'enterprise' ? 'inverse' : 'primary'
	);
</script>

<FeatureCard class="pricing-card" variant={cardVariant}>
	<article class="pricing-card__content">
		<header>
			<Pill tone={pillTone}>{name}</Pill>
			<p class="price">
				<strong class="type-display">{price}</strong>
				{#if period}<span>{period}</span>{/if}
			</p>
			<Button href={actionHref} variant={buttonVariant} width="full">{actionLabel}</Button>
		</header>

		<div class="pricing-card__details">
			{#each sections as section (section.label)}
				<section aria-label={section.label}>
					<h4 class="visually-hidden">{section.label}</h4>
					{#each section.items as item (item)}
						<p>{item}</p>
					{/each}
				</section>
			{/each}
		</div>
	</article>
</FeatureCard>

<style>
	:global(.feature-card.pricing-card) {
		min-width: 0;
		height: fit-content;
	}

	.pricing-card__content,
	.pricing-card__content header,
	.pricing-card__details,
	.pricing-card__details section {
		display: flex;
		flex-direction: column;
	}

	.pricing-card__content {
		box-sizing: border-box;
		padding: 2rem;
		gap: 3rem;
	}

	.pricing-card__content header {
		align-items: flex-start;
		gap: 3rem;
	}

	.price,
	.pricing-card__details p {
		margin: 0;
	}

	.price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.price span {
		font-weight: var(--font-weight-interface-regular);
	}

	.pricing-card__details {
		gap: 3rem;
	}

	.pricing-card__details section {
		gap: 0.5rem;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
