import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full dark:bg-[#1f1f21] rounded-2xl backdrop-blur-md supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copyright h-4 w-4 text-[#6366f1]"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
            </svg>
            <span className="text-center sm:text-left">
              2025 All rights reserved
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Build & Design by</span>
            <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
              <a
                href="https://x.com/taher_max_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://avatars.githubusercontent.com/u/138603168"
                  width={40}
                  height={40}
                  alt="Taher Max"
                />
              </a>
              <a
                href="https://x.com/drudiedo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://pbs.twimg.com/profile_images/1875538117295325184/n56-VAv6_400x400.jpg"
                  width={40}
                  height={40}
                  alt="Drudiedo"
                />
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
