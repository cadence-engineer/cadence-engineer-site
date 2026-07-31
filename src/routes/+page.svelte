<script lang="ts">
	import { AiMessage, ChatInput, FeatureShowcase, UserMessage } from '$lib';
</script>

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

	<FeatureShowcase
		feature="Daily"
		caption="Every day tells a story."
		description="Daily turns project activity into one concise update. See what moved forward, what changed, and what needs attention next without chasing updates or adding more reporting work."
	>
		<article class="daily-summary font-generated">
			<h4>Good morning, Dominik</h4>

			<div class="daily-summary__body">
				<p>
					Yesterday, the Daily feature was completed and released in Cadence Engineer. It now brings
					activity from GitHub and monday.com together in one clear update.
				</p>

				<p>
					Final review went smoothly, and the remaining inconsistencies in how project updates were
					grouped and explained were resolved. No blockers remain for the initial release.
				</p>

				<p>
					Today, the focus shifts to reviewing the first generated dailies, monitoring their quality,
					and gathering feedback before making the feature available more broadly.
				</p>
			</div>
		</article>
	</FeatureShowcase>

	<FeatureShowcase
		cardPosition="left"
		feature="Chat"
		caption="Go ahead. Ask away."
		description="Ask about a feature, project, or anything happening across your organization. Cadence Engineer uses activity and summaries to explain what happened, why it matters, and where things stand."
	>
		<div class="chat-ui">
			<div class="chat-messages">
				<UserMessage>What can I use the new Chat feature for?</UserMessage>

				<AiMessage>
					You can ask about projects, features, and activity across your organization. I’ll use the
					available project context and summaries to explain what happened, where things stand, and
					what’s coming next.
				</AiMessage>
			</div>

			<ChatInput />
		</div>
	</FeatureShowcase>
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

	.daily-summary {
		display: grid;
		gap: 2rem;
		padding: 2rem;
	}

	.daily-summary h4,
	.daily-summary p {
		margin: 0;
	}

	.daily-summary h4 {
		font-size: 2rem;
	}

	.daily-summary__body {
		display: grid;
		gap: 1rem;
	}

	.chat-ui,
	.chat-messages {
		display: flex;
		flex-direction: column;
	}

	.chat-ui {
		gap: 8rem;
		padding: 2rem;
	}

	.chat-messages {
		gap: 4rem;
	}

	.chat-messages :global(.user-message) {
		align-self: flex-end;
	}

	.chat-messages :global(.ai-message) {
		align-self: flex-start;
	}

	@media (max-width: 40rem) {
		.hero h1 {
			font-size: 2.5rem;
		}
	}
</style>
