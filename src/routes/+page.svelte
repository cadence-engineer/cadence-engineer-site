<script lang="ts">
	import {
		AiMessage,
		Button,
		ChatInput,
		FeatureShowcase,
		IconButton,
		Section,
		UserMessage
	} from '$lib';
	import { signInUrl } from '$lib/app';
	import copyIcon from '$lib/assets/icons/copy.svg';
	import thumbsDownIcon from '$lib/assets/icons/thumbs-down.svg';
	import thumbsUpIcon from '$lib/assets/icons/thumbs-up.svg';
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
					Today, the focus shifts to reviewing the first generated dailies, monitoring their
					quality, and gathering feedback before making the feature available more broadly.
				</p>
			</div>

			<div class="daily-summary__toolbar" role="toolbar" aria-label="Daily summary actions">
				<IconButton icon={copyIcon} label="Copy daily summary" />
				<IconButton icon={thumbsUpIcon} label="Helpful" />
				<IconButton icon={thumbsDownIcon} label="Not helpful" />
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

	<Section>
		<div class="plans" aria-labelledby="plans-title">
			<header class="plans__header">
				<h2 id="plans-title">Plans</h2>
				<p>Start free, then upgrade your organization when you need more.</p>
			</header>

			<div class="plans__grid">
				<article class="plan-card">
					<h3>Free</h3>
					<p class="plan-card__price">€0 <span>per month</span></p>
					<ul>
						<li>GitHub support</li>
						<li>3 messages per day</li>
						<li>1 user per organization</li>
					</ul>
					<Button href={signInUrl}>Get started</Button>
				</article>

				<article class="plan-card plan-card--base">
					<h3>Base</h3>
					<p class="plan-card__price">€30 <span>per month</span></p>
					<ul>
						<li>GitHub and monday.com support</li>
						<li>30 messages per day</li>
						<li>3 users per organization</li>
					</ul>
					<Button href={signInUrl}>Get started</Button>
				</article>

				<article class="plan-card plan-card--premium">
					<h3>Premium</h3>
					<p class="plan-card__price">€50 <span>per month</span></p>
					<ul>
						<li>GitHub, monday.com, Jira, and Slack support</li>
						<li>Unlimited messages per day</li>
						<li>Unlimited users per organization</li>
					</ul>
					<Button href={signInUrl}>Get started</Button>
				</article>
			</div>
		</div>
	</Section>
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

	.daily-summary__toolbar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
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

	.plans,
	.plans__header {
		display: grid;
	}

	.plans {
		max-width: 75rem;
		margin-inline: auto;
		gap: 4rem;
	}

	.plans__header {
		gap: 1rem;
		text-align: center;
	}

	.plans__header h2,
	.plans__header p,
	.plan-card h3,
	.plan-card p,
	.plan-card ul {
		margin: 0;
	}

	.plans__header h2 {
		font-size: 2rem;
	}

	.plans__grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem;
	}

	.plan-card {
		display: flex;
		min-width: 0;
		border-radius: 3rem;
		padding: 2rem;
		background: var(--brand-color-white);
		box-shadow: 0 0 1rem rgb(0 0 0 / 10%);
		flex-direction: column;
		gap: 2rem;
	}

	.plan-card--base {
		outline: 2px solid var(--color-accent);
	}

	.plan-card--premium {
		outline: 2px solid var(--color-accent-secondary);
	}

	@supports (corner-shape: squircle) {
		.plan-card {
			border-radius: 6rem;
			corner-shape: squircle;
		}
	}

	.plan-card h3 {
		font-size: 2rem;
	}

	.plan-card__price {
		font-size: 1.5rem;
		font-weight: var(--font-weight-bold);
	}

	.plan-card__price span {
		font-size: 1rem;
		font-weight: var(--font-weight-interface-regular);
	}

	.plan-card ul {
		display: grid;
		padding-left: 1.25rem;
		gap: 0.5rem;
	}

	.plan-card :global(.button) {
		width: 100%;
		max-width: none;
		margin-top: auto;
	}

	@media (max-width: 40rem) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.plans__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
