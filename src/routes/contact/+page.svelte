<script lang="ts">
	import DevelopmentBanner from '$lib/DevelopmentBanner.svelte';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';
</script>

<svelte:head>
	<title>Contact | Cadence Engineer</title>
	<meta name="description" content="Contact Cadence Engineer." />
</svelte:head>

<main class="site-page">
	<DevelopmentBanner />
	<SiteHeader />

	<section class="site-content-section" aria-labelledby="contact-title">
		<h1 id="contact-title">Contact</h1>

		<address class="site-address">
			<strong>Dominik Strasser</strong>
			<a href="mailto:dominik.strasser@cadence.engineer">dominik.strasser@cadence.engineer</a>
			<span>Rechte Wienzeile 25-27/5/2</span>
			<span>Vienna 1040</span>
			<span>Austria</span>
		</address>
	</section>

	<SiteFooter />
</main>
