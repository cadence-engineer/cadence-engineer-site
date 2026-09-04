<script lang="ts">
	import icon from '$lib/assets/brand/whorl_no_whitespace.svg';

	type Props = {
		alt?: string;
		class?: string;
		inverse?: boolean;
	};

	let { alt = 'CadenceEngineer', class: className = '', inverse = false }: Props = $props();
</script>

<img
	src={icon}
	{alt}
	class={['brand-logo', inverse && 'brand-logo--inverse', className].filter(Boolean).join(' ')}
	draggable="false"
/>
