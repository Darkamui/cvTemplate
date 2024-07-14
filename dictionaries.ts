import "server-only";
import type { Locale } from "./i18n-config";
import { Dictionary } from "./lib/types";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import("./dictionaries/en.json").then(
      (module) => module.default as Dictionary
    ),
  fr: () =>
    import("./dictionaries/fr.json").then(
      (module) => module.default as Dictionary
    ),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.en();
