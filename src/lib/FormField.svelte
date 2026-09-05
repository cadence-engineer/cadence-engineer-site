<script lang="ts">
	import chevronDownIcon from '$lib/assets/icons/chevron-down.svg';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Option = {
		label: string;
		value: string;
	};

	type Props = {
		autocomplete?: HTMLInputAttributes['autocomplete'];
		disabled?: boolean;
		error?: string;
		label: string;
		maxlength?: number;
		name?: string;
		options?: Option[];
		required?: boolean;
		rows?: number;
		type?: 'email' | 'select' | 'text' | 'textarea';
		value?: string;
	};

	let {
		autocomplete,
		disabled = false,
		error,
		label,
		maxlength,
		name,
		options = [],
		required = false,
		rows = 6,
		type = 'text',
		value = $bindable('')
	}: Props = $props();
	const inputID = $props.id();
	const errorID = `${inputID}-error`;
</script>

<div class="form-field">
	<label for={inputID}>{label}</label>
	{#if type === 'select'}
		<span class="form-field__select">
			<select
				id={inputID}
				{name}
				{required}
				{disabled}
				aria-invalid={error ? true : undefined}
				aria-describedby={error ? errorID : undefined}
				bind:value
			>
				{#each options as option (option.value)}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
			<span style:--icon-source={`url("${chevronDownIcon}")`} aria-hidden="true"></span>
		</span>
	{:else if type === 'textarea'}
		<textarea
			id={inputID}
			{name}
			{maxlength}
			{required}
			{disabled}
			{rows}
			aria-invalid={error ? true : undefined}
			aria-describedby={error ? errorID : undefined}
			bind:value
		></textarea>
	{:else}
		<input
			id={inputID}
			{autocomplete}
			{maxlength}
			{name}
			{required}
			{disabled}
			{type}
			aria-invalid={error ? true : undefined}
			aria-describedby={error ? errorID : undefined}
			bind:value
		/>
	{/if}
	{#if error}
		<p class="form-field__error type-supporting" id={errorID}>{error}</p>
	{/if}
</div>

<style>
	.form-field {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-field label {
		width: fit-content;
		max-width: 100%;
	}

	.form-field input,
	.form-field select,
	.form-field textarea {
		width: 100%;
		min-height: 3rem;
		box-sizing: border-box;
		appearance: none;
		border: 0;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		background: var(--brand-color-white);
		box-shadow: var(--shadow-surface);
		color: var(--color-foreground);
		outline: 0;
	}

	.form-field input,
	.form-field select {
		height: 3rem;
	}

	.form-field textarea {
		padding-block: 0.75rem;
		resize: vertical;
	}

	.form-field input:focus-visible,
	.form-field select:focus-visible,
	.form-field textarea:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}

	.form-field__select {
		position: relative;
		display: block;
		width: 100%;
	}

	.form-field__select > span {
		position: absolute;
		top: 50%;
		right: 1rem;
		display: block;
		width: 1rem;
		height: 1rem;
		background: currentColor;
		pointer-events: none;
		transform: translateY(-50%);
		-webkit-mask: var(--icon-source) center / contain no-repeat;
		mask: var(--icon-source) center / contain no-repeat;
	}

	.form-field__select select {
		padding-right: 3rem;
	}

	.form-field__error {
		margin: 0;
		color: var(--color-danger);
	}

	@supports (corner-shape: squircle) {
		.form-field input,
		.form-field select,
		.form-field textarea {
			border-radius: 2rem;
			corner-shape: squircle;
		}
	}
</style>
