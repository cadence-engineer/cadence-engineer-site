<script lang="ts">
	import DevelopmentBanner from '$lib/DevelopmentBanner.svelte';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';
</script>

<svelte:head>
	<title>Cookies | Cadence Engineer</title>
	<meta name="description" content="Cadence Engineer cookie information." />
</svelte:head>

<main class="site-page">
	<DevelopmentBanner />
	<SiteHeader />

	<section class="site-content-section" aria-labelledby="cookies-title">
		<h1 id="cookies-title">Cookies</h1>

		<div class="site-section-copy">
			<p>
				We only use cookies that are needed to run this service. They keep you signed in and help
				keep your account secure while you use the app.
			</p>
			<p>We do not use cookies for ads, analytics, or tracking you across other websites.</p>
			<p>We also do not collect personal profile information through cookies.</p>
		</div>
	</section>

	<SiteFooter />
</main>
