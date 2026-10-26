import Image from "next/image";
import type { Profile } from "@/data/profile";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-white shadow-md ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800 sm:h-32 sm:w-32">
        {profile.image ? (
          <Image
            src={profile.image}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-5xl" aria-hidden>
            🐣
          </span>
        )}
      </div>

      <h1 className="mt-5 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{profile.bio}</p>
    </section>
  );
}
