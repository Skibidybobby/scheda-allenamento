"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Scheda", icon: Dumbbell },
  { href: "/menu", label: "Menù", icon: Utensils },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 flex items-center gap-1 py-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150",
                active
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
