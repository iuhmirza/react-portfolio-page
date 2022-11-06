import './App.css';

function Navbar() {
  const pages = [
    'home', 'projects', 'contact', 'experience'
  ]
  return (
    <div>
      {pages.map(page => <NavbarButton link={page}/>)}
    </div>
  )
}

function NavbarButton({link}) {
  return (
    <button>{link}</button>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>Hello world!</p>
    </div>
  );
}

export default App;
