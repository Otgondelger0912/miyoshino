import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuGrid from './components/MenuGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MenuGrid />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
