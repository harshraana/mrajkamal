import type { Metadata } from "next";
import AboutPage from "@/components/pages/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about M Rajkamal – an authorised Godrej Interio dealer in Dadar West, Mumbai. Premium furniture, expert guidance, and trusted service since decades.",
};

export default function About() {
  return <AboutPage />;
}
