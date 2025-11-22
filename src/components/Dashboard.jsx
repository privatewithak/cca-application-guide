import { Link } from "react-router-dom";


function MainPage() {
    return (
      <main className="relative z-10 p-8 min-h-screen flex justify-center items-center">
          <div className="bg-slate-900/10 backdrop-blur border-b border border-slate-700/40 rounded-xl px-6 py-3 min-w-4/10 text-center  opacity-0 translate-y-3 animate-page-enter">
            <div>
    <h2 className="relative text-3xl after:content-[''] after:block after:h-[2px] after:w-full after:mt-4 after:bg-slate-700 py-4">
                Dashboard
              </h2>
            </div>
            <div className='py-2 text-lg mb-4'>
              <p>This site serves as an unofficial guide to writing applications in the Universal Union group.</p>
              <p>Although it doesn't contain any <strong>direct answers</strong> it consists of grammar, style, wording, etc. advices.</p>
              <p>Pieces of information are divided into several pages with relevant names. They are provided below. Click a card to be redirected.</p>
            </div>

<div className="relative bg-black/10 py-6 rounded-2xl px-7">
  <div className="      flex flex-col sm:flex-row
      gap-6
      overflow-x-visible sm:overflow-x-auto
      scrollbar-thin scrollbar-thumb-slate-700/40 scrollbar-track-transparent
      py-2 px-3">

    {/* 1 */}
    <Link
      to="/introduction"
      className="
  w-full sm:min-w-[260px] sm:max-w-[260px]
  bg-slate-800/30 backdrop-blur-xl
  rounded-2xl border border-slate-700/40
  p-5
  shadow-md
  hover:shadow-indigo-500/20 hover:shadow-lg
  hover:bg-slate-800/50
  hover:-translate-y-1 hover:scale-[1.01]
  transition duration-200 ease-out
      "
    >
      <h3 className="text-lg font-semibold mb-2">Introduction</h3>
      <p className="text-slate-300 text-sm">Basics of the application process.</p>
    </Link>

    {/* 2 */}
    <Link
      to="/grammar-wording"
      className="
  w-full sm:min-w-[260px] sm:max-w-[260px]
  bg-slate-800/30 backdrop-blur-xl
  rounded-2xl border border-slate-700/40
  p-5
  shadow-md
  hover:shadow-indigo-500/20 hover:shadow-lg
  hover:bg-slate-800/50
  hover:-translate-y-1 hover:scale-[1.01]
  transition duration-200 ease-out
      "
    >
      <h3 className="text-lg font-semibold mb-2">Grammar & Wording</h3>
      <p className="text-slate-300 text-sm">Clean, readable phrasing tips.</p>
    </Link>

    {/* 3 */}
    <Link
      to="/style-tone"
      className="
  w-full sm:min-w-[260px] sm:max-w-[260px]
  bg-slate-800/30 backdrop-blur-xl
  rounded-2xl border border-slate-700/40
  p-5
  shadow-md
  hover:shadow-indigo-500/20 hover:shadow-lg
  hover:bg-slate-800/50
  hover:-translate-y-1 hover:scale-[1.01]
  transition duration-200 ease-out
      "
    >
      <h3 className="text-lg font-semibold mb-2">Style & Tone</h3>
      <p className="text-slate-300 text-sm">Matching Combine tone naturally.</p>
    </Link>

    {/* 4 */}
    <Link
      to="/common-mistakes"
      className="
  w-full sm:min-w-[260px] sm:max-w-[260px]
  bg-slate-800/30 backdrop-blur-xl
  rounded-2xl border border-slate-700/40
  p-5
  shadow-md
  hover:shadow-indigo-500/20 hover:shadow-lg
  hover:bg-slate-800/50
  hover:-translate-y-1 hover:scale-[1.01]
  transition duration-200 ease-out
      "
    >
      <h3 className="text-lg font-semibold mb-2">Common Mistakes</h3>
      <p className="text-slate-300 text-sm">Fix issues that get applications denied.</p>
    </Link>

    {/* 5 */}
    <Link
      to="/examples"
      className="
  w-full sm:min-w-[260px] sm:max-w-[260px]
  bg-slate-800/30 backdrop-blur-xl
  rounded-2xl border border-slate-700/40
  p-5
  shadow-md
  hover:shadow-indigo-500/20 hover:shadow-lg
  hover:bg-slate-800/50
  hover:-translate-y-1 hover:scale-[1.01]
  transition duration-200 ease-out
      "
    >
      <h3 className="text-lg font-semibold mb-2">Examples & Breakdown</h3>
      <p className="text-slate-300 text-sm">Annotated explanations.</p>
    </Link>

  </div>
                </div>
                <div className="mt-4 text-center text-gray-700">
            <p>Made by privatewithak &copy; {new Date().getFullYear()}</p>
            <p>You have a suggestion or found a bug? DM me through Discord.</p>
        </div>
  </div>
</main>
    )
}

export default MainPage;