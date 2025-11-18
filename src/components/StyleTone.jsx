import { useState } from "react";
import PageWrapper from "./PageWrapper";

function FormalWordHelper() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSearch(e) {
        e.preventDefault();
        setError("");
        setResults([]);

        const trimmed = input.trim();
        if (!trimmed) {
            setError("Enter a word first.");
            return;
        }

        try {
            setLoading(true);


            const response = await fetch(
                `https://api.datamuse.com/words?ml=${encodeURIComponent(trimmed)}&max=15`
            );

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();

            const blacklist = ["lol", "omg", "kinda", "stuff", "thing", "things"];

            const formalCandidates = data
                .filter((item) => item.word && !item.word.includes(" "))
                .filter((item) => !blacklist.includes(item.word.toLowerCase()))
                .filter((item) => item.word.length >= trimmed.length) 
                .slice(0, 8)
                .map((item) => item.word);

            if (formalCandidates.length === 0) {
                setError("No clearly more formal options were found. Try another word.");
            } else {
                setResults(formalCandidates);
            }
        } catch (err) {
            console.error(err);
            setError("Could not reach the synonym service. Try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mt-6 bg-slate-900/40 border border-slate-700/60 rounded-xl p-4 space-y-3">
            <h3 className="text-lg font-semibold text-slate-100 text-center">
                Formal wording helper (beta)
            </h3>
            <p className="text-sm text-slate-300 text-center">
                Type a casual or neutral word, and you will be granted a formal synonym.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Example: help, good, do, show..."
                    className="flex-1 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-transparent"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? "Searching..." : "Get formal options"}
                </button>
            </form>

            {error && (
                <p className="text-sm text-red-400 text-center">
                    {error}
                </p>
            )}

            {results.length > 0 && (
                <div className="mt-2">
                    <p className="text-sm text-slate-300 mb-1">
                        Suggested formal alternatives:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {results.map((word) => (
                            <span
                                key={word}
                                className="text-sm px-2 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-100"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function StyleTone() {
    return (
        <PageWrapper title="Style & Tone" previousLink="/grammar-wording" nextLink='/common-mistakes'>
            <div className="text-base leading-7 text-slate-300 space-y-6 py-2">
                <p>
                    Style and tone decide how your answers feel to the reader. Even with
                    correct grammar, an application can still sound too casual, too
                    aggressive, or simply unfocused. This section focuses on how to keep
                    your writing calm, professional, and aligned with a structured,
                    rule-driven environment.
                </p>

                <h2 className="text-2xl font-semibold text-slate-100 pt-2">
                    What tone should your application have?
                </h2>
                <p>
                    The ideal tone is controlled and professional. You are not writing a
                    casual chat message and not delivering a courtroom speech either. The
                    goal is to sound like someone who can handle responsibility without
                    overreacting or roleplaying theatrics.
                </p>

                <h3 className="text-xl font-semibold text-slate-100 pt-2">
                    Choosing the right level of formality
                </h3>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Avoid slang, emojis, and gaming expressions — they instantly reduce
                        how serious your answers look.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Use standard, neutral English that could be read in a report or an
                        internal document.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Keep sentences readable — formal does not mean artificially complex
                        or overloaded with rare words.
                    </li>
                </ul>

                <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
                    <p className="text-center text-indigo-400 text-lg">Example</p>
                    <p>❌ “I&apos;m super hyped to join, I&apos;ll go full tryhard.”</p>
                    <p>
                        ✅ “I am motivated to join and ready to treat the role with full
                        seriousness.”
                    </p>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 pt-2">
                    Confident, not arrogant
                </h3>
                <p>
                    Confidence means you describe what you can do in a steady way.
                    Arrogance appears when you overstate yourself, dismiss others, or talk
                    as if the role is already yours by default.
                </p>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Focus on what you have done and can consistently do, not on how
                        “better” you are than other people.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Replace absolute claims with grounded ones: describe skills,
                        experience, and attitude instead of declaring perfection.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Avoid attacking players, factions, or staff decisions in your
                        answers.
                    </li>
                </ul>

                <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
                    <p className="text-center text-indigo-400 text-lg">Example</p>
                    <p>❌ “I&apos;m obviously the best option, others can&apos;t compare.”</p>
                    <p>
                        ✅ “I believe my experience and attitude make me a strong candidate
                        for this position.”
                    </p>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 pt-2">
                    Neutral and controlled under pressure
                </h3>
                <p>
                    Many roles inside structured factions expect you to stay calm when
                    situations escalate. Your writing should reflect that you do not lose
                    control or take things personally.
                </p>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Describe tense situations in a factual way instead of adding insult,
                        mockery, or emotional outbursts.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Show that you focus on procedure and outcome, not on revenge or
                        “teaching someone a lesson”.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Use calm verbs like “addressed”, “resolved”, “de-escalated” instead
                        of aggressive language.
                    </li>
                </ul>

                <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
                    <p className="text-center text-indigo-400 text-lg">Example</p>
                    <p>
                        ❌ “I get angry when people ignore orders and I make sure they
                        regret it.”
                    </p>
                    <p>
                        ✅ “When people ignore orders, I stay calm, repeat the instruction,
                        and follow the appropriate procedure if non-compliance continues.”
                    </p>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 pt-2">
                    Consistent tone across the whole application
                </h3>
                <p>
                    Tone should not jump from extremely serious to joking and back again.
                    Readers should feel like the same person is speaking in every answer.
                </p>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Avoid switching between formal answers and casual one-liners in the
                        same document.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        If a question feels less strict, you can be slightly lighter in
                        style, but still keep it respectful and clear.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Before submitting, read everything from top to bottom and check if
                        it sounds like one steady voice.
                    </li>
                </ul>

                <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
                    <p className="text-center text-indigo-400 text-lg">Example</p>
                    <p>❌ Answer 1: very formal. Answer 2: “idk lol probably yes”.</p>
                    <p>
                        ✅ All answers: slightly different in mood, but still clear,
                        respectful, and consistent.
                    </p>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 pt-2">
                    Common tone problems
                </h3>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Overacting in-character speech that turns the application into a
                        parody instead of a readable document.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Writing as if you are already in command, ordering or judging
                        others.
                    </li>
                    <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                        Sarcasm or passive-aggressive comments about other players, groups,
                        or previous experiences.
                    </li>
                </ul>

                <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
                    <p className="text-center text-indigo-400 text-lg">Example</p>
                    <p>
                        ❌ “Unlike most units, I actually know what I&apos;m doing and won&apos;t
                        embarrass the division.”
                    </p>
                    <p>
                        ✅ “I aim to represent the division in a disciplined and competent
                        way at all times.”
                    </p>
                </div>

                
                <FormalWordHelper />

                <div className="bg-black/40 px-4 py-5 rounded-xl mt-6">
                    <h3 className="text-xl font-semibold text-slate-100 mb-2 text-center">
                        Style & Tone summary
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                        Your application should read like it comes from someone who is calm,
                        structured, and serious about responsibility. Style and tone are not
                        about sounding dramatic — they are about sounding stable. Keep your
                        language neutral, your confidence grounded in real ability, and your
                        attitude respectful, even when you describe conflict or pressure.
                        When the tone is steady from the first answer to the last, reviewers
                        can trust that you will behave the same way in the role itself.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}
