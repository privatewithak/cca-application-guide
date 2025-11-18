import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import { AnimatedBlobsBackground } from "./components/AnimatedBlobsBackground";
import MainPage from './components/Dashboard';
import IntroductionPage from './components/IntroductionPage';
import GrammarWording from './components/GrammarWording';
import StyleTone from './components/StyleTone';
import CommonMistakes from './components/CommonMistakes';
import ScrollToTop from './components/ScrollToTop.jsx'
import ExamplesBreakdown from './components/Examples.jsx';
import Utils from './components/Utils.jsx'
function App() {
  console.log('hey C17 player go touch some grass')
  return (
    <>
    
      <Navbar />
      <ScrollToTop />
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
  [background-size:40px_40px]">
        <AnimatedBlobsBackground />
              <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/introduction' element={<IntroductionPage />} />
          <Route path='/grammar-wording' element={<GrammarWording />} />
          <Route path='/style-tone' element={<StyleTone />} />
          <Route path='/common-mistakes' element={<CommonMistakes />} />
          <Route path='/examples' element={<ExamplesBreakdown />} />
          <Route path='/utils' element={<Utils />} />
      </Routes>
      </div>
    </>
  )
}

export default App
