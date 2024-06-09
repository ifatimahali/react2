import './App.css'
import img1 from "../src/planguage.jpg"
import img2 from "../src/pr2.jpg"
import img3 from "../scr/pro3.jpg"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Card img={img1} title='What is your favorite programming language?'  lione = "js" litow="python" lithre="java" />
      <Card img={img2} title='What is your favorite programming language?'  lione = "js" litow="c++" lithre="java" />
      <Card img={img3} title='What is your favorite programming language?'  lione = "c++" litow="c#" lithre="java" />

      <Footer />

    </>
  )
}

export default App
