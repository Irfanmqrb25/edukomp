import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthContext from "@/components/providers/auth-provider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eduKomp",
  description: "Website kursus paling lengkap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
          <ThemeProvider attribute="class" storageKey="edukomp-theme">
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
