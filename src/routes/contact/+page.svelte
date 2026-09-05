<script lang="ts">
	import { onMount } from 'svelte';
	import { ContactForm, PageSection } from '$lib';

	type Topic = 'test_access' | 'question' | 'other';

	let topic = $state<Topic>('test_access');

	// The page is prerendered, so the query string is only available in the browser.
	onMount(() => {
		const requested = new URLSearchParams(window.location.search).get('topic');
		if (requested === 'test_access' || requested === 'question' || requested === 'other') {
			topic = requested;
		}
	});
</script>

<svelte:head>
	<title>Contact | CadenceEngineer</title>
</svelte:head>

<main>
	<PageSection title="Contact">
		<p>
			CadenceEngineer is in early access and working with its first teams. Request test access if
			your team is on GitHub and someone in the company keeps asking engineering what the status is,
			or send a question.
		</p>
		<ContactForm bind:topic />
		<p class="type-supporting">
			You can also write to
			<a href="mailto:dominik.strasser@cadence.engineer">dominik.strasser@cadence.engineer</a>.
		</p>
	</PageSection>
</main>
