import localFont from "next/font/local";

export const rage = localFont({
  src: [
    {
      path: "../../public/fonts/Rage/RAGE_1.woff",
      weight: "700",
    },
  ],
  variable: "--rage",
});
export const sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-Regular.ttf",
      weight: "600",
    },
  ],
  variable: "--sora",
});
export const soraBold = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--soraB",
});
