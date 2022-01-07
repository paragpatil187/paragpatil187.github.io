
import './App.css';
//import Layout from './compoents/Layout';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
//import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         
             <Routes>

                   <Route path='/' element={<Home/>}/>
                   <Route path='/projects' element={<Projects/>}/>
                   <Route path='/about' element={<About/>}/>
                   <Route path='/contact' element={<Contact/>}/>

             </Routes>

         </BrowserRouter>

    </div>
  );
}

export default App;
