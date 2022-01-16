
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './Components/Pages';
import Mail from './Components/Pages/Mail'
function App() {
  return (
    <div>
        
        <BrowserRouter>
            <Routes>
            <Route path = "/" element = {<Home/>} />
              <Route path = "/LetsWorkTogether" element = {<Mail/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
