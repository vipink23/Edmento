"use client";
import { useState } from "react";
type AIsummaryProps = {
  title: string;
};

export default function AIsummary({ title }: AIsummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSummary = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch summary");
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSummary(null);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleSummary}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        disabled={loading}
      >
        {loading ? "Loading..." : "AI Content Summary"}
      </button>

      {summary && (
        <div className="relative absolute right-0 mt-4 w-64 p-3 bg-white border rounded shadow-lg z-10">
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-900 font-bold shadow"
            aria-label="Close summary"
          >
            ×
          </button>
          <p className="text-sm text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
}
