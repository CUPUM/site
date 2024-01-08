import { setLanguageTag } from '$translations/runtime';
import { isRedirect, type Handle } from '@sveltejs/kit';
import { getEventLang } from './event';
import { link } from './link';

/**
 * Handle hook for:
 * - setting SSR lang
 * - transforming html lang attribute placeholder
 * - rewriting unlocalized SSR redirects lang segment in location
 */
const handle = (async ({ event, resolve }) => {
	event.locals.lang = getEventLang(event);
	setLanguageTag(() => event.locals.lang);
	const response = await resolve(event, {
		transformPageChunk(input) {
			return input.html.replace('%lang%', event.locals.lang);
		}
	});
	if (!isRedirect(response)) {
		return response;
	}
	const location = response.headers.get('location');
	if (!location || !location.startsWith('/')) {
		return response;
	}
	response.headers.set('location', link(location, event.locals.lang));
	return response;
}) satisfies Handle;

export default handle;
