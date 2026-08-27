<script lang="ts">
	import { SiteBanner, SiteFooter, SiteHeader } from '$lib';
	import './layout.css';

	let { children } = $props();
</script>

<SiteBanner />
<SiteHeader />
{@render children()}
<SiteFooter />
