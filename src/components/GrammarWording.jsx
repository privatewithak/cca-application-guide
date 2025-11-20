import PageWrapper from "./PageWrapper";


export default function GrammarWording() {
  return (
    <PageWrapper title="Grammar & Wording" previousLink="/introduction" nextLink='/style-tone' >
      <div className="text-base leading-7 text-slate-300 space-y-6 py-2">
        <p>
          Good grammar and clear wording are essential for any strong
          application. They shape how your ideas are understood and how
          confidently you present yourself within the application. This section
          gives you the tools to write in a way that is stable, readable, and
          consistent — without unnecessary complexity. Even small adjustments in
          phrasing can make your application feel more disciplined and easier to
          follow, which is exactly what reviewers expect.
        </p>

        <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          Grammar basics
        </h2>
        <p>
          Applications often fail not because of weak ideas, but because of
          unclear grammar. The rules below cover the foundations: article
          usage, verb tenses, sentence structure, and the small details that
          make your writing feel intentional instead of rushed.
        </p>

        {/* 1. ARTICLES */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Using articles &apos;a/an/the&apos; correctly
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use <strong>a/an</strong> when referring to something general or
            not yet introduced: &quot;a protocol&quot;, &quot;an
            officer&quot;.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use <strong>the</strong> when the thing is specific, unique, or
            already mentioned earlier in the text.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Keep article usage consistent — missing or random articles make your
            writing look unedited.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>
          <p>❌ “I reviewed protocol and followed instructions.”</p>
          <p>
            ✅ “I reviewed <strong>the</strong> protocol and followed{" "}
            <strong>the</strong> instructions.”
          </p>

          <p className="mt-2">❌ “I met courier today.”</p>
          <p>
            ✅ “I met <strong>a</strong> courier today.”
          </p>
        </div>

        {/* 2. TENSES */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Keep verb tenses logical and stable
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use present simple to describe your current skills and traits: “I
            maintain discipline”, “I follow procedures”.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use past tense strictly for completed actions: “I assisted during
            several previous operations.”
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Do not jump between past and present tense without a clear reason or
            timeline change.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I assist the team yesterday and I maintain order during events.”</p>
          <p>
            ✅ “I assisted the team yesterday, and I currently maintain order
            during events.”
          </p>

          <p className="mt-2">
            ❌ “I understand procedures and I was reacting quickly.”
          </p>
          <p>
            ✅ “I understand procedures and I react quickly when required.”
          </p>
        </div>

        {/* 3. LONG CHAINS */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Avoid long sentence chains
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Split sentences that contain several different actions or reasons
            into separate statements.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Avoid chains built with &quot;and then… also… because…&quot; all in
            one line.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Short, focused sentences read more confident and controlled than one
            oversized block.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>
            ❌ “I joined the meeting and then assisted my colleague because he needed support and also I wanted to help.”
          </p>
          <p>
            ✅ “I joined the meeting and supported my colleague. He needed assistance, and I provided it effectively.”
          </p>
        </div>

        {/* 4. FILLERS */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Avoid using personal fillers
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Remove reflexive fillers like “I think”, “I guess”, “maybe”, “I feel
            like” in formal answers — they weaken otherwise strong points.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Turn them into clear statements: “I think I can manage tasks” → “I
            am capable of managing tasks.”
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use uncertainty only when you actually need to describe a limitation
            or unknown factor.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I think I could maybe handle stressful tasks if needed.”</p>
          <p>✅ “I am capable of handling stressful tasks consistently.”</p>

          <p className="mt-2">❌ “I guess I understand most procedures.”</p>
          <p>✅ “I am familiar with the required procedures.”</p>
        </div>

        {/* 5. PLURALS / SINGULAR */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Use singular and plural forms correctly
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Add <strong>-s</strong> or <strong>-es</strong> to countable nouns
            when talking about more than one: “tasks”, “situations”,
            “procedures”.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Match plural nouns with plural verbs: “there are situations”, not
            “there is situations”.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Be careful with uncountable nouns like “information” or
            “equipment” — they do not take plural forms.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “There is many situation where I helped.”</p>
          <p>✅ “There are many situations where I helped.”</p>

          <p className="mt-2">❌ “I provided several informations to the team.”</p>
          <p>✅ “I provided several pieces of information to the team.”</p>
        </div>

        {/* 6. DOUBLE SUBJECTS */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Avoid double subjects
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use one clear subject per action unless there is a strong stylistic
            reason to do otherwise.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Avoid constructions like “Me, I…”, “I myself I…”, which feel
            repetitive and informal in applications.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            If you need to emphasise yourself, keep it minimal: “I personally
            ensured…” is usually enough.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “Me, I was the one who handled the situation.”</p>
          <p>✅ “I handled the situation.”</p>

          <p className="mt-2">❌ “I myself I ensured everything was in order.”</p>
          <p>✅ “I personally ensured everything was in order.”</p>
        </div>

        {/* 7. PRONOUN CLARITY */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Keep pronouns clear
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Make sure it is obvious who or what “he”, “they”, or “it” refers to
            in each sentence.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            If a pronoun could refer to more than one thing, repeat the noun to
            avoid confusion.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            In longer explanations, occasionally restate the subject so the
            reader does not lose track.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>
            ❌ “I assisted the manager and the coordinator, and he thanked me afterwards.”
          </p>
          <p>✅ “I assisted the manager and the coordinator, and the manager thanked me afterwards.”</p>

          <p className="mt-2">❌ “I followed the protocol and it helped.”</p>
          <p>✅ “I followed the protocol, and the protocol helped to keep the situation stable.”</p>
        </div>

        {/* 8. COMMAS */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Use commas where they actually help
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Place commas after introductory words like “However”, “Therefore”,
            “In addition” at the start of a sentence.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Avoid adding commas randomly in the middle of simple sentences
            without need.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            If removing the comma does not change the rhythm or clarity, it may
            be unnecessary.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “However I remained calm and I continued the procedure.”</p>
          <p>✅ “However, I remained calm and continued the procedure.”</p>

          <p className="mt-2">❌ “I responded quickly, and maintained order, during the meeting.”</p>
          <p>✅ “I responded quickly and maintained order during the meeting.”</p>
        </div>

        {/* 9. CAPITALIZATION */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Use consistent capitalization
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Capitalize proper nouns, division names, ranks, and factions:
            “Civil Protection”, “JURY”, “Division Leader”.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Do not capitalize normal nouns like “application”, “experience”,
            “responsibility” in the middle of a sentence.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Avoid writing whole sentences or answers in full caps unless it is
            an acronym.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I want to join Project Management and show my Responsibility.”</p>
          <p>✅ “I want to join the Project Management team and show my responsibility.”</p>

          <p className="mt-2">❌ “I AM READY TO FOLLOW ALL PROTOCOLS.”</p>
          <p>✅ “I am ready to follow all protocols.”</p>
        </div>

        {/* 10. VOCABULARY */}
        <h3 className="text-xl font-semibold text-slate-100 pt-2">
          Keep vocabulary neutral and precise
        </h3>
        <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Prefer neutral, precise verbs like “maintain”, “ensure”, “assist”,
            “observe”, “demonstrate” instead of vague ones like “do” or “make”.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Avoid slang, memes, and gaming terms in formal answers, even if the
            community uses them casually elsewhere.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Do not overload sentences with overly complex words just to sound
            formal — clarity always has priority.
          </li>
        </ul>

        <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I wanna make stuff for the company and do important things.”</p>
          <p>
            ✅ “I focus on completing tasks carefully and keeping my actions consistent.”
          </p>

          <p className="mt-2">❌ “I will giga-tryhard every situation.”</p>
          <p>✅ “I will treat every situation seriously and with full attention.”</p>
              </div>
              <h2 className="text-2xl font-semibold text-slate-100 pt-4">
          Weak vs Strong phrasing
              </h2>
              <p>
                  Weak wording makes your answers sound unsure or unfocused. Strong wording is clear, direct, and specific while still remaining polite.
              </p>
                      <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p>❌ “I will try my best to follow rules.”</p>
          <p>
            ✅ “I consistently follow rules and maintain discipline.”
          </p>

          <p className="mt-2">❌ “I like how things work here.”</p>
          <p>✅ “I am comfortable working within clear rules and predictable routines.”</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 pt-2">Building clear sentences</h3>
              <p>A good sentence usually answers three things: what you did, how you did it, and why it mattered.</p>
                                    <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
          <p className="text-center text-indigo-400 text-lg">Example</p>

          <p className="font-bold">Action + method + outcome</p>
          <p>
            “I assisted the coordinator by monitoring the databases during an attack, which helped keep the situation controlled.”
          </p>

          <p className="mt-2 font-bold">Skill + context + effect</p>
          <p>“I remain calm under pressure, which allows me to react quickly during unexpected situations.”</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 pt-2">Connectors that make your text flow</h3>
              <p>Connectors help your writing feel intentional instead of random. They show how one idea leads into the next.</p>
                      <ul className="space-y-1">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use 'However' for contrast.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
            Use 'Therefore' for logical result.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                      Use 'Moreover' for adding support.
                  </li>
                            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
                      Use 'As a result' for consequence.
          </li>
              </ul>
              <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
  <p className="text-center text-indigo-400 text-lg">Example</p>
  <p className="mb-1">
    ❌ “I had little experience before. I adapted quickly to the procedures. I kept the situation stable.”
  </p>
  <p>
    ✅ “I had little experience before. However, I adapted quickly to the procedures and kept the situation stable.”
  </p>

  <p className="mt-3 mb-1">
    ❌ “I know the regulations well. I can enforce them consistently.”
  </p>
  <p>
    ✅ “I know the regulations well. Therefore, I can enforce them consistently.”
  </p>

  <p className="mt-3 mb-1">
    ❌ “I coordinated with the rest of the team. The situation remained under control.”
  </p>
  <p>
    ✅ “I coordinated with the rest of the team. As a result, the situation remained under control.”
  </p>

  <p className="mt-3 mb-1">
    ❌ “I followed the protocol. I also supported my unit during the event.”
  </p>
  <p>
    ✅ “I followed the protocol. Moreover, I supported my unit throughout the event.”
  </p>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 pt-2">Active vs passive voice</h3>
              <p>Active voice is usually clearer: you show who did what. Passive voice can be useful when the action is more important than the person.</p>
                            <div className="bg-black/50 px-3 py-4 rounded-xl mt-3">
  <p className="text-center text-indigo-400 text-lg">Example</p>


  <p className="font-bold">
    Active
  </p>
  <p>
    “I enforced the protocol during the situation.”
  </p>

  <p className="mt-3 mb-1 font-bold">
    Passive
  </p>
  <p>
    “The protocol was enforced during the situation.”
  </p>
              </div>
          </div>
          <p>You should use active voice for example, showing your responsibility. While the passive voice is intended for more of a neutral, reporting phrases.</p>
          <h3 className="text-xl font-semibold text-slate-100 pt-4 pb-4">Remove unnecessary wording</h3>
          <p>Many sentences can be shorter without losing meaning. Shorter does not mean less serious — it means more focused.</p>
          <ul className="space-y-1">
  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Remove padding phrases like “in my opinion”, “I personally think”, or “I believe that” — they don’t add meaning.
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Cut introductory fillers such as “I will now explain…” or “Below you can see…” — just give the information directly.
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Replace long, over-explained sentences with shorter versions that keep the same meaning.
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Avoid repeating the same idea twice in different forms — say it once, clearly.
  </li>
</ul>

          <h3 className="text-xl font-semibold text-slate-100 pt-4 pb-4">Checklist</h3>
          <p className="pb-3">Always ask yourself questions akin to those below, before writing.</p>
          <ul className="space-y-1">
  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Is the sentence clear about what I did or meant to explain?
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Can I remove 2–3 words without losing meaning?
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Did I avoid weak fillers like “I think”, “maybe”, “kinda”, or “I guess”?
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Is my vocabulary precise, or am I using generic words like “good”, “nice”, “helpful”?
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Do my sentences connect logically, using transitions when needed?
  </li>

  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-slate-400">
    Does the tone stay neutral, controlled, and appropriate for an application?
  </li>
      </ul>
      <div className="bg-black/40 px-4 py-5 rounded-xl mt-6">
            <h3 className="text-xl font-semibold text-slate-100 mb-2 text-center">
    Summary
  </h3>
  <p className="text-slate-300 leading-relaxed">
    Clear grammar and precise wording turn your application from “readable” into 
    “professional”. The rules in this section help you keep your sentences structured, 
    your tone controlled, and your ideas easy to follow. Articles, tenses, sentence 
    length, fillers, specificity, and overall clarity all work together to shape how 
    confidently your writing is received. When your phrasing is concise, stable, and 
    intentional, reviewers can focus on the strength of your ideas instead of struggling 
    to interpret your meaning. </p>
    </div>
    </PageWrapper>
  );
}
