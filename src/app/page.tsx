import Link from "next/link";
import ProfilePicture from "@/components/ProfilePicture";
import styles from "./page.module.css";

export default function Home() {
  return (
        <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGradient} />
        <div className={styles.heroContainer}>
          <ProfilePicture />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Track. Project. <span className={styles.highlight}>Send.</span>
            </h1>
            <p className={styles.description}>
              Log sessions and climbs, visualize your progress, and level up your bouldering with clean
              analytics—built with Next.js.
            </p>

            <div className={styles.links}>
              <Link href="/dashboard" className={styles.primaryBtn}>
                View Dashboard
              </Link>
              <Link href="/sessions" className={styles.secondaryBtn}>
                Log a Session
              </Link>
            </div>

            <p className={styles.infoText}>
              No account yet? You can start locally—cloud sync comes later.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <h2 className={styles.statsTitle}>This Week</h2>
        <div className={styles.statGrid}>
          <StatCard label="Sessions" value="—" />
          <StatCard label="Total Sends" value="—" />
          <StatCard label="Best Grade" value="—" />
          <StatCard label="Flash Rate" value="—" />
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
