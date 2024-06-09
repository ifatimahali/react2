import './App.css'
import img from "../components/planguage.jpg"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Card title='What is your favorite programming language?' img={img} lione = "js" litow="python" lithre="java"
      
      />



      <Footer />

    </>
  )
}

export default App
