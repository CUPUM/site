// See https://kit.svelte.dev/docs/types#app

import type { AvailableLanguageTag } from '$translations/runtime';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: AvailableLanguageTag;
		}
		interface PageData {
			lang: AvailableLanguageTag;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
