import PageWrapper from "./PageWrapper";

export default function CommonMistakes() {
  return (
    <PageWrapper
      title="Common Mistakes"
      previousLink="/style-tone"
      nextLink="/examples"
    >
      <div className="text-base leading-7 text-slate-300 space-y-6 py-2">

        <p>
          This section lists the mistakes that most frequently lead to weak or denied applications. 
          They are easy to avoid if you know what to look for. Each mistake below includes simple 
          explanations and small example cards showing the incorrect and corrected version.
        </p>

        {/* 1 — Irrelevant content */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          1. Adding irrelevant or personal stories
        </h2>
        <p>
          Reviewers want structured, relevant information. Personal anecdotes, random experiences, 
          or unrelated details only distract from your application and make it look unfocused.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I once built a massive LEGO spaceship when I was nine, it had like fifty tiny chairs inside.”</p>
          <p>✅ “I can organize complex tasks into clear, manageable steps.”</p>
        </div>

        {/* 2 — Emotional or dramatic wording */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          2. Using emotional or dramatic wording
        </h2>
        <p>
          Strong emotions weaken the tone. Applications should sound calm, neutral, and controlled — 
          not dramatic, desperate, or overexcited.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I live for busy days where everything is crazy and non-stop.”</p>
          <p>✅ “Busy days are manageable for me as I track priorities and work through them methodically.”</p>
        </div>

        {/* 3 — Overexplaining or repeating */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          3. Repeating the same point multiple times
        </h2>
        <p>
          Many applicants repeat the same ideas using slightly different sentences. This makes the 
          application longer but not better. State your point once — clearly.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>
            ❌ “I follow rules and I always listen to rules and also I make sure to follow all rules during situations.”
          </p>
          <p>
            ✅ “I consistently follow the required rules during all situations.”
          </p>
        </div>

        {/* 4 — Copy-paste templates */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          4. Using copy-paste templates or generic text
        </h2>
        <p>
          Generic template-like answers are easy to spot. They show no personal effort, no understanding, 
          and no connection to the environment.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I always end up fixing everyone’s mistakes because I’m the only responsible one.”</p>
          <p>✅ “When errors occur, I point them out calmly and help colleagues correct them.”</p>
        </div>

        {/* 5 — Overconfidence or roleplay phrasing */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          5. Using overconfident or RP-heavy phrasing
        </h2>
        <p>
          Avoid “tough guy” language, in-character speeches, or exaggerated confidence. Applications are 
          evaluated in a neutral, real-world context — not inside roleplay.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I will eliminate all resistance and bring order to the streets.”</p>
          <p>✅ “I remain calm, follow procedures, and apply regulation when required.”</p>
        </div>

        {/* 6 — Overly complex vocabulary */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          6. Overusing complex or dramatic vocabulary
        </h2>
        <p>
          Trying too hard to “sound formal” creates awkward, unnatural sentences. The best phrasing is 
          precise, simple, and stable — not theatrical.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I shall endeavor to execute utmost magnificence within my operational obligations.”</p>
          <p>✅ “I carry out my operational obligations consistently and with attention.”</p>
        </div>

        {/* 7 — Writing in bullet-point fragments */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          7. Writing answers as point-lists instead of sentences
        </h2>
        <p>
          Applications should read like coherent text, not like short bullet lists. Reviewers want full 
          sentences explaining your actions and reasoning.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “Calm. Disciplined. Good at teamwork.”</p>
          <p>✅ “I remain calm, disciplined, and capable of effective teamwork.”</p>
        </div>

        {/* 8 — Being too short or incomplete */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          8. Giving answers that are too short or lack explanation
        </h2>
        <p>
          One-sentence answers feel rushed and unreflective. Applications should show structured reasoning 
          and awareness — not minimal effort.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “Night shifts are cool and kind of dramatic, that’s why I want them.”</p>
          <p>✅ “Night shifts work for me because I’m alert at late hours and used to that rhythm.”</p>
        </div>

        {/* 9 — Writing like a conversation */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          9. Writing casually or conversationally
        </h2>
        <p>
          Slang, memes, or everyday chat wording instantly break the formal tone reviewers expect. Even 
          mild casual phrasing can lower the application’s quality.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I’m chill, I can handle stuff pretty well tbh.”</p>
          <p>✅ “I can handle tasks consistently and remain stable under pressure.”</p>
        </div>

        {/* 10 — Overpromising */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          10. Overpromising unrealistic abilities
        </h2>
        <p>
          Applicants often say they “never make mistakes”, “always stay perfect”, or "will be the best". 
          This sounds unrealistic and inexperienced. Reviewers prefer grounded, stable self-evaluation.
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl mb-4">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I never fail and I will be perfect in every situation.”</p>
          <p>✅ “I maintain discipline and adjust quickly when unexpected situations appear.”</p>
        </div>
        <div className="bg-black/40 px-4 py-5 rounded-xl mt-6">
        {/* Summary */}
        <h3 className="text-xl font-semibold text-slate-100 mb-2 text-center">
          Summary
        </h3>
        <p>
          Most application mistakes come from unclear tone, irrelevant content, or unstable phrasing. 
          Keeping answers neutral, precise, and properly structured ensures that reviewers focus on the 
          strength of your reasoning rather than the flaws in presentation.
        </p>
    </div>
      </div>
    </PageWrapper>
  );
}
