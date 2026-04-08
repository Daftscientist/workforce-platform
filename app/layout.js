import "./globals.css";

export const metadata = {
  title: {
    template: '%s - NEA | Daft.',
    default: 'NEA | Daft.',
  },
  description: "A system for rota scheduling, time tracking, and payroll automation — NEA write-up by Leo Johnston",
  icons: {
    icon: '/assets/daftscientist-mark.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Extrabold.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#151515] text-[#bdbcbd] antialiased">
        {children}
      </body>
    </html>
  );
}
