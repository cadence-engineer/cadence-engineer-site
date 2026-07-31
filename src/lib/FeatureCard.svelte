<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
	let classes = $derived(['feature-card', className].filter(Boolean).join(' '));
</script>

<div class={classes}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.feature-card {
		width: 100%;
		border-radius: 3rem;
		background: var(--brand-color-white);
		box-shadow: 0 0 1rem rgb(0 0 0 / 10%);
	}

	@supports (corner-shape: squircle) {
		.feature-card {
			border-radius: 6rem;
			corner-shape: squircle;
		}
	}
</style>
