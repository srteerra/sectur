import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Destinations from './pages/destinations';
import Destination from './pages/destination';
import Experience from './pages/experience';
import ExperienceWedding from './pages/experienceWedding';
import ExperienceAventure from './pages/experienceAventure';
import ExperienceWellness from './pages/experienceWellness';
import ExperienceSustainable from './pages/experienceSustainable';
import ExperienceSunAndBeach from './pages/experienceSunAndBeach';
import Calendario from './pages/calendario';
import InternationalEvents from './pages/internationalEvents';
import Blog from './pages/blog';
import Videos from './pages/videos';
import GuiasTuristicas from './pages/guiasTuristicas'
import DiaMuertos from './pages/diaMuertos';
import TrenMaya from './pages/trenMaya';
import MagicTowns from './pages/magicTowns';
import MariaIslands from './pages/mariaIslands';
import Wines from './pages/wines';
import Post from './pages/blog/post/';
import Mice from './pages/mice';
import Enologia from './pages/enologia';
import Barrios from './pages/barrios';
import CiudadesPatrimonio from './pages/ciudadesPatrimonio';
import PueblosMagicos from './pages/mapaPueblosMagicos';
import MapaPueblos from './pages/mapaPueblosMagicos';
import NewBlog from './pages/nuevoBlog';
import SinglePost from './pages/singleBlog';
import CategoryArticles from './components/newBlogCategoryArticles';
// import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path='/destinos' element={<Destinations />} />
          <Route path='/destinos/:id' element={<Destination />} />
          <Route path='/experiencias/bodas' element={<ExperienceWedding />} />
          <Route path='/experiencias/aventura' element={<ExperienceAventure />} />
          <Route path='/experiencias/bienestar' element={<ExperienceWellness />} />
          <Route path='/experiencias/sostenible' element={<ExperienceSustainable />} />
          <Route path='/experiencias/sol-y-playa' element={<ExperienceSunAndBeach />} />
          <Route path='/experiencias/rutas-gastronomicas' element={<Experience />} />
          <Route path='/experiencias/vinos' element={<Wines />} />
          <Route path='/experiencias/:id' element={<Experience />} />
          <Route path='/calendario' element={<Calendario />} />
          <Route path='/eventos-internacionales' element={<InternationalEvents />} />
          <Route path='/blog' element={<NewBlog />} />
          <Route path='/blog/post/:id' element={<SinglePost />} />
          <Route path="/blog/categoria/:category" element={<CategoryArticles />} />

          <Route path='/videos' element={<Videos />} />
          <Route path='/guias-turisticas' element={<GuiasTuristicas />} />
          <Route path='/dia-de-muertos' element={<DiaMuertos />} />
          <Route path='/tren-maya' element={<TrenMaya />} />
          <Route path="/pueblos-magicos" element={<MagicTowns />} />
          <Route path="/islas-marias" element={<MariaIslands />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/enoturismo" element={<Enologia />} />
          <Route path="/barrios-magicos" element={<Barrios />} />
          <Route path="/ciudades-patrimonio" element={<CiudadesPatrimonio />} />
          <Route path="/mapa-pueblos-magicos" element={<MapaPueblos />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
