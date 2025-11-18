import RandomPhrase from "./RandomPhrase";
import { Link } from "react-router-dom";

export default function PageWrapper({ title, children, nextLink, previousLink }) {
  const showNavigation = Boolean(previousLink && nextLink);

  return (
    <main className="relative z-10 p-4 sm:p-8 min-h-screen">
      <div
        className="
          w-full max-w-3xl mx-auto bg-slate-900/20 backdrop-blur rounded-xl border border-slate-700/40
          p-4 sm:p-8 mt-8 sm:mt-12
          opacity-0 translate-y-3 animate-page-enter
        "
      >
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center
          after:content-[''] after:block after:h-1 after:w-full after:mt-4 after:rounded-xl after:bg-slate-700"
        >
          {title}
        </h1>

        <div className="text-slate-300 leading-relaxed text-base sm:text-lg">
          {children}
        </div>

        {showNavigation && (
          <div className="relative before:content-[''] before:block before:h-1 before:w-full before:mt-4 before:mb-6 before:rounded-xl before:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between text-lg w-full">
              <Link
                to={previousLink}
                className="px-4 py-2 rounded-lg bg-indigo-600/70 hover:bg-indigo-500 text-white font-medium transition w-full sm:w-auto text-center"
              >
                Previous page
              </Link>

              <p className="text-slate-300 text-center order-[-1] sm:order-none">
                <RandomPhrase />
              </p>

              <Link
                to={nextLink}
                className="px-4 py-2 rounded-lg bg-indigo-600/70 hover:bg-indigo-500 text-white font-medium transition w-full sm:w-auto text-center"
              >
                Next page
              </Link>
            </div>
          </div>
        )}

        <div className="mt-4 text-center text-gray-700 text-sm">
          <p>Made by privatewithak</p>
        </div>
      </div>
    </main>
  );
}
