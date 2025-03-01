import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './pages/Background'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const AllProjects = lazy(() => import('./pages/AllProjects'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))

function App() {
  return (
    <div className="">
      <Router>
        <Background />
        <div className="relative min-h-screen">
          <Navbar />
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/Work" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App
