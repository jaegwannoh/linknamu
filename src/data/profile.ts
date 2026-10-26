export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 폴더 기준 경로 (예: "/profile.png"). 비워두면 기본 이모지가 표시됩니다.
  image?: string;
};

export const profile: Profile = {
  name: "noh",
  bio: "바이브코더 비기너",
};

// 실제 링크로 바꿔서 사용하세요.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/", emoji: "💻" },
  { id: "blog", title: "블로그", url: "https://velog.io/", emoji: "✍️" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com/", emoji: "📸" },
];
