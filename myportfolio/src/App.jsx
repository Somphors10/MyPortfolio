
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Service from './components/Service'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App
