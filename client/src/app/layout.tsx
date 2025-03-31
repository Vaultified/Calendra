import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calendra - Professional Calendar Management",
  description:
    "A professional calendar management application for scheduling and organizing your events.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
