<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		variant?: 'danger' | 'inverse' | 'primary' | 'secondary';
		width?: 'content' | 'full';
	};

	let {
		children,
		class: className = '',
		href,
		type = 'button',
		variant = 'primary',
		width = 'content'
	}: Props = $props();

	let classes = $derived(
		['button', `button--${variant}`, `button--${width}`, className].filter(Boolean).join(' ')
	);
</script>

{#if href}
	<!-- href intentionally supports external and mailto destinations as well as application URLs. -->
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
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
		height: 2rem;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 0;
		border-radius: 0.5rem;
		padding-inline: 1rem;
		cursor: pointer;
		line-height: 1;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.button--content {
		width: fit-content;
		max-width: 10rem;
	}

	.button--full {
		width: 100%;
	}

	.button--primary {
		background: var(--color-accent);
		color: var(--brand-color-white);
	}

	.button--secondary {
		background: var(--color-accent-secondary);
		color: var(--brand-color-white);
	}

	.button--danger {
		background: var(--color-danger);
		color: var(--brand-color-white);
	}

	.button--inverse {
		background: var(--brand-color-white);
		color: var(--brand-color-black);
	}

	.button:hover {
		filter: brightness(0.96);
	}

	@supports (corner-shape: squircle) {
		.button {
			border-radius: 1rem;
			corner-shape: squircle;
		}
	}

	.button:focus-visible {
		outline: 2px solid var(--color-foreground);
		outline-offset: 2px;
	}
</style>
