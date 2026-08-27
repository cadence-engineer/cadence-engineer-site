<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
	let classes = $derived(['section', className].filter(Boolean).join(' '));
</script>

<section class={classes}>
	{@render children()}
</section>

<style>
	.section {
		padding: 8rem 1rem;
	}
</style>
