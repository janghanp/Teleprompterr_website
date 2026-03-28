import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Monolith",
  description: "Terms of service for the Monolith teleprompter app.",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="border-b border-black pb-10">
        <p className="text-xs uppercase tracking-[0.35em]">Terms of Service</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Simple terms for a focused product.
        </h1>
        <p className="mt-4 text-base leading-7">
          Last updated: March 29, 2026
        </p>
      </div>

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Acceptance
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            By using Monolith, you agree to these terms and any updates we make
            to keep the service running smoothly.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Your Account
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            You are responsible for maintaining the security of your account and
            for activity that occurs under it.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Content
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            You retain ownership of the scripts you create. You grant us
            permission to process them only as needed to deliver the app
            experience.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Acceptable Use
          </h2>
          <ul className="mt-4 list-disc pl-6 text-base leading-7">
            <li>Do not misuse the app to harm others or violate the law.</li>
            <li>Do not attempt to disrupt or reverse engineer the service.</li>
            <li>Keep your access credentials private.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Termination
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            You can stop using Monolith at any time. We may suspend access if
            the terms are violated or if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Changes
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We may update these terms as the product evolves. We will provide
            notice inside the app when changes are significant.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-black pt-8 text-xs uppercase tracking-[0.25em]">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
