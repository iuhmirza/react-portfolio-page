import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const pages = [
    'home', 'skills', 'projects', 'contact', 'experience'
  ]

  const [selected, setSelected] = useState('home')

  return (
    <div className="App">
      <Navbar pages={pages} updatePage={setSelected} selectedPage={selected}/>
      <p>Hello world!</p>
    </div>
  );
}

export default App;
