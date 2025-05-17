import './App.css'
import StudyPage from './page/studyPage';
import NotFound from './page/NotFound';
import About from './page/about/about';
import Tutorial from './page/Tutorial/Tutorial';
import { Routes, Route } from "react-router-dom";
import Update from './page/update/update';
import Dictionary from './page/dictionary/dictionary';
import Login from './page/login/login';
import Lending from './page/lending/lending';
function App() {
  return (
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/learning" element={<StudyPage />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/update" element={<Update />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
