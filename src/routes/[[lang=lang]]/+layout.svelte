<script lang="ts">
	import { page } from '$app/stores';
	import { link } from '$lib/i18n/link';
	import { availableLanguageTags, languageTag, setLanguageTag } from '$translations/runtime';
	import { untrack } from 'svelte';

	let { children } = $props();
	let mounted = $state(false);

	// On mount
	$effect(() => {
		untrack(() => {
			mounted = true;
		});
	});

	const lang = $derived($page.data.lang);
	setLanguageTag(() => lang);
</script>

<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={link($page.url.toString(), lang)} />
	{/each}
</svelte:head>

<header>
	<nav>
		{#each availableLanguageTags as lang}
			<a href={link('/', lang)}>{lang}</a>
		{/each}
	</nav>
	<nav>
		<a href={link('/test')}>Test</a>
	</nav>
</header>
<main>
	{languageTag()}
	{@render children()}
</main>
<footer>footer</footer>

<style lang="postcss">
</style>
