import './App.css';
import Create from './components/Create/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Read from './components/Read/Read';
import Update from './components/Update/Update';

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'>React Crud Operations</h2>
        <div>
          <Routes>
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route path='/read' element={<Read />} />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
