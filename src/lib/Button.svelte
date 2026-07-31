<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
	};

	let { children, class: className = '', href, type = 'button' }: Props = $props();

	let classes = $derived(['button', className].filter(Boolean).join(' '));
</script>

{#if href}
	<a class={classes} {href}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {type}>
		{@render children()}
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		width: fit-content;
		height: 2rem;
		max-width: 10rem;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 0;
		padding-inline: 1rem;
		background: var(--color-accent);
		color: var(--brand-color-white);
		cursor: pointer;
		line-height: 1;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.button:focus-visible {
		outline: 2px solid var(--color-foreground);
		outline-offset: 2px;
	}
</style>
