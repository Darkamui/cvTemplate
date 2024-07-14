import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { Logo } from "@/app/[lang]/(home)/components/logo";
import { LanguageToggle } from "./language-toggle";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <nav className="py-2 bg-gray-100 dark:bg-slate-900 shadow-lg dark:shadow-slate-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="max-w-[150px] max-h-[150px]  lg:max-w-[300px] lg:max-h-[300px]">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <Button>{dict.navbar.cta}</Button>
          <ThemeToggle />
          <LanguageToggle lang={lang} />
        </div>
      </div>
    </nav>
  );
}
