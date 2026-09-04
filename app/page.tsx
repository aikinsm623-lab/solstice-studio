import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import SelectedWork from "@/components/home/SelectedWork";
import Approach from "@/components/home/Approach";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Approach />
      <CTA />
    </>
  );
}
