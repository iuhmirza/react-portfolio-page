
import Home from "../pages/Home"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Experience from "../pages/Experience"
import Contact from "../pages/Contact"

const Pages = ({ selectedPage }) => {
  switch (selectedPage) {
    case 'home':
      return (<Home />)
    case 'skills':
      return (<Skills />)
    case 'projects':
      return (<Projects />)
    case 'experience':
      return (<Experience />)
    case 'contact':
      return (<Contact />)
    default:
      return (<Home />)
  }
}

export default Pages