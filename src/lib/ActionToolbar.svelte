<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		label: string;
	};

	let { children, label }: Props = $props();
</script>

<div class="action-toolbar" role="toolbar" aria-label={label}>
	{@render children()}
</div>

<style>
	.action-toolbar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
