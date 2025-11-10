import BarSection from "@/src/components/BarSection.tsx/page";
import AboutContent from "./_components/AboutContent";
import ClientLogos from "./_components/ClientLogos";
import OurTeam from "./_components/OurTeam";
import WorkProcess from "./_components/WorkProcess";
import Link from "next/link";



export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <BarSection title="About Us">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </BarSection>
      <AboutContent />
      <ClientLogos />
      <WorkProcess />
      <OurTeam/>
    </main>
  )
}
