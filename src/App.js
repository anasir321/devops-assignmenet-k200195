import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Courses from './components/Courses';
import Certifications from './components/Certificates';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Certifications from './components/Certificates';


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        
          <Route index element={<Home />} />

          <Route path='about' element={<About/>} />
          <Route path='courses' element={<Courses />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='certificates' element={<Certifications />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
 
   
}

export default App;