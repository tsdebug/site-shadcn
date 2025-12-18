"use client"

import { HoverEffect } from "../ui/card-hover-effect";
import { Building2, Laptop, Users, FileText } from "lucide-react";
 
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-full mx-auto px-8 bg-blue-100/30 dark:bg-slate-900/40">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Our Vision",
    icon: <Building2 className="w-10 h-10" />, // Pass the icon component directly
    link: "#",
  },
  {
    title: "Online Application",
    icon: <Laptop className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Faculties",
    icon: <Users className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Placement",
    icon: <FileText className="w-10 h-10" />,
    link: "#",
  },
];