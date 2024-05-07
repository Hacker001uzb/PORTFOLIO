
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Setting from './pages/Setting/Setting';
import Header from './components/Header/Header';
import HomeTom from './components/HomeTome/HomeTom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Setting/>}/>
      </Routes>
    </div>
  );
}

export default App;
