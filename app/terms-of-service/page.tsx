import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="border-b border-black pb-10">
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-base leading-7">Last updated: March 29, 2026</p>
      </div>

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Acceptance
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            By using Teleprompter App, you agree to these terms. If you do not
            agree, do not use the app.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            App Use
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Teleprompter App is provided for personal and professional use to
            create and display scripts. You are responsible for how you use the
            app and the content you create.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Local Data Storage
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            The app stores data locally on your device to provide functionality.
            This data is not transmitted to us and is not accessible by us.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Permissions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            The app may request access to camera, microphone (voice), and photos
            to enable its features. You can manage these permissions in your
            device settings.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            No Data Collection
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We do not collect, store, or share any personal information from
            users.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Third-Party Services
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Teleprompter App does not use third-party services that collect
            personal data from users.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Acceptable Use
          </h2>
          <ul className="mt-4 list-disc pl-6 text-base leading-7">
            <li>Do not misuse the app to harm others or violate the law.</li>
            <li>Do not attempt to disrupt or reverse engineer the app.</li>
            <li>Respect the privacy and rights of others.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Children’s Use
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            The app is not intended for children who cannot consent to these
            terms. We do not knowingly collect personal information from
            children.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Termination
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            You can stop using the app at any time. We may suspend access if the
            terms are violated or if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Changes
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We may update these terms from time to time. Any changes will be
            posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Contact
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            If you have any questions about these Terms of Service, you can
            contact us at:
          </p>
          <p className="mt-4 text-base leading-7">
            <a
              href="mailto:janghan0412@gmail.com"
              className="underline decoration-black underline-offset-4"
            >
              janghan0412@gmail.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-black pt-8 text-xs uppercase tracking-[0.25em]">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
