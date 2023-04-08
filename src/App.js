import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import ViewOrder from './Pages/viewOrder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ViewOrder/>} />
      </Routes>
    </Router>
  );
}

export default App;
