"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | "">("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}
