import styles from "./dashboard.module.css";
import GradeBarChart from "@/components/GradeBarChart";
import CalendarWidget from "@/components/CalendarWidget";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-neutral-800">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">Paolo</span>
          <div className={styles.avatar}>DP</div>
        </div>
      </header>

      {/* Stat Cards */}
      <section className="grid grid-cols-4 gap-4 px-8 py-6">
        <div className={styles.card}>Sessions—</div>
        <div className={styles.card}>Total Sends—</div>
        <div className={styles.card}>Best Grade—</div>
        <div className={styles.card}>Flash Rate—</div>
      </section>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-8 pb-8 items-start">
        {/* Left: Bar Graph */}
        <div className={`${styles.panel} lg:col-span-2 w-full h-[350px] sm:h-[400px]`}>
          <GradeBarChart />
        </div>

        {/* Right: Calendar */}
        <div className={`${styles.panel} w-full`}>
            <CalendarWidget />
        </div>
      </main>
    </div>
  );
}