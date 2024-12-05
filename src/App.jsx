import './App.css'
import Header from "./components/Header/Header"
// import Header from "./components/Header"
import Footer from './components/Footer'
// page content components
import Home from "./pages/Home"
import About from './pages/About'
import {BrowserRouter,Routes,Route} from "react-router-dom"

// component => .jsx
// capitalized for the component
function App() {
  
  return (
<>
      <main>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </main>
    <Footer />

</>
  )
}

export default App
