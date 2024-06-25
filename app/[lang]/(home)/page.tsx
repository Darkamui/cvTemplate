import { ThemeToggle } from "@/components/theme-toggle";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return <main className="flex min-h-screen flex-col items-center"></main>;
}
