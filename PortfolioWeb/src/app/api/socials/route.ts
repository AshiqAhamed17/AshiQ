import { NextResponse } from "next/server";

const FALLBACK_AVATAR = "https://github.com/AshiqAhamed17.png";

export async function GET() {
  try {
    const [githubRes, twitterRes, codeforcesRes, leetcodeProfileRes, leetcodeSolvedRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/AshiqAhamed17`, { next: { revalidate: 3600 } }).then((r) => r.json()),
      fetch(`https://api.fxtwitter.com/`, { next: { revalidate: 3600 } }).then((r) => r.json()),
      fetch(`https://codeforces.com/api/user.info?handles=`, { next: { revalidate: 3600 } }).then((r) => r.json()),
      fetch(`https://alfa-leetcode-api.onrender.com//`, { next: { revalidate: 3600 } }).then((r) => r.json()).catch(() => ({})),
      fetch(`https://alfa-leetcode-api.onrender.com//solved`, { next: { revalidate: 3600 } }).then((r) => r.json()).catch(() => ({})),
    ]);

    const githubData = githubRes.status === "fulfilled" ? githubRes.value : {};
    const twitterData = twitterRes.status === "fulfilled" ? twitterRes.value?.user || {} : {};
    const cfData =
      codeforcesRes.status === "fulfilled" && codeforcesRes.value?.status === "OK"
        ? codeforcesRes.value.result?.[0] ?? {}
        : {};
    const leetcodeData = leetcodeProfileRes.status === "fulfilled" ? leetcodeProfileRes.value || {} : {};
    const leetcodeSolved = leetcodeSolvedRes.status === "fulfilled" ? leetcodeSolvedRes.value || {} : {};

    return NextResponse.json({
      github: {
        name: githubData.name || githubData.login || "Ashiq Ahamed",
        username: githubData.login || "AshiqAhamed17",
        avatar: githubData.avatar_url || FALLBACK_AVATAR,
        bio: githubData.bio || "CS Student | ZK & Cryptography Engineer",
        location: githubData.location || "Tamil Nadu, India",
        stats: [
          { label: "Repositories", value: githubData.public_repos ?? 0 },
          { label: "Followers", value: githubData.followers ?? 0 },
        ],
      },
      twitter: {
        name: twitterData.name || "Ashiq Ahamed",
        username: twitterData.screen_name || "",
        avatar: twitterData.avatar_url?.replace("_normal", "") || FALLBACK_AVATAR,
        banner: twitterData.banner_url || null,
        bio: twitterData.description || "CS Student | ZK & Cryptography",
        location: twitterData.location || "Tamil Nadu, India",
        stats: [
          { label: "Following", value: twitterData.following ?? 0 },
          { label: "Followers", value: twitterData.followers ?? 0 },
        ],
      },
      linkedin: {
        name: "Ashiq Ahamed",
        username: "ashiq-n17",
        avatar: FALLBACK_AVATAR,
        banner: null,
        bio: "CS Student | Aspiring ZK & Cryptography Engineer | Smart Contract Security",
        location: "Tamil Nadu, India",
        stats: [],
      },
      email: {
        name: "Drop an Email",
        username: "ashiqahamed17@gmail.com",
        avatar: FALLBACK_AVATAR,
        bio: "Whether you have a question, a project idea, or just want to say hi, feel free to reach out!",
        location: "Inbox",
        stats: [],
      },
      leetcode: {
        name: leetcodeData.name || "Ashiq Ahamed",
        username: leetcodeData.username || "",
        avatar: leetcodeData.avatar || FALLBACK_AVATAR,
        bio: leetcodeData.about || "Grinding problems between builds.",
        location: leetcodeData.country || "Tamil Nadu, India",
        stats: [
          { label: "Solved", value: leetcodeSolved.solvedProblem ?? 0 }
        ],
      },
      tryhackme: {
        name: "Ashiq Ahamed",
        username: "",
        avatar: FALLBACK_AVATAR,
        bio: "Learning offensive security and defensive tooling, one room at a time.",
        location: "Tamil Nadu, India",
        stats: [],
      },
      codeforces: {
        name: cfData.firstName
          ? `${cfData.firstName} ${cfData.lastName ?? ""}`.trim()
          : "Ashiq Ahamed",
        username: cfData.handle || "",
        avatar: cfData.titlePhoto ? `https:${cfData.titlePhoto}`.replace("https:https:", "https:") : FALLBACK_AVATAR,
        bio: cfData.rank ? `${cfData.rank.charAt(0).toUpperCase()}${cfData.rank.slice(1)}` : "Competitive programmer",
        location: [cfData.city, cfData.country].filter(Boolean).join(", ") || "Tamil Nadu, India",
        stats: [
          { label: "Rating", value: cfData.rating ?? "—" },
          { label: "Max", value: cfData.maxRating ?? "—" },
        ],
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
