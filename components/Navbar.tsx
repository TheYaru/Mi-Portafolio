"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/projects", label: "Proyectos" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            KY
          </div>
          <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400 tracking-wide">
            Kevin Yaruro
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            {links.map((l) => {
              const active = mounted && pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <a
            href="/cv.pdf"
            className="hidden sm:inline-block ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm text-sm"
            aria-label="Descargar CV"
          >
            Descargar CV
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Alternar tema"
          >
            {mounted ? (theme === "dark" ? "🌙" : "☀️") : <span className="sr-only">Tema</span>}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Alternar tema"
          >
            {mounted ? (theme === "dark" ? "🌙" : "☀️") : <span className="sr-only">Tema</span>}
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300`}
        style={{ maxHeight: open ? 320 : 0 }}
        aria-hidden={!open}
      >
        <div className="px-6 pb-6 pt-2 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium ${
                mounted && pathname === l.href ? "bg-blue-50 text-blue-600" : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="/cv.pdf"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setOpen(false)}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
}