import "./components/Navbar.jsx"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="cards">
        <Card tittle="Kya Bolta TU" desc='hkjgs ;kldlkis gkojsdfjh;' />
        <Card tittle="Kya Bolta TU" desc='hkjgs ;kldlkis gkojsdfjh;' />
        <Card tittle="Kya Bolta TU" desc='hkjgs ;kldlkis gkojsdfjh;' />
        <Card tittle="Kya Bolta TU" desc='hkjgs ;kldlkis gkojsdfjh;' />
        <Card tittle="Kya Bolta TU" desc='hkjgs ;kldlkis gkojsdfjh;' />
      </div>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default App
