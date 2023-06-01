import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
