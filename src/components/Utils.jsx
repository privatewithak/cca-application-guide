import { useState } from "react";
import PageWrapper from "./PageWrapper";

export default function Utils() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSynonyms = async () => {
    const target = word.trim().toLowerCase();

    if (!target) {
      setError("Enter a word first.");
      setSynonyms([]);
      return;
    }

    setLoading(true);
    setError("");
    setSynonyms([]);

    try {
      const res = await fetch(
        `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(target)}`
      );

      if (!res.ok) {
        setError("API returned an error.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        setError("Unexpected API format.");
        setLoading(false);
        return;
      }

      const list = data
        .map(item => item.word)
        .filter(Boolean);

      if (!list.length) {
        setError("No synonyms found for this word.");
        setSynonyms([]);
      } else {
        setSynonyms(list.slice(0, 20));
      }
    } catch {
      setError("Network/API error.");
      setSynonyms([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper title="Utilities">
      <div className="space-y-6 py-2">
        <section className="bg-black/40 border border-slate-700/60 rounded-xl p-5 space-y-4">
          <h2 className="text-xl font-semibold text-slate-100">Synonym finder</h2>
          <p className="text-sm text-slate-300">
            Uses a public API to find English synonyms for a single word.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="flex-1 rounded-lg bg-slate-900/60 border border-slate-700/70 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter a word"
              value={word}
              onChange={e => setWord(e.target.value)}
            />
            <button
              type="button"
              onClick={fetchSynonyms}
              className="sm:w-auto px-4 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-xs font-medium transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>

          {error && <p className="text-xs text-rose-400">{error}</p>}

          {synonyms.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {synonyms.map(s => (
                <span
                  key={s}
                  className="px-2 py-1 rounded-full bg-slate-900/70 border border-slate-700/70 text-slate-100"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageWrapper>
  );
}
