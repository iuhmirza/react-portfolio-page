import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Pages from './components/Pages';

function App() {
  const pages = [
    'home', 'skills', 'projects', 'contact', 'experience'
  ]

  const [selected, setSelected] = useState('home')

  return (
    <div className="App">
      <Navbar pages={pages} updatePage={setSelected} selectedPage={selected}/>
      <Pages selectedPage={selected}/>
    </div>
  );
}

export default App;
