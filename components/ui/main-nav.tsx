import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="https://leetcodeboard-sigma.vercel.app/"
        className="flex items-center space-x-2"
      >
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="https://cfstep.com/projects/leetcodeboard/resources/setup/"
        className="flex items-center space-x-2"
      >
        <span className="inline-block font-bold">Problem1</span>
      </Link>
      <Link
        href="https://cfstep.com/projects/leetcodeboard/resources/tailwind-shadcn/"
        className="flex items-center space-x-2"
      >
        <span className="inline-block font-bold">Problem2</span>
      </Link>
      <Link
        href="https://cfstep.com/projects/leetcodeboard/resources/header-footer/"
        className="flex items-center space-x-2"
      >
        <span className="inline-block font-bold">Problem3</span>
      </Link>
    </div>
  );
}
