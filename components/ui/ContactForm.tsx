"use client";

import { useState, type FormEvent } from "react";

const STUDIO_EMAIL = "studio@solsticestudio.example";

/**
 * PROVISIONAL SUBMISSION HANDLING (do not remove this note):
 * There is no backend or email-sending service wired up in this project.
 * Rather than fake a "Message sent" confirmation that does nothing, this
 * form builds a real mailto: link from the fields and hands off to the
 * visitor's own mail client — that actually works, with no invented
 * infrastructure behind it. When a real backend (e.g. a form API route +
 * transactional email service) is available, replace handleSubmit's body
 * with a real fetch() to that endpoint and keep the same field names.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "handed-off">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Project inquiry from ${name || "a prospective client"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project location: ${location}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("handed-off");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[560px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[13.5px] text-umber">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-line-strong bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[13.5px] text-umber">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-line-strong bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-[13.5px] text-umber">
          Project location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="City, state"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-line-strong bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[13.5px] text-umber">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-line-strong bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none resize-y"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center px-6 py-3 bg-ink text-paper text-[14.5px] hover:bg-bronze transition-colors"
      >
        Send inquiry
      </button>

      <p className="text-[13px] text-slate" aria-live="polite">
        {status === "handed-off"
          ? "Opening your email client with this message pre-filled — send it from there."
          : `This opens a message to ${STUDIO_EMAIL} in your email client.`}
      </p>
    </form>
  );
}
