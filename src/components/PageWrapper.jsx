import RandomPhrase from "./RandomPhrase";
import { Link } from "react-router-dom";

export default function PageWrapper({ title, children, nextLink, previousLink }) {
  const showNavigation = Boolean(previousLink && nextLink);

  return (
    <main className="relative z-10 p-8 min-h-screen">
      <div
        className="
          max-w-3xl mx-auto bg-slate-900/20 backdrop-blur rounded-xl border border-slate-700/40 p-8 mt-12
          opacity-0 translate-y-3
          animate-page-enter
        "
      >
        <h1 className="text-3xl font-semibold mb-6 after:content-[''] after:block after:h-1 after:w-full after:mt-4 after:rounded-xl after:bg-slate-700 text-center">
          {title}
        </h1>

        <div className="text-slate-300 leading-relaxed">{children}</div>

        {showNavigation && (
          <div className="relative before:content-[''] before:block before:h-1 before:w-full before:mt-3 before:mb-6 before:rounded-xl before:bg-slate-700">
            <div className="flex items-center justify-between text-lg w-full">
              <Link
                to={previousLink}
                className="px-4 py-2 rounded-lg bg-indigo-600/70 hover:bg-indigo-500 text-white font-medium transition min-w-[140px] text-center"
              >
                Previous page
              </Link>
              <p className="absolute left-1/2 -translate-x-1/2 text-slate-300 text-center">
                <RandomPhrase />
              </p>
              <Link
                to={nextLink}
                className="px-4 py-2 rounded-lg bg-indigo-600/70 hover:bg-indigo-500 text-white font-medium transition min-w-[140px] text-center"
              >
                Next page
              </Link>
            </div>
          </div>
        )}

        <div className="mt-2 text-center text-gray-700">
          <p>Made by privatewithak</p>
        </div>
      </div>
    </main>
  );
}
