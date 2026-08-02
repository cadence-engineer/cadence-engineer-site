<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';

	type Props = {
		placeholder?: string;
	};

	let { placeholder = 'Ask anything' }: Props = $props();
</script>

<div class="chat-input">
	<input class="chat-input__field" type="text" {placeholder} aria-label={placeholder} />
	<button class="chat-input__send" type="button" aria-label="Send message">
		<ArrowUp
			size={16}
			strokeWidth={2}
			stroke-linecap="square"
			stroke-linejoin="miter"
			aria-hidden="true"
		/>
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
		box-shadow: 0 0 1rem rgb(0 0 0 / 10%);
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
</style>
