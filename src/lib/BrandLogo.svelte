<script lang="ts">
	import icon from '$lib/assets/brand/cadence-engineer-whorl.svg';

	type Props = {
		alt?: string;
		class?: string;
		inverse?: boolean;
	};

	let { alt = 'Cadence Engineer', class: className = '', inverse = false }: Props = $props();
</script>

<img
	src={icon}
	{alt}
	class={['brand-logo', inverse && 'brand-logo--inverse', className].filter(Boolean).join(' ')}
	draggable="false"
/>
