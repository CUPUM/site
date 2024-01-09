import {
	availableLanguageTags,
	languageTag,
	sourceLanguageTag,
	type AvailableLanguageTag,
} from '$translations/runtime';

/**
 * Remove an app-oriented href's lang param.
 */
export function removeLang<L extends string>(location: L) {
	const [_, maybeLang, ...rest] = location.split('/');
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return `/${rest.join('/')}`;
	}
	return location;
}

/**
 * Apply a lang param to an app-oriented href.
 *
 * **Attention**: If a lang param is included in the passed location string, it will be replaced.
 */
export function link<L extends string>(
	/**
	 * Route location agnostic of lang segment.
	 */
	location: L,
	/**
	 * Custom lang to apply when wishing to target a lang different than the current one.
	 */
	lang: AvailableLanguageTag = languageTag()
) {
	const tail = removeLang(location);
	if (lang === sourceLanguageTag) {
		return tail;
	}
	return `/${lang}${location}`;
}

/**
 * Compose a set of attributes for a given link and language.
 */
// export function linkAttributes<P extends string>(
// 	path: P,
// 	{
// 		lang = languageTag(),
// 	}: {
// 		lang?: AvailableLanguageTag;
// 	} = {}
// ) {
// 	const href = link(path, lang);
// 	return {
// 		href,
// 		hreflang: lang,
// 	} satisfies Partial<HTMLAnchorAttributes>;
// }

/**
 * ```
 *
 * <a {...attributes}>
 *   <svelte:component this={spinner} />
 *   This is a link
 * </a>
 * ```
 */
// export function loadableLink() {
// 	return {
// 		attributes,
// 		spinner
// 	}
// }
