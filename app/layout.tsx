import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DotGrid from "../components/DotGrid";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body>
        <DotGrid
          className="fixed inset-0"
          style={{ zIndex: -100 }}
          dotSize={12}
          gap={24}
          baseColor="#f3f4f6"
          activeColor="#6b7280"
          proximity={80}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}