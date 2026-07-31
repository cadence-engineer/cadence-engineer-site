<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<p class="user-message">
	{@render children()}
</p>

<style>
	.user-message {
		width: fit-content;
		max-width: calc(100% - 2rem);
		margin: 0;
		margin-left: 2rem;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		background: var(--color-accent);
		color: var(--brand-color-white);
	}

	@supports (corner-shape: squircle) {
		.user-message {
			border-radius: 2rem;
			corner-shape: squircle;
		}
	}
</style>
