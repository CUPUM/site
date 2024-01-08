import handleLang from '$lib/i18n/handle.server';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(handleLang);
