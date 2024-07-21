import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { Logo } from "@/app/[lang]/(home)/components/logo";
import { LanguageToggle } from "./language-toggle";
import { LucideMail } from "lucide-react";
import Link from "next/link";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <nav className="px-2 lg:px-0 py-2 bg-gray-100 dark:bg-slate-800 shadow-lg dark:shadow-slate-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="max-w-[150px] max-h-[150px]  lg:max-w-[300px] lg:max-h-[300px]">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle dictionary={dict.theme} />
          <div className="">
            <Link
              href="mailto:daniel@j-web.ca"
              className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden  dark:bg-neutral-950 bg-white
              font-medium dark:text-neutral-200 text-black transition-all duration-300 lg:hover:w-56"
            >
              <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 lg:group-hover:-translate-x-3 lg:group-hover:opacity-100">
                daniel@j-web.ca
              </div>
              <div className="absolute right-2.5">
                <LucideMail size={20} />
              </div>
            </Link>
          </div>

          <LanguageToggle lang={lang} />
        </div>
      </div>
    </nav>
  );
}
