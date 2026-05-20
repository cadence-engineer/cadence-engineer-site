<script lang="ts">
	import DevelopmentBanner from '$lib/DevelopmentBanner.svelte';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';
</script>

<svelte:head>
	<title>Terms of Service | Cadence Engineer</title>
	<meta name="description" content="Cadence Engineer terms of service." />
</svelte:head>

<main class="site-page">
	<DevelopmentBanner />
	<SiteHeader />

	<section class="site-content-section" aria-labelledby="terms-title">
		<h1 id="terms-title">Terms of Service</h1>

		<div class="site-section-copy">
			<p>The terms of service for this website have not been defined yet.</p>
			<p>This website is currently in development and is not intended for public use.</p>
		</div>
	</section>

	<SiteFooter />
</main>
