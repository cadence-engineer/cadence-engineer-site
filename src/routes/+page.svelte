<svelte:head>
	<title>Cadence Engineer</title>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero__container">
			<h1>Know what happened.<br />Understand why.</h1>
			<p>
				Ask questions, generate summaries, and turn project activity into a clear view of what
				happened, why it matters, and what comes next.
			</p>
		</div>
	</section>
</main>

<style>
	.hero {
		padding: 8rem 1rem;
	}

	.hero__container {
		display: grid;
		max-width: 75rem;
		margin-inline: auto;
		gap: 4rem;
		text-align: center;
	}

	.hero h1,
	.hero p {
		margin: 0;
	}

	.hero h1 {
		font-size: 4rem;
	}

	@media (max-width: 40rem) {
		.hero h1 {
			font-size: 2.5rem;
		}
	}
</style>
