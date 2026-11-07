"use client";

const THEMES = ["light", "dark"] as const;
type Theme = (typeof THEMES)[number];

export function ThemeSwitcher() {
  function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.classList.remove(...THEMES);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <div className="flex gap-2">
      {THEMES.map((theme) => (
        <button
          key={theme}
          onClick={() => applyTheme(theme)}
          className="rounded-md bg-primary px-3 py-1 text-sm capitalize text-primary-foreground"
        >
          {theme}
        </button>
      ))}
    </div>
  );
}