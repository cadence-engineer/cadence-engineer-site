<script lang="ts">
	type Logo = {
		alt: string;
		src: string;
	};

	type Props = {
		logos: Logo[];
	};

	let { logos }: Props = $props();
</script>

<div class="logo-grid">
	{#each logos as logo (logo.alt)}
		<div class="logo-grid__item">
			<img src={logo.src} alt={logo.alt} />
		</div>
	{/each}
</div>

<style>
	.logo-grid {
		display: grid;
		width: min(100%, 56rem);
		grid-template-columns: repeat(2, minmax(0, 1fr));
		align-items: center;
		margin-inline: auto;
		column-gap: 8rem;
		row-gap: 6rem;
	}

	.logo-grid__item {
		display: grid;
		min-width: 0;
		min-height: 5rem;
		place-items: center;
	}

	.logo-grid__item img {
		display: block;
		width: min(100%, 18rem);
		height: 5rem;
		object-fit: contain;
	}

	@media (max-width: 40rem) {
		.logo-grid {
			grid-template-columns: 1fr;
			gap: 4rem;
		}

		.logo-grid__item img {
			height: 4rem;
		}
	}
</style>
