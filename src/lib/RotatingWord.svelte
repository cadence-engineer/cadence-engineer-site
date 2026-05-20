<script lang="ts">
	const words = ['for Managers.', 'for Sales.', 'for Leads.'];
	let index = $state(0);

	$effect(() => {
		const interval = window.setInterval(() => {
			index = (index + 1) % words.length;
		}, 1800);

		return () => window.clearInterval(interval);
	});
</script>

<span class="rotating-word">{words[index]}</span>

<style>
	.rotating-word {
		display: inline-block;
		min-width: 6.9em;
		white-space: nowrap;
	}
</style>
