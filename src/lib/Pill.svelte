<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		tone?: 'inverse' | 'primary' | 'secondary';
	};

	let { children, tone = 'primary' }: Props = $props();
</script>

<span class={`pill pill--${tone}`}>
	{@render children()}
</span>

<style>
	.pill {
		display: inline-flex;
		width: fit-content;
		height: 2rem;
		flex: none;
		align-items: center;
		box-sizing: border-box;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: var(--font-weight-bold);
		line-height: 1;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.pill--primary {
		background: var(--color-accent-muted);
		color: var(--color-accent);
	}

	.pill--secondary {
		background: var(--color-accent-secondary-muted);
		color: var(--color-accent-secondary);
	}

	.pill--inverse {
		background: var(--color-inverse-muted);
		color: var(--brand-color-white);
	}

	@supports (corner-shape: squircle) {
		.pill {
			border-radius: 2rem;
			corner-shape: squircle;
		}
	}
</style>
