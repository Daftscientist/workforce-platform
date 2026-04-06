import "./globals.css";

export const metadata = {
  title: {
    template: '%s - Daft.',
    default: 'Integrated Workforce Management Platform - Daft.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
