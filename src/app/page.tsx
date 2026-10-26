import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <ProfileHeader profile={profile} />

      <ul className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-12 text-xs text-gray-400 dark:text-gray-500">
        🌳 링크나무
      </footer>
    </main>
  );
}
