<script lang="ts">
	import arrowUpIcon from '$lib/assets/icons/arrow-up.svg';

	type Props = {
		placeholder?: string;
	};

	let { placeholder = 'Ask anything' }: Props = $props();
</script>

<div class="chat-input">
	<input class="chat-input__field" type="text" {placeholder} aria-label={placeholder} />
	<button class="chat-input__send" type="button" aria-label="Send message">
		<span
			class="chat-input__send-icon"
			style:--icon-source={`url("${arrowUpIcon}")`}
			aria-hidden="true"
		></span>
	</button>
</div>

<style>
	.chat-input {
		display: flex;
		width: 100%;
		min-height: 4rem;
		align-items: center;
		gap: 1rem;
		box-sizing: border-box;
		border-radius: 1rem;
		padding: 1rem;
		background: var(--brand-color-white);
		box-shadow: var(--shadow-card);
		color: var(--color-foreground);
	}

	@supports (corner-shape: squircle) {
		.chat-input {
			border-radius: 2rem;
			corner-shape: squircle;
		}
	}

	.chat-input:focus-within {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}

	.chat-input__field {
		min-width: 0;
		flex: 1 1 auto;
		border: 0;
		padding: 0;
		background: transparent;
		color: inherit;
		outline: 0;
	}

	.chat-input__send {
		display: inline-flex;
		width: 2rem;
		height: 2rem;
		flex: none;
		align-items: center;
		justify-content: center;
		border: 0;
		border-radius: 50%;
		padding: 0;
		background: var(--color-accent);
		color: var(--brand-color-white);
		cursor: pointer;
	}

	.chat-input__send-icon {
		display: block;
		width: 1rem;
		height: 1rem;
		background: currentColor;
		-webkit-mask: var(--icon-source) center / contain no-repeat;
		mask: var(--icon-source) center / contain no-repeat;
	}
</style>
