import { availableLanguageTags, type AvailableLanguageTag } from '$translations/runtime';

export function match(param): param is AvailableLanguageTag {
	return availableLanguageTags.includes(param as AvailableLanguageTag);
}
