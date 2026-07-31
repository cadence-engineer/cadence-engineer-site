<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<p class="ai-message">
	{@render children()}
</p>

<style>
	.ai-message {
		width: fit-content;
		max-width: calc(100% - 2rem);
		margin: 0;
		margin-right: 2rem;
		border-radius: 1rem;
		background: transparent;
		color: var(--brand-color-black);
		font-family: var(--font-generated);
		font-weight: var(--font-weight-generated-regular);
	}

	@supports (corner-shape: squircle) {
		.ai-message {
			border-radius: 2rem;
			corner-shape: squircle;
		}
	}
</style>
