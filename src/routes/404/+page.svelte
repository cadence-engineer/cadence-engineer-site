<script lang="ts">
	import { resolve } from '$app/paths';
	import { PageSection } from '$lib';
</script>

<svelte:head>
	<title>Page not found | CadenceEngineer</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main>
	<PageSection title="404 Not Found">
		<p>This page couldn't be found. <a href={resolve('/')}>Go back to the homepage.</a></p>
	</PageSection>
</main>
