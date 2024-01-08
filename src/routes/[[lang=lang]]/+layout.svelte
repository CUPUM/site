<script lang="ts">
	import { page } from '$app/stores';
	import { link } from '$lib/i18n/link';
	import { availableLanguageTags, languageTag } from '$translations/runtime';

	let { children } = $props();

	// setLanguageTag()
</script>

<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={link($page.url.pathname, lang)} />
	{/each}
</svelte:head>

<header>
	<nav>
		{#each availableLanguageTags as lang}
			<a href={lang}>{lang}</a>
		{/each}
	</nav>
</header>
<main>
	{languageTag()}
	{@render children()}
</main>
<footer>footer</footer>

<style lang="postcss">
</style>
