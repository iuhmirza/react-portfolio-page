import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const pages = [
    'home', 'skills', 'projects', 'contact', 'experience'
  ]

  const [selected, setSelected] = useState('home')

  const selectedStyle = {
    backgroundColor: 'hsl(0, 0%, 15%)'
  }

  const isSelected = page => {
    if(page===selected) {
      return (<button className='NavbarButton' style={selectedStyle}>{page}</button>)
    } else {
      return <button className='NavbarButton' onClick={() => setSelected(page)}>{page}</button>
    }
  }

  return (
    <div className='Navbar'>
      {pages.map(page => isSelected(page))}
    </div>
  )
}

export default Navbar