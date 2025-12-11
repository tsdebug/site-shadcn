"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Highlights() {
  return (
    <div className="flex w-full">
      {/* Red area */}
      <div className="bg-red-500 text-white px-6 flex items-center font-semibold">
        Highlights
      </div>

      {/* Blue area */}
      <div className="flex-1 overflow-hidden">
        <InfiniteMovingCards
          items={headlines}
          direction="right"
          speed="fast"
          className="bg-blue-900 text-white h-12 flex items-center"
        />
      </div>
    </div>
  );
}

const headlines = [
  "Offer Letter MCA 2025",
  "Offer Letter B.Tech Lateral Entry 2025",
  "Notice dated 09.12.2025 regarding Tentative Schedule of Games & Sports",
  "Important Notification for PG students - Central Library ",
];
