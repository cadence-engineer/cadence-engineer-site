<script lang="ts">
	import { asset } from '$app/paths';
	import BrowserFrame from '$lib/BrowserFrame.svelte';
	import CadenceEngineer from '$lib/CadenceEngineer.svelte';
	import DevelopmentBanner from '$lib/DevelopmentBanner.svelte';
	import RotatingWord from '$lib/RotatingWord.svelte';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';

	const githubLogo = asset('/github-lockup-black.svg');
	const mondayLogo = asset('/monday-logo-black.svg');
</script>

<svelte:head>
	<title>Cadence Engineer | Human-readable software delivery intelligence</title>
	<meta
		name="description"
		content="Cadence Engineer translates software delivery activity into shared, human-readable understanding for managers."
	/>
	<meta property="og:title" content="Cadence Engineer" />
	<meta
		property="og:description"
		content="A human-friendly frontend for Git. Translate software delivery activity into shared understanding for managers."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<main class="site-shell">
	<DevelopmentBanner />
	<SiteHeader />

	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-content">
			<h1 id="hero-title">
				<span>A human-friendly</span>
				<span>frontend for Git.</span>
			</h1>
			<p>
				Translate software delivery activity into shared, human-readable understanding
				<span class="accent-phrase"><RotatingWord /></span>
			</p>
		</div>
	</section>

	<section class="engineer-intro" aria-labelledby="engineer-intro-title">
		<div class="engineer-intro-copy feature-copy">
			<h2 id="engineer-intro-title">Meet Cadence Engineer.</h2>
			<p>
				Cadence Engineer is an AI agent for software delivery. It reads activity across code and
				planning systems, understands how the work is moving, and turns that signal into clear
				updates for managers and teams.
			</p>
		</div>

		<div class="engineer-intro-visual" aria-hidden="true">
			<CadenceEngineer />
		</div>
	</section>

	<section class="supported-connections" aria-labelledby="connections-title">
		<div class="connections-heading">
			<h2 id="connections-title">Connect delivery data where the work already happens.</h2>
		</div>

		<div class="connections-grid">
			<article class="connection-column">
				<div class="connection-title">
					<img class="connection-logo connection-logo-github" src={githubLogo} alt="GitHub" />
				</div>
				<p>
					Cadence Engineer connects to GitHub to read repositories, commits, pull requests, reviews,
					and branch activity. We turn that engineering activity into delivery signals without
					asking teams to change how they write code.
				</p>
				<ul>
					<li>Repository and branch movement</li>
					<li>Pull request status, review state, and merge activity</li>
					<li>Commit history linked back to the delivery timeline</li>
				</ul>
			</article>

			<article class="connection-column">
				<div class="connection-title">
					<img class="connection-logo" src={mondayLogo} alt="monday.com" />
				</div>
				<p>
					Cadence Engineer maps monday.com boards, groups, items, owners, and status fields to the
					delivery view managers already use. Git activity can then be explained in the context of
					planned work, sprint movement, and changing priorities.
				</p>
				<ul>
					<li>Board and item structure for planned delivery work</li>
					<li>Status, owner, and timeline fields for progress context</li>
					<li>Cross-references between tickets and engineering activity</li>
				</ul>
			</article>
		</div>
	</section>

	<section class="features" aria-label="Cadence Engineer features">
		<section class="feature-section feature-section-accent" aria-labelledby="dailies-title">
			<div class="feature-copy">
				<h2 id="dailies-title">A daily readout that starts from the work itself.</h2>
				<p>
					Dailies turn commits, pull requests, reviews, and issue movement into a concise summary.
					Managers and teams get the same context without asking engineers to write another status
					update.
				</p>
			</div>

			<BrowserFrame class="dailies-demo">
				<div class="daily-demo-header">
					<h3>Good morning, Dominik</h3>
					<p>May 17, 2026</p>
				</div>

				<article class="daily-demo-detail">
					<p>
						Yesterday, the Payflow team pushed the new onboarding system closer to launch, with core
						account setup features and updated app screens completed.
					</p>
					<p>
						Progress was strong where teams stayed aligned, but a late pricing change forced rework
						on already finished parts.
					</p>
					<p>
						Today, focus is on final approval, pricing updates, and completing testing to keep the
						planned release on track.
					</p>
				</article>
			</BrowserFrame>
		</section>

		<section
			class="feature-section feature-section-reverse feature-section-with-status feature-section-muted"
			aria-labelledby="sprints-title"
		>
			<p class="feature-status">coming end of may</p>

			<div class="feature-copy">
				<h2 id="sprints-title">Sprint progress without translating every ticket by hand.</h2>
				<p>
					Sprints show what actually moved across the iteration: completed work, active threads,
					scope changes, and signals that need attention before the sprint closes.
				</p>
			</div>

			<BrowserFrame class="sprints-demo muted">
				<div class="demo-header">
					<span>Sprint 24</span>
					<strong>68% complete</strong>
				</div>
				<div class="sprint-bar">
					<span></span>
				</div>
				<div class="sprint-columns">
					<div>
						<strong>Done</strong>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div>
						<strong>In progress</strong>
						<span></span>
						<span></span>
					</div>
					<div>
						<strong>Needs attention</strong>
						<span></span>
					</div>
				</div>
			</BrowserFrame>
		</section>

		<section
			class="feature-section feature-section-accent feature-section-with-status feature-section-muted"
			aria-labelledby="chat-title"
		>
			<p class="feature-status">coming mid june</p>

			<div class="feature-copy">
				<h2 id="chat-title">Ask the delivery system what changed and why.</h2>
				<p>
					Chat gives non-engineering stakeholders a way to ask questions in plain language: what
					shipped, what slowed down, what changed scope, and what should be watched next.
				</p>
			</div>

			<BrowserFrame class="chat-browser-demo muted">
				<div class="chat-demo">
					<div class="chat-message chat-question">What changed since yesterday?</div>
					<div class="chat-message chat-answer">
						<strong>Three areas moved:</strong>
						<p>
							Authentication shipped, billing setup is in review, and import work needs a decision.
						</p>
					</div>
					<div class="chat-input">
						<span>Ask about delivery activity</span>
					</div>
				</div>
			</BrowserFrame>
		</section>
	</section>

	<SiteFooter />
</main>

<style>
	.site-shell {
		--section-content-gap: 56px;
		--feature-layout-gap: 56px;

		display: grid;
		min-height: 100dvh;
		grid-template-rows: auto auto auto auto auto auto auto;
		background: var(--color-surface);
		color: var(--color-text);
	}

	.hero {
		display: flex;
		min-height: max(460px, calc(86dvh - 166px));
		align-items: center;
		box-sizing: border-box;
		justify-content: center;
		padding: 28px var(--site-gutter) 96px;
		text-align: center;
	}

	.hero-content {
		width: min(760px, 100%);
	}

	.hero h1 {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin: 0;
		color: var(--color-text);
		font-size: clamp(48px, 10vw, 84px);
		font-weight: var(--font-weight-heading);
		letter-spacing: 0;
		line-height: 1.05;
		overflow-wrap: break-word;
	}

	.hero p {
		width: 100%;
		margin: 52px auto 0;
		color: var(--color-text);
		font-size: clamp(19px, 1.7vw, 22px);
		font-weight: var(--font-weight-base);
		letter-spacing: 0;
		line-height: 1.48;
		overflow-wrap: break-word;
		text-align: left;
	}

	.accent-phrase {
		color: var(--color-accent);
		font-weight: var(--font-weight-heading);
	}

	.engineer-intro,
	.supported-connections,
	.features {
		width: min(var(--site-content-width), 100%);
		margin: 0 auto;
	}

	.engineer-intro,
	.supported-connections {
		padding: var(--section-block-padding) var(--site-gutter);
	}

	.engineer-intro {
		position: relative;
		color: var(--color-text-inverse);
	}

	.engineer-intro::before,
	.feature-section-accent::before {
		position: absolute;
		z-index: 0;
		top: 0;
		bottom: 0;
		left: 50%;
		width: 100vw;
		background: var(--color-accent);
		content: '';
		transform: translateX(-50%);
	}

	.engineer-intro > *,
	.feature-section > * {
		position: relative;
		z-index: 1;
	}

	.engineer-intro-copy {
		width: 100%;
	}

	.engineer-intro-visual {
		display: flex;
		margin-top: calc(var(--section-content-gap) + 48px);
		justify-content: center;
	}

	.connections-heading {
		width: min(680px, 100%);
	}

	.connections-heading h2 {
		margin: 0;
		font-size: clamp(34px, 5vw, 52px);
		font-weight: var(--font-weight-heading);
		letter-spacing: 0;
		line-height: 1.08;
	}

	.connections-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 36px;
		margin-top: var(--section-content-gap);
	}

	.connection-column {
		display: flex;
		min-height: 440px;
		flex-direction: column;
		align-items: flex-start;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		padding: 36px;
	}

	.connection-title {
		display: flex;
		align-items: center;
	}

	.connection-logo {
		display: block;
		width: min(184px, 100%);
		height: auto;
		max-height: 44px;
		flex: 0 0 auto;
		object-fit: contain;
		object-position: left center;
	}

	.connection-logo-github {
		width: min(154px, 100%);
	}

	.connection-column p {
		margin: 22px 0 0;
		font-size: 19px;
		line-height: 1.5;
	}

	.connection-column ul {
		display: grid;
		gap: 12px;
		margin: auto 0 0;
		padding: 32px 0 0;
		list-style: none;
	}

	.connection-column li {
		position: relative;
		padding-left: 22px;
		color: var(--color-text);
		font-size: 16px;
		line-height: 1.35;
	}

	.connection-column li::before {
		position: absolute;
		top: 0.62em;
		left: 0;
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--color-accent);
		content: '';
		transform: translateY(-50%);
	}

	.features {
		padding: 0 var(--site-gutter);
	}

	.feature-section {
		position: relative;
		display: grid;
		grid-template-areas: 'copy demo';
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: var(--feature-layout-gap);
		align-items: start;
		padding: var(--section-block-padding) 0;
	}

	.feature-section-accent {
		color: var(--color-text-inverse);
	}

	.feature-section-reverse {
		grid-template-areas: 'demo copy';
	}

	.feature-section-with-status {
		grid-template-areas:
			'status status'
			'copy demo';
	}

	.feature-section-reverse.feature-section-with-status {
		grid-template-areas:
			'status status'
			'demo copy';
	}

	.feature-status {
		grid-area: status;
		margin: 0;
		font-size: 20px;
		font-weight: var(--font-weight-heading);
		line-height: 1.2;
		text-align: center;
	}

	.feature-section-muted .feature-copy {
		filter: grayscale(1);
		opacity: 0.58;
	}

	.feature-copy {
		grid-area: copy;
	}

	.feature-copy h2 {
		margin: 0;
		font-size: 44px;
		font-weight: var(--font-weight-heading);
		letter-spacing: 0;
		line-height: 1.12;
	}

	.feature-copy p {
		margin: 28px 0 0;
		font-size: 21px;
		font-weight: var(--font-weight-base);
		line-height: 1.5;
	}

	.demo-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		margin-bottom: 24px;
		font-size: 16px;
		line-height: 1.2;
	}

	.demo-header strong {
		color: var(--color-accent);
		font-weight: var(--font-weight-heading);
	}

	.daily-demo-header h3 {
		margin: 0;
		font-size: clamp(22px, 2.2vw, 28px);
		font-weight: var(--font-weight-heading);
		letter-spacing: 0;
		line-height: 1.05;
		overflow-wrap: break-word;
	}

	.daily-demo-header p {
		margin: 14px 0 0;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.25;
	}

	.daily-demo-detail {
		margin-top: 36px;
		font-size: clamp(15px, 1.25vw, 16px);
		line-height: 1.48;
	}

	.daily-demo-detail p {
		margin: 0 0 22px;
	}

	.daily-demo-detail p:last-child {
		margin-bottom: 0;
	}

	.sprint-columns strong,
	.chat-message strong {
		font-weight: var(--font-weight-heading);
	}

	.chat-message p {
		margin: 8px 0 0;
		line-height: 1.42;
	}

	.sprint-bar {
		height: 18px;
		border-radius: 999px;
		background: var(--color-hover);
		overflow: hidden;
	}

	.sprint-bar span {
		display: block;
		width: 68%;
		height: 100%;
		border-radius: inherit;
		background: var(--color-accent);
	}

	.sprint-columns {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
		margin-top: 28px;
	}

	.sprint-columns div {
		display: flex;
		min-height: 180px;
		flex-direction: column;
		gap: 12px;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 14px;
	}

	.sprint-columns div > span {
		display: block;
		height: 34px;
		border-radius: var(--radius-control);
		background: var(--color-hover);
	}

	.chat-demo {
		display: flex;
		min-height: 360px;
		flex-direction: column;
		gap: 16px;
		justify-content: flex-end;
	}

	.chat-message {
		max-width: 82%;
		border-radius: 8px;
		padding: 16px;
		line-height: 1.42;
	}

	.chat-question {
		align-self: flex-end;
		background: var(--color-accent);
		color: var(--color-text-inverse);
	}

	.chat-answer {
		align-self: flex-start;
		background: var(--color-hover);
	}

	.chat-input {
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 14px 16px;
		color: var(--color-muted);
	}

	@media (max-width: 900px) {
		.site-shell {
			--section-content-gap: 42px;
			--feature-layout-gap: 32px;
		}

		.hero {
			min-height: max(440px, calc(90dvh - 142px));
			padding-block: 40px 72px;
		}

		.connections-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.connection-column {
			min-height: auto;
		}

		.feature-section,
		.feature-section-reverse {
			grid-template-areas:
				'copy'
				'demo';
			grid-template-columns: 1fr;
			padding-block: var(--section-block-padding);
		}

		.feature-section-with-status,
		.feature-section-reverse.feature-section-with-status {
			grid-template-areas:
				'status'
				'copy'
				'demo';
		}

		.feature-copy h2 {
			font-size: 34px;
		}

		.feature-copy p {
			font-size: 19px;
		}

		.feature-status {
			font-size: 18px;
		}

		.sprint-columns {
			min-width: 0;
		}
	}

	@media (max-width: 560px) {
		.site-shell {
			--section-content-gap: 36px;
			--feature-layout-gap: 24px;
		}

		.hero {
			align-items: center;
			min-height: max(460px, calc(90dvh - 134px));
			padding-block: 58px 68px;
		}

		.engineer-intro-visual {
			justify-content: center;
		}

		.connections-heading h2 {
			font-size: 32px;
		}

		.connection-column {
			padding: 28px;
		}

		.connection-logo {
			width: min(172px, 100%);
		}

		.connection-logo-github {
			width: min(144px, 100%);
		}

		.connection-column p {
			font-size: 17px;
		}

		.feature-section,
		.feature-section-reverse {
			padding-block: var(--section-block-padding);
		}

		.feature-status {
			font-size: 16px;
		}

		.feature-copy h2 {
			font-size: 30px;
		}

		.feature-copy p {
			margin-top: 22px;
			font-size: 17px;
		}

		.daily-demo-header h3 {
			font-size: 24px;
		}

		.daily-demo-detail {
			margin-top: 30px;
			font-size: 16px;
		}

		.sprint-columns {
			grid-template-columns: 1fr;
		}

		.sprint-columns div {
			min-height: auto;
		}
	}
</style>
