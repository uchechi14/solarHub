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
      path: "../../public/fonts/Sora/Sora-SemiBold.ttf",
      weight: "700",
    },
  ],
  variable: "--soraB",
});
export const soraThin = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-Light.ttf",
      weight: "700",
    },
  ],
  variable: "--soraT",
});
