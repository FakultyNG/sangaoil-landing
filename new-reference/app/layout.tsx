import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanga Oil Limited | Marine Engine Oil",
  description: "Outboard marine and vessel engine oils for reliable performance and protection.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
