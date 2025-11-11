"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const gradeData = [
  { grade: "V0", sends: 5 },
  { grade: "V1", sends: 8 },
  { grade: "V2", sends: 12 },
  { grade: "V3", sends: 20 },
  { grade: "V4", sends: 18 },
  { grade: "V5", sends: 17 },
  { grade: "V6", sends: 4 },
  { grade: "V7", sends: 1 },
  { grade: "V8", sends: 0 },
  { grade: "V9", sends: 0 },
  { grade: "V10", sends: 0 }
];

export default function GradeBarChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={gradeData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="grade" tick={{ fill: "#ccc" }} />
          <YAxis tick={{ fill: "#ccc" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }}
            cursor={{ fill: "#222" }}
          />
          <Bar dataKey="sends" fill="#34d399" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}