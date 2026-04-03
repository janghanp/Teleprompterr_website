import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="border-b border-black pb-10">
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy for Teleprompterr App
        </h1>
        <p className="mt-4 text-base leading-7">
          Teleprompterr App respects your privacy.
        </p>
        <p className="mt-2 text-base leading-7">Last updated: March 29, 2026</p>
      </div>

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Information We Collect
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We do not collect, store, or share any personal information from
            users.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Local Data Storage
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            This app may store data locally on your device only in order to
            provide app functionality. This data is not transmitted to us and is
            not accessible by us.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Examples of locally stored data may include:
          </p>
          <ul className="mt-4 list-disc pl-6 text-base leading-7">
            <li>App preferences</li>
            <li>Saved content created within the app</li>
            <li>Settings used to improve your experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Permissions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            The app may request access to camera, microphone (voice), and photos
            to enable its features.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Analytics and Tracking
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We do not use analytics, tracking tools, or third-party advertising
            SDKs to collect user data.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Third-Party Services
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Teleprompterr App does not use third-party services that collect
            personal data from users. If you use anything like Firebase, Sentry,
            RevenueCat, AdMob, Supabase, Clerk, Mixpanel, etc., this section
            must change.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Children’s Privacy
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Teleprompterr App does not knowingly collect personal information
            from children.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
            Contact
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            If you have any questions about this Privacy Policy, you can contact
            us at:
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
