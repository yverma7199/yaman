import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <MainPage />
      </div>
    </Router>
  );
}

export default App;