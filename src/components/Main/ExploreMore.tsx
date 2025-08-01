"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com/akramcodez",
    handle: "@akramcodez",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akramcodez",
    handle: "/in/akramcodez",
  },
  {
    name: "GitHub",
    url: "https://github.com/akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/akramcodez",
    handle: "/u/akramcodez",
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/F3uhhJQ7",
    handle: "akramcodez",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akramcodez",
    handle: "@akramcodez",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@akramcodez",
    handle: "/akramcodez",
  },
  {
    name: "Email",
    url: "mailto:skcodewizard786@gmail.com",
    handle: "Contact me",
  },
];

const ExploreMore = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSocialClass = (index: number) => {
    const isHovered = hoveredIndex === index;
    const baseClass =
      "group px-3 py-1 md:px-4 md:py-2 border transition-all duration-300 cursor-pointer text-left";

    if (theme === "dark") {
      return `${baseClass} ${
        isHovered
          ? "border-white/40 bg-white/5"
          : "border-white/10 hover:border-white/20"
      }`;
    } else {
      return `${baseClass} ${
        isHovered
          ? "border-black/40 bg-black/5"
          : "border-black/10 hover:border-black/20"
      }`;
    }
  };

  const getHandleClass = () => {
    return theme === "dark" ? "text-white/60" : "text-black/60";
  };

  return (
    <section
      id="explore-more"
      className="flex flex-col items-center justify-center h-full w-full p-6 md:p-8"
    >
      <div className="w-full max-w-3xl mx-auto space-y-4 md:space-y-6 animate-blur-in">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest md:mb-2">
            SOCIALS
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : "_self"}
              rel={
                social.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={getSocialClass(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <h3 className="text-sm dm:text-base font-semibold mb-1 tracking-wide">
                  {social.name}
                </h3>
                <p
                  className={`text-xs md:text-sm font-medium ${getHandleClass()}`}
                >
                  {social.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-4 md:pt-6 border-t border-current border-opacity-20">
          <p className="text-xs md:text-sm font-medium">
            Always open to collaborate
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
