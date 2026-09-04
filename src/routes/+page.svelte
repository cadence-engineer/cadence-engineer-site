<script lang="ts">
	import {
		ActionToolbar,
		AiMessage,
		ChatInput,
		FeatureShowcase,
		IconButton,
		PricingCard,
		ProviderSection,
		Section,
		UserMessage
	} from '$lib';
	import { appLinksEnabled, signInUrl } from '$lib/app';
	import anthropicLogo from '$lib/assets/providers/anthropic.svg';
	import githubLogo from '$lib/assets/providers/github.svg';
	import mondayLogo from '$lib/assets/providers/monday.svg';
	import openaiLogo from '$lib/assets/providers/openai.svg';
	import copyIcon from '$lib/assets/icons/copy.svg';
	import thumbsDownIcon from '$lib/assets/icons/thumbs-down.svg';
	import thumbsUpIcon from '$lib/assets/icons/thumbs-up.svg';

	const aiProviders = [
		{ name: 'OpenAI', logo: openaiLogo },
		{ name: 'Anthropic', logo: anthropicLogo }
	];

	const toolProviders = [
		{ name: 'GitHub', logo: githubLogo },
		{ name: 'monday.com', logo: mondayLogo }
	];
</script>

<svelte:head>
	<title>CadenceEngineer</title>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero__container">
			<h1 class="type-display type-display--responsive">
				Know what happened.<br />Understand why.
			</h1>
			<p class="type-body">
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
			<h4 class="type-section-title">Good morning, Dominik</h4>

			<div class="daily-summary__body">
				<p>
					Yesterday, the Daily feature was completed and released in CadenceEngineer. It now brings
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

			<ActionToolbar label="Daily summary actions">
				<IconButton icon={copyIcon} label="Copy daily summary" />
				<IconButton icon={thumbsUpIcon} label="Helpful" />
				<IconButton icon={thumbsDownIcon} label="Not helpful" />
			</ActionToolbar>
		</article>
	</FeatureShowcase>

	<FeatureShowcase
		cardPosition="left"
		feature="Chat"
		caption="Go ahead. Ask away."
		description="Ask about a feature, project, or anything happening across your organization. CadenceEngineer uses activity and summaries to explain what happened, why it matters, and where things stand."
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

	<ProviderSection
		title="Choose your AI provider"
		description="Select the AI provider that best fits your organization, with the flexibility to use the models and infrastructure you already trust. Custom enterprise plans also support your own hosted or self-hosted AI models."
		providers={aiProviders}
	/>

	<ProviderSection
		title="Connect your tools"
		description="Bring the tools your organization already uses into one place. Connect your data sources to make their activity available in CadenceEngineer."
		providers={toolProviders}
	/>

	<Section>
		<div class="pricing" aria-labelledby="pricing-title">
			<h2 class="type-section-title" id="pricing-title">Pricing</h2>

			<div class="pricing__grid">
				<PricingCard
					name="Basic"
					price="€30"
					period="/ month"
					actionLabel={appLinksEnabled ? 'Get Started' : undefined}
					actionHref={appLinksEnabled ? signInUrl : undefined}
					sections={[
						{ label: 'Scope', items: ['1 organization', '1 user'] },
						{ label: 'Features', items: ['Daily', 'Chat', '30 messages per day'] },
						{ label: 'AI providers', items: ['OpenAI', 'Anthropic', 'Mistral', 'Novita'] },
						{ label: 'Tools', items: ['GitHub', 'monday.com'] }
					]}
				/>

				<PricingCard
					tone="premium"
					name="Premium"
					price="€50"
					period="/ month"
					actionLabel={appLinksEnabled ? 'Get Started' : undefined}
					actionHref={appLinksEnabled ? signInUrl : undefined}
					sections={[
						{ label: 'Scope', items: ['1 organization', '5 users'] },
						{ label: 'Features', items: ['Daily', 'Chat', 'Unlimited messages per day'] },
						{ label: 'AI providers', items: ['OpenAI', 'Anthropic', 'Mistral', 'Novita'] },
						{ label: 'Tools', items: ['GitHub', 'monday.com', 'Jira', 'Slack'] }
					]}
				/>

				<PricingCard
					tone="enterprise"
					name="Enterprise"
					price="Custom"
					actionLabel="Contact"
					actionHref="mailto:dominik.strasser@cadence.engineer"
					sections={[
						{ label: 'Scope', items: ['Fully customizable'] },
						{ label: 'Features', items: ['All features'] },
						{
							label: 'AI provider',
							items: ['Fully self-hosted', 'or', 'Custom AI endpoint']
						},
						{ label: 'Tools', items: ['Support for all available tools'] }
					]}
				/>
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
		line-height: normal;
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

	.pricing {
		display: grid;
		max-width: 75rem;
		margin-inline: auto;
		gap: 4rem;
	}

	.pricing h2 {
		margin: 0;
		text-align: center;
	}

	.pricing__grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem;
	}

	@media (max-width: 40rem) {
		.pricing__grid {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 40.001rem) and (max-width: 56rem) {
		.pricing__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
