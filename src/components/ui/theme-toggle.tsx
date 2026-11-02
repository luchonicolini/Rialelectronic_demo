"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

type ThemeValue = "system" | "light" | "dark";

const ORDER: ThemeValue[] = ["system", "light", "dark"];

const LABELS: Record<ThemeValue, string> = {
  system: "Sistema",
  light: "Claro",
  dark: "Oscuro",
};

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const current = (mounted ? theme : "system") as ThemeValue;
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Tema: ${LABELS[current]}. Cambiar a ${LABELS[next]}.`}
      title={`Tema: ${LABELS[current]}`}
      className="inline-flex size-10 items-center justify-center rounded-control text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:text-foreground"
    >
      <ThemeIcon theme={current} />
    </button>
  );
}

function ThemeIcon({ theme }: { theme: ThemeValue }) {
  if (theme === "light") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="size-5"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}
