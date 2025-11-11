"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open")
    }
  }, [open]);

  return (
    <>
    <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>

    <nav className={`${styles.navbar} ${open ? styles.open : ""}`}>
      <div className={styles.logo}>Bouldering Tracker</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/dashboard" className={styles.link} onClick={() => setOpen(false)}>Dashboard</Link>
        <Link href="/sessions" className={styles.link} onClick={() => setOpen(false)}>Sessions</Link>
      </div>
    </nav>

    {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  );
}