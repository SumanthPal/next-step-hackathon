import './App.css';
import Home from './components/home/home.component'
import {Routes, Route} from 'react-router-dom';
import Results from './Results'
function App() {
  return (
    <body>
    <div className="App">
      <Routes>
        <Route path = '/results' element = { <Results />} />
        <Route index element = {<Home />} />
      </Routes>  
    </div>
    </body>
  );
}

export default App;
