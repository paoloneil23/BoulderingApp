"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarValue = Date | [Date, Date] | null;

interface Session {
  climbs: number;
  hardest: string;
  notes: string;
}

export default function CalendarWidget() {
  const [date, setDate] = useState<CalendarValue>(new Date());

    // Mock session data for now (you can fetch from DB later)
  const sessions : Record<string, Session> = {
    "2025-11-10": { climbs: 14, hardest: "V6", notes: "Felt strong on slopers" },
    "2025-11-08": { climbs: 10, hardest: "V5", notes: "Worked on dyno coordination" },
  };

    // Convert date to key format (YYYY-MM-DD)
  const selectedKey =
    date instanceof Date
      ? date.toISOString().split("T")[0]
      : null;

  const session = selectedKey ? sessions[selectedKey] : null;

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-3">Session Calendar</h2>

      <div className="bg-neutral-900 p-3 rounded-2xl shadow w-full">
        <Calendar
          onChange={(value) => setDate(value as CalendarValue)}
          value={date}
          className="rounded-xl w-full text-neutral-100"
          tileClassName={({ date }) => {
            const today = new Date();
            if (
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            ) {
              return "bg-emerald-600 text-white rounded-lg";
            }
            return "";
          }}
        />
      </div>

            {/* Session Details */}
      <div className="mt-4 w-full bg-neutral-900 p-4 rounded-2xl text-sm text-neutral-300">
        {session ? (
          <>
            <p className="font-semibold text-neutral-100">
              {date instanceof Date && date.toDateString()}
            </p>
            <p>🧗 Climbs: {session.climbs}</p>
            <p>💪 Hardest: {session.hardest}</p>
            <p>📝 Notes: {session.notes}</p>
          </>
        ) : (
          <p className="text-neutral-500 italic">
            {date instanceof Date
              ? `No session logged for ${date.toDateString()}`
              : "Select a date"}
          </p>
        )}
      </div>
    </div>
  );
}