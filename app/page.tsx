import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import Marquee from "@/components/Marquee";
import Plans from "@/components/Plans";
import Works from "@/components/Works";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
        <Hero/>
        <Marquee/>
        <ImageMarquee/>
        <Benefits/>
        <Works/>
        <Plans/>
        <Faq/>
        <CTA/>
    </main>
  )
}
