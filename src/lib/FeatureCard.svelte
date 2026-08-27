<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
		variant?: 'default' | 'inverse';
	};

	let { children, class: className = '', variant = 'default' }: Props = $props();
	let classes = $derived(
		['feature-card', `feature-card--${variant}`, className].filter(Boolean).join(' ')
	);
</script>

<div class={classes}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.feature-card {
		flex: 1 1 auto;
		width: 100%;
		border-radius: 3rem;
		box-shadow: var(--shadow-card);
	}

	.feature-card--default {
		background: var(--brand-color-white);
		color: var(--brand-color-black);
	}

	.feature-card--inverse {
		background: var(--brand-color-black);
		color: var(--brand-color-white);
	}

	@supports (corner-shape: squircle) {
		.feature-card {
			border-radius: 6rem;
			corner-shape: squircle;
		}
	}
</style>
