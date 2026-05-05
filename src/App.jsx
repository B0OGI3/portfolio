import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built with React · Deployed on Vercel</p>
      </footer>
    </>
  )
}

export default App
