import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-black">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.35em]">
            Monolith teleprompter
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
            Read with absolute focus.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7">
            A black-and-white teleprompter that strips everything back to the
            words. Bold, quiet, and built for confident delivery on camera.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#download"
              className="bg-black px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              Download App
            </Link>
            <Link
              href="/privacy-policy"
              className="border border-black px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
                Clarity
              </h2>
              <p className="mt-4 text-base leading-7">
                High-contrast typography keeps every line readable from any
                distance and angle.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
                Control
              </h2>
              <p className="mt-4 text-base leading-7">
                Dial the pace, lock the line height, and keep the script steady
                without distractions.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em]">
                Calm
              </h2>
              <p className="mt-4 text-base leading-7">
                A single-purpose interface that fades away so you can deliver
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Download the Monolith app.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7">
            Built for rehearsals, recording sessions, and live delivery. Keep it
            simple, keep it readable, and stay on script.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black"
            >
              Download App
            </button>
            <Link
              href="/terms-of-service"
              className="border border-white px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
