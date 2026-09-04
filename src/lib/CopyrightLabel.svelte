<script lang="ts">
	type Props = {
		owner?: string;
	};

	let { owner = 'CadenceEngineer' }: Props = $props();
	const year = new Date().getFullYear();
</script>

<p class="copyright-label">©&nbsp;{year} {owner}</p>

<style>
	.copyright-label {
		width: 100%;
		max-width: 75rem;
		margin: 0 auto;
	}
</style>
