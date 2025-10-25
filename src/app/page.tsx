import Link from "next/link";
import ProfilePicture from "@/components/ProfilePicture";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-700/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ProfilePicture />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Track. Project. <span className="text-emerald-400">Send.</span>
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              Log sessions and climbs, visualize your progress, and level up your bouldering with clean
              analytics—built with Next.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 font-semibold"
              >
                View Dashboard
              </Link>
              <Link
                href="/sessions"
                className="rounded-2xl border border-neutral-700 hover:border-neutral-600 px-5 py-3"
              >
                Log a Session
              </Link>
            </div>

            <p className="mt-3 text-sm text-neutral-500">
              No account yet? You can start locally—cloud sync comes later.
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats placeholder (hook up later) */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h2 className="text-xl font-semibold mb-4">This Week</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <StatCard label="Sessions" value="—" />
          <StatCard label="Total Sends" value="—" />
          <StatCard label="Best Grade" value="—" />
          <StatCard label="Flash Rate" value="—" />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard title="Session Logging" desc="Track gym/area, attempts, sends, flashes, and notes." />
          <FeatureCard title="Analytics" desc="See best grade over time, sends per grade, and flash rate." />
          <FeatureCard title="Ready for Cloud" desc="Start local; add auth + sync with NextAuth & Prisma later." />
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
      <div className="text-neutral-400 text-sm">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-neutral-300">{desc}</p>
    </div>
  );
}