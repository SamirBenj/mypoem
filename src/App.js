import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/homepage';
import AboutPage from './screens/about';
import TravelPage from './screens/travelpage';
import TestSlide from './components/testVertical';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/home" element={<HomePage/>}/>
          <Route  path="/about" element={<AboutPage/>}/>
          <Route  path="/travel" element={<TravelPage/>}/>
          <Route  path="/test" element={<TestSlide/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
