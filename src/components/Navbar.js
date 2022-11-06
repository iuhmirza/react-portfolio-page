import './Navbar.css'

function Navbar( { pages, updatePage, selectedPage}) {
  

  const selectedStyle = {
    backgroundColor: 'hsl(0, 0%, 15%)'
  }

  const isSelected = page => {
    if(page===selectedPage) {
      return (<button className='NavbarButton' style={selectedStyle}>{page}</button>)
    } else {
      return <button className='NavbarButton' onClick={() => updatePage(page)}>{page}</button>
    }
  }

  return (
    <div className='Navbar'>
      {pages.map(page => isSelected(page))}
    </div>
  )
}

export default Navbar