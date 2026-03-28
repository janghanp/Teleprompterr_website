import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Monolith",
  description: "Privacy policy for the Monolith teleprompter app.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="border-b border-black pb-10">
        <p className="text-xs uppercase tracking-[0.35em]">Privacy Policy</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Your privacy, in black and white.
        </h1>
        <p className="mt-4 text-base leading-7">
          Last updated: March 29, 2026
        </p>
      </div>

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Overview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Monolith is designed to keep your scripts private. We only collect
            the minimum data needed to run the app and support your account.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Information We Collect
          </h2>
          <ul className="mt-4 list-disc pl-6 text-base leading-7">
            <li>Account details such as name and email.</li>
            <li>Usage signals like app version and device type.</li>
            <li>Scripts you store locally remain on your device by default.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            How We Use Information
          </h2>
          <ul className="mt-4 list-disc pl-6 text-base leading-7">
            <li>Provide access to the app and your saved preferences.</li>
            <li>Maintain security, performance, and reliability.</li>
            <li>Communicate product updates and support responses.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Data Retention
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We retain account data only as long as your account is active. You
            can request deletion at any time, and we will remove associated data
            within a reasonable period.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Your Choices
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            You control your scripts and can export or delete them at any time.
            You can also opt out of non-essential communications.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Contact
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Questions about privacy? Reach us through the support channel inside
            the app.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-black pt-8 text-xs uppercase tracking-[0.25em]">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
