import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SEOPanels from './components/SEOPanels'
import Teleprompter from './components/Teleprompter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SEOPanels />
        <Teleprompter />
      </main>
      <Footer />
    </div>
  )
}

export default App
