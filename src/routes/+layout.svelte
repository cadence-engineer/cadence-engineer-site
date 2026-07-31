<script lang="ts">
	import icon from '$lib/assets/brand/cadence-engineer-icon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={icon} type="image/svg+xml" />
</svelte:head>

{@render children()}
