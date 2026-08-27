<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from './Section.svelte';

	type Props = {
		children: Snippet;
		title: string;
	};

	let { children, title }: Props = $props();
</script>

<Section>
	<div class="page-section">
		<h1>{title}</h1>

		<div class="page-section__body">
			{@render children()}
		</div>
	</div>
</Section>

<style>
	.page-section {
		display: grid;
		max-width: 75rem;
		align-content: start;
		margin-inline: auto;
		padding-top: 3.5rem;
		gap: 2rem;
	}

	.page-section h1,
	.page-section__body :global(p) {
		margin: 0;
	}

	.page-section h1 {
		font-size: 2rem;
	}

	.page-section__body {
		display: grid;
		gap: 1rem;
	}

	.page-section__body :global(a) {
		color: inherit;
	}
</style>
