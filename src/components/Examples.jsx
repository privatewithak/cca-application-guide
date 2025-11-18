import PageWrapper from "./PageWrapper";

export default function ExamplesBreakdown() {
  return (
    <PageWrapper
      title="Examples & Breakdown"
      previousLink="/common-mistakes"
      nextLink="/"
    >
      <div className="text-base leading-7 text-slate-300 space-y-6 py-2">

        <p>
          This section shows full example answers with breakdowns. 
          Each one follows the rules from previous pages: clear grammar, 
          neutral tone, and focused, relevant content. Use them as structure 
          references, not as templates to copy.
        </p>

        {/* Q1 */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          Example 1 — Motivation for joining
        </h2>
        <p className="italic text-slate-400">
          Question: “Why do you want to join this division?”
        </p>

        <div className="grid gap-4 md:grid-cols-2 pt-2">
          {/* Weak answer */}
          <div className="bg-black/50 px-3 py-4 rounded-xl">
            <p className="text-center text-red-400 font-semibold mb-2">Weak answer</p>
            <p>
              “I want to join because I really like this division and it looks cool. 
              I think I would have fun and I always wanted to be part of something like this. 
              I also like the armor and the way members act in-game.”
            </p>

            <h4 className="text-sm font-semibold text-slate-100 mt-3">
              Why this is weak
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Focuses on appearance (“cool”, “armor”) instead of duties and responsibility.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Uses emotional wording (“have fun”) instead of structured motivation.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                No mention of procedures, enforcement, or how the applicant will actually contribute.
              </li>
            </ul>
          </div>

          {/* Strong answer */}
          <div className="bg-black/50 px-3 py-4 rounded-xl">
            <p className="text-center text-emerald-400 font-semibold mb-2">Stronger answer</p>
            <p>
              “I want to join this division because I am interested in consistent, 
              procedure-based enforcement work. I enjoy operating in a structured 
              environment where decisions are guided by regulation instead of 
              impulse. The division&apos;s focus on stability, discipline, and 
              internal order matches how I already approach situations in-game. 
              I believe I can support the unit by applying regulations fairly, 
              remaining calm under pressure, and assisting with internal oversight 
              when required.”
            </p>

            <h4 className="text-sm font-semibold text-slate-100 mt-3">
              Why this is stronger
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Focuses on duties: enforcement, structure, regulation, internal order.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Uses neutral, precise vocabulary instead of emotional language.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Shows how the applicant thinks and behaves under pressure.
              </li>
            </ul>
          </div>
        </div>

        {/* Q2 */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-6">
          Example 2 — Handling a difficult situation
        </h2>
        <p className="italic text-slate-400">
          Question: “Describe a situation where you had to maintain order or de-escalate a problem.”
        </p>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-2">
          <p className="text-center text-red-400 font-semibold mb-2">Weak answer</p>
          <p>
            “Once there was a big mess and people were arguing and I just told them 
            to stop and they listened to me because I was confident, and everything 
            was fine after that and there were no more issues.”
          </p>

          <h4 className="text-sm font-semibold text-slate-100 mt-3">
            Problems with this answer
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              Vague: no clear context, no explanation of what “mess” actually was.
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              Overconfident tone (“they listened to me because I was confident”).
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              No structure: no clear start, process, or outcome.
            </li>
          </ul>
        </div>

        <div className="bg-black/50 px-3 py-4 rounded-xl">
          <p className="text-center text-emerald-400 font-semibold mb-2">Stronger answer</p>
          <p>
            “During one event, several players started arguing in the checkpoint area, 
            which disrupted communication and movement. I first asked both sides to 
            stop speaking over each other and explained that the area had to remain 
            functional. I then separated them into different voice/text channels and 
            listened to each side individually. After clarifying the misunderstanding, 
            I reminded them of the basic conduct rules and moved them back once they 
            agreed to continue calmly. The situation stabilized, and the checkpoint 
            remained operational without further conflict.”
          </p>

          <h4 className="text-sm font-semibold text-slate-100 mt-3">
            Why this is stronger
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              Clear context: what happened, where it happened, and why it was a problem.
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              Shows concrete steps: separating sides, listening, clarifying, reminding rules.
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
              Describes outcome: the situation stabilized and operations continued.
            </li>
          </ul>

          <div className="mt-3 border-t border-slate-700/60 pt-3">
            <p className="font-semibold text-slate-100 text-sm mb-1">
              Structure pattern
            </p>
            <p className="text-sm">
              <span className="font-bold">Situation → Action → Result</span>: 
              brief context, clear steps, and final effect on stability.
            </p>
          </div>
        </div>

        {/* Q3 */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-6">
          Example 3 — Dealing with mistakes and feedback
        </h2>
        <p className="italic text-slate-400">
          Question: “How do you react to mistakes or feedback about your behavior?”
        </p>

        <div className="grid gap-4 md:grid-cols-2 pt-2">
          <div className="bg-black/50 px-3 py-4 rounded-xl">
            <p className="text-center text-red-400 font-semibold mb-2">Weak answer</p>
            <p>
              “I don&apos;t really make big mistakes and if I do then it&apos;s usually 
              not my fault, but I still try to explain my side so people understand me.”
            </p>

            <h4 className="text-sm font-semibold text-slate-100 mt-3">
              Issues
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Defensive tone (“not my fault”).
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                No acceptance of responsibility or willingness to adjust.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Suggests conflict instead of cooperation with feedback.
              </li>
            </ul>
          </div>

          <div className="bg-black/50 px-3 py-4 rounded-xl">
            <p className="text-center text-emerald-400 font-semibold mb-2">Stronger answer</p>
            <p>
              “If I make a mistake, I acknowledge it and focus on correcting the behavior 
              instead of arguing. I listen to the feedback fully, ask short clarifying 
              questions if needed, and then adjust how I act in similar situations. 
              I treat feedback as part of maintaining stable performance, not as a 
              personal attack.”
            </p>

            <h4 className="text-sm font-semibold text-slate-100 mt-3">
              Why this works
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Shows responsibility and readiness to improve.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Uses neutral wording, not emotional or defensive language.
              </li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
                Connects feedback to long-term stability and performance.
              </li>
            </ul>
          </div>
        </div>

        {/* Mini toolkit */}
        <h2 className="text-2xl font-semibold text-slate-100 pt-6">
          Turning your own answers into stronger ones
        </h2>
        <p>
          When rewriting your answer, try to apply a simple checklist:
        </p>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
            Replace emotional or casual phrases with neutral, precise wording.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
            Add structure: context → what you did → why it mattered.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
            Remove repetition and filler; keep only the parts that carry information.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-500">
            Check if your tone stays stable, controlled, and appropriate for a formal application.
          </li>
        </ul>

              {/* Summary */}
              <div className="bg-black/40 px-4 py-5 rounded-xl mt-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-2 text-center">
          Summary
        </h3>
        <p>
          Strong answers are not about sounding complex — they are about being clear, 
          structured, and relevant. If you explain what happened, what you did, and 
          how it affected stability or order, while keeping a neutral tone, your 
          application will already stand above most others.
                  </p>
                  </div>
      </div>
    </PageWrapper>
  );
}
