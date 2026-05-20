<script lang="ts">
	import cadenceEngineerLogo from '$lib/assets/cadence-engineer-logo.svg';

	let { class: className = '' }: { class?: string } = $props();
</script>

<div
	class={['cadence-engineer-agent', className].filter(Boolean).join(' ')}
	style={`--agent-logo-mask: url("${cadenceEngineerLogo}")`}
	role="img"
	aria-label="Cadence Engineer AI agent"
>
	<div class="gradient-circle">
		<span class="gradient-blob blob-green blob-green-a"></span>
		<span class="gradient-blob blob-green blob-green-b"></span>
		<span class="gradient-blob blob-cyan blob-cyan-a"></span>
		<span class="gradient-blob blob-cyan blob-cyan-b"></span>
		<span class="gradient-blob blob-violet blob-violet-a"></span>
		<span class="gradient-blob blob-violet blob-violet-b"></span>
		<span class="gradient-blob blob-mix"></span>
		<span class="agent-logo-frame" aria-hidden="true"></span>
	</div>
</div>

<style>
	.cadence-engineer-agent {
		width: 280px;
		aspect-ratio: 1;
	}

	.gradient-circle {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 50%;
		background:
			radial-gradient(circle at 30% 22%, rgb(255 255 255 / 28%), transparent 0 24%), #ef405c;
		box-shadow:
			0 24px 54px rgb(5 5 5 / 14%),
			inset 0 0 0 1px rgb(255 255 255 / 60%),
			inset 18px 24px 42px rgb(255 255 255 / 80%),
			inset -20px -24px 46px rgb(0 0 0 / 25%);
	}

	.gradient-circle::before {
		position: absolute;
		inset: 0;
		z-index: 1;
		border-radius: inherit;
		background:
			radial-gradient(circle at 28% 18%, rgb(255 255 255 / 46%), transparent 0 18%),
			radial-gradient(
				circle at 50% 50%,
				transparent 58%,
				rgb(255 255 255 / 28%) 76%,
				transparent 86%
			),
			linear-gradient(135deg, rgb(255 255 255 / 22%), transparent 28% 68%, rgb(0 0 0 / 14%));
		content: '';
		pointer-events: none;
	}

	.gradient-blob {
		position: absolute;
		display: block;
		width: 60%;
		height: 60%;
		border-radius: 50%;
		filter: blur(30px);
		mix-blend-mode: screen;
		opacity: 0.74;
		will-change: transform;
	}

	.blob-green {
		background: #b3ef40;
	}

	.blob-green-a {
		top: -10%;
		right: -14%;
		animation: blob-green-a-move 6.2s linear infinite;
		animation-delay: -2.6s;
	}

	.blob-green-b {
		bottom: -16%;
		left: -8%;
		width: 54%;
		height: 54%;
		opacity: 0.62;
		animation: blob-green-b-move 11.4s linear infinite;
		animation-delay: -1.3s;
	}

	.blob-cyan {
		background: #40efd3;
	}

	.blob-cyan-a {
		right: -18%;
		bottom: 12%;
		animation: blob-cyan-a-move 7.6s linear infinite;
		animation-delay: -0.8s;
	}

	.blob-cyan-b {
		top: 24%;
		left: -20%;
		width: 52%;
		height: 52%;
		opacity: 0.58;
		animation: blob-cyan-b-move 12.8s linear infinite;
		animation-delay: -4.9s;
	}

	.blob-violet {
		background: #7c40ef;
	}

	.blob-violet-a {
		bottom: -18%;
		left: 10%;
		animation: blob-violet-a-move 5.8s linear infinite;
		animation-delay: -2.1s;
	}

	.blob-violet-b {
		top: -12%;
		left: 28%;
		width: 48%;
		height: 48%;
		opacity: 0.66;
		animation: blob-violet-b-move 14.4s linear infinite;
		animation-delay: -5.8s;
	}

	.blob-mix {
		top: 24%;
		left: 18%;
		width: 74%;
		height: 74%;
		background: linear-gradient(135deg, #40efd3, #7c40ef 48%, #b3ef40);
		opacity: 0.46;
		animation: blob-mix-move 9.8s linear infinite;
		animation-delay: -4.4s;
	}

	.agent-logo-frame {
		position: relative;
		z-index: 2;
		width: 25%;
		height: 25%;
		transform-origin: 50% 50%;
		animation: agent-logo-jiggle 10s linear infinite;
		isolation: isolate;
		will-change: transform;
	}

	.agent-logo-frame::before,
	.agent-logo-frame::after {
		position: absolute;
		inset: 0;
		content: '';
		-webkit-mask: var(--agent-logo-mask) center / contain no-repeat;
		mask: var(--agent-logo-mask) center / contain no-repeat;
	}

	.agent-logo-frame::before {
		background:
			radial-gradient(circle at 24% 30%, rgb(255 255 255 / 76%), transparent 0 34%),
			radial-gradient(circle at 76% 28%, rgb(255 255 255 / 68%), transparent 0 38%),
			radial-gradient(circle at 68% 74%, rgb(239 64 92 / 26%), transparent 0 36%),
			radial-gradient(circle at 34% 70%, rgb(124 64 239 / 16%), transparent 0 42%),
			rgb(255 255 255 / 42%);
		background-size: 180% 180%;
		filter: blur(30px);
		opacity: 1;
		animation: agent-logo-diffusion 7.2s linear infinite;
		will-change: background-position, transform;
	}

	.agent-logo-frame::after {
		background: linear-gradient(135deg, rgb(255 255 255 / 70%), rgb(255 255 255 / 18%));
		filter: blur(0.45px) drop-shadow(0 1px 4px rgb(255 255 255 / 26%))
			drop-shadow(0 5px 10px rgb(239 64 92 / 16%));
		mix-blend-mode: screen;
		opacity: 0.72;
		transform-origin: 50% 50%;
		animation: agent-logo-pulse 9.6s linear infinite;
		animation-delay: -2.1s;
	}

	@keyframes blob-green-a-move {
		0% {
			transform: translate(8%, -4%) rotate(0deg) scale(1.08);
		}

		22% {
			transform: translate(-28%, 18%) rotate(-24deg) scale(0.92);
		}

		46% {
			transform: translate(-52%, 48%) rotate(14deg) scale(1.12);
		}

		71% {
			transform: translate(-18%, 62%) rotate(-8deg) scale(0.98);
		}

		88% {
			transform: translate(10%, 26%) rotate(20deg) scale(1.18);
		}

		100% {
			transform: translate(8%, -4%) rotate(0deg) scale(1.08);
		}
	}

	@keyframes blob-green-b-move {
		0% {
			transform: translate(-12%, 10%) rotate(0deg) scale(0.96);
		}

		14% {
			transform: translate(18%, -18%) rotate(18deg) scale(1.18);
		}

		33% {
			transform: translate(44%, -10%) rotate(-10deg) scale(0.9);
		}

		58% {
			transform: translate(36%, -54%) rotate(35deg) scale(1.08);
		}

		79% {
			transform: translate(-8%, -34%) rotate(-28deg) scale(1.22);
		}

		100% {
			transform: translate(-12%, 10%) rotate(0deg) scale(0.96);
		}
	}

	@keyframes blob-cyan-a-move {
		0% {
			transform: translate(6%, 4%) rotate(0deg) scale(0.98);
		}

		16% {
			transform: translate(-16%, -28%) rotate(16deg) scale(1.2);
		}

		38% {
			transform: translate(-44%, -38%) rotate(-18deg) scale(1);
		}

		59% {
			transform: translate(-58%, 2%) rotate(28deg) scale(1.14);
		}

		82% {
			transform: translate(-22%, 26%) rotate(-10deg) scale(0.92);
		}

		100% {
			transform: translate(6%, 4%) rotate(0deg) scale(0.98);
		}
	}

	@keyframes blob-cyan-b-move {
		0% {
			transform: translate(-2%, -8%) rotate(0deg) scale(1.06);
		}

		18% {
			transform: translate(32%, 12%) rotate(-22deg) scale(0.88);
		}

		41% {
			transform: translate(64%, -22%) rotate(16deg) scale(1.2);
		}

		63% {
			transform: translate(48%, 34%) rotate(38deg) scale(0.98);
		}

		84% {
			transform: translate(12%, 42%) rotate(-14deg) scale(1.14);
		}

		100% {
			transform: translate(-2%, -8%) rotate(0deg) scale(1.06);
		}
	}

	@keyframes blob-violet-a-move {
		0% {
			transform: translate(-4%, 8%) rotate(0deg) scale(1.12);
		}

		24% {
			transform: translate(18%, -32%) rotate(-18deg) scale(0.94);
		}

		43% {
			transform: translate(46%, -54%) rotate(24deg) scale(1.18);
		}

		69% {
			transform: translate(54%, -8%) rotate(-12deg) scale(1);
		}

		87% {
			transform: translate(18%, 18%) rotate(14deg) scale(1.22);
		}

		100% {
			transform: translate(-4%, 8%) rotate(0deg) scale(1.12);
		}
	}

	@keyframes blob-violet-b-move {
		0% {
			transform: translate(0%, -12%) rotate(0deg) scale(0.92);
		}

		21% {
			transform: translate(-34%, 12%) rotate(24deg) scale(1.16);
		}

		39% {
			transform: translate(18%, 42%) rotate(-18deg) scale(1.04);
		}

		61% {
			transform: translate(-18%, 58%) rotate(31deg) scale(0.86);
		}

		86% {
			transform: translate(28%, 16%) rotate(-32deg) scale(1.2);
		}

		100% {
			transform: translate(0%, -12%) rotate(0deg) scale(0.92);
		}
	}

	@keyframes blob-mix-move {
		0% {
			transform: translate(-8%, -4%) rotate(0deg) scale(1);
		}

		19% {
			transform: translate(8%, -12%) rotate(21deg) scale(1.18);
		}

		35% {
			transform: translate(16%, 12%) rotate(54deg) scale(0.96);
		}

		57% {
			transform: translate(-14%, 18%) rotate(93deg) scale(1.14);
		}

		76% {
			transform: translate(-20%, -10%) rotate(131deg) scale(1.04);
		}

		100% {
			transform: translate(-8%, -4%) rotate(180deg) scale(1);
		}
	}

	@keyframes agent-logo-jiggle {
		0%,
		100% {
			transform: translate3d(0, 0, 0) rotate(0deg);
		}

		13% {
			transform: translate3d(0.9%, -0.7%, 0) rotate(0.8deg);
		}

		29% {
			transform: translate3d(-1.2%, 0.6%, 0) rotate(-0.9deg);
		}

		47% {
			transform: translate3d(0.5%, 1.1%, 0) rotate(0.5deg);
		}

		68% {
			transform: translate3d(-0.7%, -0.5%, 0) rotate(-0.6deg);
		}

		83% {
			transform: translate3d(0.4%, -0.3%, 0) rotate(0.3deg);
		}
	}

	@keyframes agent-logo-pulse {
		0%,
		100% {
			transform: scale(1);
		}

		9% {
			transform: scale(1.018);
		}

		22% {
			transform: scale(0.992);
		}

		38% {
			transform: scale(1.046);
		}

		51% {
			transform: scale(1.006);
		}

		67% {
			transform: scale(1.032);
		}

		79% {
			transform: scale(0.986);
		}

		91% {
			transform: scale(1.022);
		}
	}

	@keyframes agent-logo-diffusion {
		0% {
			background-position:
				0% 34%,
				100% 18%,
				74% 100%,
				28% 74%;
			transform: scale(1);
		}

		28% {
			background-position:
				34% 0%,
				72% 42%,
				100% 66%,
				8% 92%;
			transform: scale(1.06);
		}

		57% {
			background-position:
				82% 32%,
				22% 18%,
				58% 72%,
				62% 34%;
			transform: scale(0.98);
		}

		100% {
			background-position:
				0% 34%,
				100% 18%,
				74% 100%,
				28% 74%;
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.gradient-blob,
		.agent-logo-frame,
		.agent-logo-frame::before,
		.agent-logo-frame::after {
			animation: none;
		}
	}

	@media (max-width: 560px) {
		.cadence-engineer-agent {
			width: 280px;
		}
	}
</style>
