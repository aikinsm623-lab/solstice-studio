import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Solstice Studio about a residential architecture project in the Pacific Northwest.",
};

export default function ContactPage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-[13.5px] text-bronze font-medium">Contact</p>
          <h1 className="text-[32px] lg:text-[42px] leading-[1.08] text-ink max-w-[13ch]">
            Tell us where the sun hits your site.
          </h1>
          <p className="text-[16px] leading-relaxed text-umber max-w-[38ch]">
            We take on three or four projects at a time, primarily across
            Oregon and Washington. If you&apos;re early — even before you
            have a lot — we&apos;re happy to talk through what&apos;s
            possible.
          </p>

          <dl className="flex flex-col gap-3 text-[14.5px] pt-4 border-t border-line mt-2">
            <div className="flex justify-between max-w-[320px]">
              <dt className="text-slate">Email</dt>
              <dd className="text-ink">studio@solsticestudio.example</dd>
            </div>
            <div className="flex justify-between max-w-[320px]">
              <dt className="text-slate">Phone</dt>
              <dd className="text-ink">503 555 0148</dd>
            </div>
            <div className="flex justify-between max-w-[320px]">
              <dt className="text-slate">Studio</dt>
              <dd className="text-ink">Portland, Oregon</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
