<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet; class?: string } = $props();
</script>

<article class={['browser-frame', className].filter(Boolean).join(' ')}>
	<div class="browser-chrome" aria-hidden="true">
		<div class="browser-controls">
			<span></span>
			<span></span>
			<span></span>
		</div>

		<div class="browser-address">cadence.engineer</div>
	</div>

	<div class="app-preview">
		<div class="app-preview-content">
			{@render children()}
		</div>
	</div>
</article>

<style>
	.browser-frame {
		position: relative;
		grid-area: demo;
		z-index: 1;
		width: 100%;
		overflow: hidden;
		border-radius: 20px;
		background: var(--color-surface);
		color: var(--color-text);
		box-shadow: 0 18px 48px rgb(0 0 0 / 12%);
	}

	.browser-frame.muted {
		filter: grayscale(1);
		opacity: 0.58;
	}

	.browser-chrome {
		display: grid;
		min-height: 46px;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: 18px;
		background: var(--color-surface);
		padding: 10px 14px;
	}

	.browser-controls {
		display: flex;
		align-items: center;
		gap: 7px;
	}

	.browser-controls span {
		display: block;
		width: 10px;
		height: 10px;
		border-radius: 999px;
	}

	.browser-controls span:nth-child(1) {
		background: #ff5f57;
	}

	.browser-controls span:nth-child(2) {
		background: #ffbd2e;
	}

	.browser-controls span:nth-child(3) {
		background: #28c840;
	}

	.browser-address {
		min-width: 0;
		border-radius: 999px;
		background: var(--color-surface);
		box-shadow:
			0 2px 10px rgb(0 0 0 / 12%),
			inset 0 1px 0 rgb(0 0 0 / 4%);
		color: var(--color-muted);
		font-size: 13px;
		line-height: 1;
		overflow: hidden;
		padding: 7px 14px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.app-preview {
		background: var(--color-surface);
	}

	.app-preview-content {
		padding: 56px 48px 62px;
	}

	@media (max-width: 560px) {
		.app-preview-content {
			padding: 44px 34px 52px;
		}
	}
</style>
