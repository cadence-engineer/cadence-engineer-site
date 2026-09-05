<script lang="ts">
	import { base } from '$app/paths';
	import {
		ActionToolbar,
		AiMessage,
		Button,
		ChatInput,
		CitationsModal,
		FeatureCard,
		FeatureShowcase,
		IconButton,
		PricingCard,
		ProviderSection,
		Section,
		UserMessage
	} from '$lib';
	import { appLinksEnabled, pricingEnabled, signInUrl, siteOrigin } from '$lib/app';
	import anthropicLogo from '$lib/assets/providers/anthropic.svg';
	import githubLogo from '$lib/assets/providers/github.svg';
	import mondayLogo from '$lib/assets/providers/monday.svg';
	import openaiLogo from '$lib/assets/providers/openai.svg';
	import copyIcon from '$lib/assets/icons/copy.svg';
	import thumbsDownIcon from '$lib/assets/icons/thumbs-down.svg';
	import thumbsUpIcon from '$lib/assets/icons/thumbs-up.svg';

	const title = 'CadenceEngineer · Know what happened. Understand why.';
	const description =
		"A knowledge base built from your organization's activity, so anyone can ask what happened, why, and what comes next.";

	const aiProviders = [
		{ name: 'OpenAI', logo: openaiLogo },
		{ name: 'Anthropic', logo: anthropicLogo }
	];

	const toolProviders = [
		{ name: 'GitHub', logo: githubLogo },
		{ name: 'monday.com', logo: mondayLogo }
	];

	// Illustrative Citations for the sample Daily. Each links to the kind of source a real
	// Citation points at; the sample describes CadenceEngineer's own development.
	const dailyCitations = [
		{
			claim: 'The Daily feature was completed and released.',
			source: 'GitHub · cadenceengineer/summarizer · pull request',
			url: 'https://github.com/cadenceengineer'
		},
		{
			claim: 'It brings activity from GitHub and monday.com together in one update.',
			source: 'GitHub · cadenceengineer/api · pull request',
			url: 'https://github.com/cadenceengineer'
		},
		{
			claim: 'No blockers remain for the initial release.',
			source: 'monday.com · Release board · item',
			url: 'https://github.com/cadenceengineer'
		}
	];

	const chatCitations = [
		{
			claim: 'The Jira Cloud pairing shipped through an installed Forge app.',
			source: 'GitHub · cadenceengineer/api · pull request',
			url: 'https://github.com/cadenceengineer'
		},
		{
			claim: 'The first Premium organization connected a Jira site.',
			source: 'GitHub · cadenceengineer/web · pull request',
			url: 'https://github.com/cadenceengineer'
		},
		{
			claim: 'One issue about hourly token rotation is still open and not blocking.',
			source: 'GitHub · cadenceengineer/api · issue',
			url: 'https://github.com/cadenceengineer'
		}
	];

	const trustPoints = [
		{
			title: 'Every claim links to its evidence',
			body: 'Each sentence in a Daily or a Chat answer carries a Citation to the pull request, ticket, or thread it came from. When the evidence is unclear, CadenceEngineer says so instead of guessing.'
		},
		{
			title: 'Teams and projects, never people',
			body: 'CadenceEngineer describes what your organization is working on. It does not rate individuals, track who did what, or build profiles of contributors.'
		},
		{
			title: 'Nothing new to maintain',
			body: 'Your tools remain the systems of record. There is no extra board to update and no status report to write; the understanding comes from the work itself.'
		}
	];

	const steps = [
		{
			title: 'Sign in with GitHub',
			body: 'Create your organization in CadenceEngineer with the account you already have.'
		},
		{
			title: 'Install the GitHub App',
			body: 'Someone with administrator rights on your GitHub organization installs it and chooses the repositories. About five minutes.'
		},
		{
			title: 'Read your first Daily',
			body: 'It arrives about half an hour later. Connect monday.com or Jira whenever you want more context.'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="CadenceEngineer" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={`${siteOrigin}${base}/`} />
	<meta property="og:image" content={`${siteOrigin}${base}/og.png`} />
	<meta property="og:image:width" content="2400" />
	<meta property="og:image:height" content="1260" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${siteOrigin}${base}/og.png`} />
</svelte:head>

<main>
	<section class="hero">
		<div class="hero__container">
			<h1 class="type-display type-display--responsive">
				Know what happened.<br />Understand why.
			</h1>
			<div class="hero__copy">
				<p class="type-body">{description}</p>
				<p class="type-body">
					For the people who need to understand technical work without living in technical tools:
					founders, product managers, sales, customer success, designers, and leadership.
				</p>
			</div>
		</div>
	</section>

	<FeatureShowcase
		caption="Every day tells a story."
		description="Daily turns your organization's activity into one concise update each morning. See what moved forward, what changed, and what needs attention next, without chasing updates or adding reporting work for anyone."
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
				<CitationsModal citations={dailyCitations} label="Show citations" />
			</ActionToolbar>
		</article>
	</FeatureShowcase>

	<FeatureShowcase
		cardPosition="left"
		caption="Go ahead. Ask away."
		description="Ask about a feature, a project, or anything happening across your organization, in plain language. CadenceEngineer answers from the activity itself, says what it does not know, and links every claim to its source."
	>
		<div class="chat-ui">
			<div class="chat-messages">
				<UserMessage>Is the Jira integration done? A customer is asking.</UserMessage>

				<div class="chat-answer">
					<AiMessage>
						For Jira Cloud, yes. The pairing through an installed Forge app shipped on Tuesday, and
						the first Premium organization connected its site the day after. Jira Server and Data
						Center are not supported, and nothing in the recent activity suggests that is planned.
						One issue about hourly token rotation is still open; it is not blocking.
					</AiMessage>
					<ActionToolbar label="Chat answer actions">
						<IconButton icon={copyIcon} label="Copy answer" />
						<CitationsModal citations={chatCitations} label="Show citations" />
					</ActionToolbar>
				</div>
			</div>

			<ChatInput />
		</div>
	</FeatureShowcase>

	<Section>
		<div class="feature-grid" aria-labelledby="trust-title">
			<h2 class="type-section-title" id="trust-title">Built to be checked.</h2>
			<div class="feature-grid__cards">
				{#each trustPoints as point (point.title)}
					<FeatureCard>
						<div class="feature-grid__card">
							<h3 class="type-component-heading">{point.title}</h3>
							<p class="type-body">{point.body}</p>
						</div>
					</FeatureCard>
				{/each}
			</div>
		</div>
	</Section>

	<ProviderSection
		title="Connect your tools"
		description="Bring the tools your organization already uses into one place. GitHub is all it takes to start; monday.com and Jira add context whenever you connect them."
		providers={toolProviders}
	/>

	<ProviderSection
		title="Choose your AI provider"
		description="Select the AI provider that fits your organization, with the flexibility to use the models and infrastructure you already trust. Self-hosted models are available on request."
		providers={aiProviders}
	/>

	<Section>
		<div class="feature-grid" aria-labelledby="steps-title">
			<h2 class="type-section-title" id="steps-title">Up and running in half an hour.</h2>
			<ol class="feature-grid__cards feature-grid__cards--steps">
				{#each steps as step, index (step.title)}
					<li>
						<FeatureCard>
							<div class="feature-grid__card">
								<h3 class="type-component-heading">{index + 1}. {step.title}</h3>
								<p class="type-body">{step.body}</p>
							</div>
						</FeatureCard>
					</li>
				{/each}
			</ol>
			<div class="feature-grid__action">
				{#if appLinksEnabled}
					<Button href={signInUrl}>Get started</Button>
				{:else}
					<Button href={`${base}/contact/?topic=test_access`}>Request access</Button>
				{/if}
			</div>
		</div>
	</Section>

	{#if pricingEnabled}
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
	{/if}
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

	.hero__copy {
		display: grid;
		max-width: 48rem;
		margin-inline: auto;
		gap: 1rem;
	}

	.chat-answer {
		display: grid;
		gap: 1rem;
	}

	.feature-grid {
		display: grid;
		max-width: 75rem;
		margin-inline: auto;
		gap: 4rem;
	}

	.feature-grid > h2 {
		margin: 0;
		text-align: center;
	}

	.feature-grid__card h3,
	.feature-grid__card p {
		margin: 0;
	}

	.feature-grid__cards {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin: 0;
		padding: 0;
		gap: 2rem;
		list-style: none;
	}

	.feature-grid__cards--steps > li {
		display: flex;
	}

	.feature-grid__card {
		display: grid;
		height: 100%;
		box-sizing: border-box;
		align-content: start;
		padding: 2rem;
		gap: 1rem;
	}

	.feature-grid__action {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 56rem) {
		.feature-grid__cards {
			grid-template-columns: 1fr;
		}
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
