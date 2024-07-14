import { ThemeToggle } from "@/components/theme-toggle";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { Header } from "./components/header";
import { WorkList } from "./components/work-list";
import { Dictionary } from "../../../lib/types";
import { EducationList } from "./components/education-list";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center pb-8">
      <Header data={dict.header} />
      <WorkList data={dict.workExperience} />
      <EducationList data={dict.education} />
    </main>
  );
}
