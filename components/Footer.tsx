export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          © {year} Kevin Yaruro — Construido con Next.js
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:tu@email.com"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Email
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}