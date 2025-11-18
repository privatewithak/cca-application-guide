import PageWrapper from "../components/PageWrapper";


export default function IntroductionPage() {
  


  return (
    <PageWrapper title="Introduction" nextLink='/grammar-wording' previousLink='/'>
      <div className="text-base leading-7 text-slate-300 space-y-6 py-2 ">

        <p>
          The purpose of this guide is to help you understand how to write clean, structured,
          and convincing applications. This page introduces
          the core idea behind the guide: you are not here to memorize “correct answers,” but to
          learn the logic, tone, and structure that make an application strong and readable.
        </p>

        <p>
          Although the expected level of formality may vary between different applications, this
          guide provides a consistent writing approach that fits nearly every scenario. Before 
          moving on to more specific topics, you should understand the principles behind how the 
          application process works at its foundation.
        </p>

        
        <h2 className="text-xl font-semibold text-slate-100 pt-4">What an Application Really Is</h2>
        <p>
          An application is not a puzzle you must solve, nor a set of hidden answers you need to
          guess. It is a clear display of how you think, structure information, and communicate
          within the tone of absolute discipline. Reviewers examine applications to see
          your clarity, consistency, and ability to express ideas in a stable and disciplined way.
          Your writing is the real content — the questions simply reveal how you think.
        </p>

        
        <h2 className="text-xl font-semibold text-slate-100 pt-2">How the Reviewers See You</h2>
        <p>
          Reviewers approach every application with the same goal: to understand who they are 
          evaluating. Clear sentences show discipline. A proper tone shows awareness of the setting.
          Consistent structure shows reliability. If your writing is messy, overly dramatic, or
          filled with unnecessary complexity, it becomes noticeable immediately. Reviewers look for
          clarity, maturity, and a stable understanding of the world you're applying for.
        </p>

        
        <h2 className="text-xl font-semibold text-slate-100 pt-2">What This Guide Will NOT Do</h2>
        <p>
          This guide does not provide direct answers to application questions. It will not give you
          ready-made responses to copy, nor will it guarantee acceptance. Instead, it focuses on the
          skills that truly matter: clean grammar, a stable tone, structured thinking, and the habits
          that reviewers want to see. You will still need to form your own ideas and express your own
          understanding — this guide exists to support your writing, not replace it.
        </p>

        
        <h2 className="text-xl font-semibold text-slate-100 pt-2">What You Should Already Know</h2>
        <p className="pb-4">
          Before continuing, you should already understand the basics of the Universal Union setting, regulations
          and have enough English proficiency to express your thoughts clearly. You do not need
          perfect grammar or advanced vocabulary. What you need is the ability to form coherent
          sentences, describe ideas, and read text with moderate attention. This guide builds on the
          foundation you already have — it does not replace it.
        </p>
      </div>
    </PageWrapper>
  );
}
