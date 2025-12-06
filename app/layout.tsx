import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./src/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiv Texchem Limited",
  description: "Shiv Texchem Limited is a leading textile company in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || theme === 'light') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Apply theme on client-side navigation
                function applyTheme() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'dark' || theme === 'light') {
                      document.documentElement.setAttribute('data-theme', theme);
                    } else {
                      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                    }
                  } catch (e) {}
                }
                
                // Apply theme immediately
                applyTheme();
                
                // Listen for navigation events (Next.js)
                if (typeof window !== 'undefined') {
                  // Apply theme on popstate (back/forward)
                  window.addEventListener('popstate', applyTheme);
                  
                  // Apply theme before navigation starts
                  var originalPushState = history.pushState;
                  history.pushState = function() {
                    applyTheme();
                    return originalPushState.apply(history, arguments);
                  };
                  
                  var originalReplaceState = history.replaceState;
                  history.replaceState = function() {
                    applyTheme();
                    return originalReplaceState.apply(history, arguments);
                  };
                }
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
