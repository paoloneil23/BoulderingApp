import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Bouldering Tracker</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/sessions">Sessions</Link>
      </div>
    </nav>
  );
}