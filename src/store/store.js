import { useStorage } from "@vueuse/core";

export const _language = useStorage('_language', () => 'en')