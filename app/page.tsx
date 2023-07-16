import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import Marquee from "@/components/Marquee";
import Plans from "@/components/Plans";
import Works from "@/components/Works";

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
