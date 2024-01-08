import {
	availableLanguageTags,
	languageTag,
	sourceLanguageTag,
	type AvailableLanguageTag,
} from '$translations/runtime';
import type { HTMLAnchorAttributes } from 'svelte/elements';

export function delang<L extends string>(location: L) {
	const [_, maybeLang, ...rest] = location.split('/');
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return `/${rest.join('/')}`;
	}
	return location;
}

export function link<L extends string>(location: L, lang: AvailableLanguageTag = languageTag()) {
	const tail = delang(location);
	if (lang === sourceLanguageTag) {
		return tail;
	}
	return `/${lang}${location}`;
}

export function linkAttributes<P extends string>(
	path: P,
	{
		lang = languageTag(),
	}: {
		lang?: AvailableLanguageTag;
	} = {}
) {
	const href = link(path, lang);
	return {
		href,
		hreflang: lang,
	} satisfies Partial<HTMLAnchorAttributes>;
}
