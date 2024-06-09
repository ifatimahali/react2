import img from "../components/planguage.jpg"

function Card(props) {
  return (
    <>
    <card className="card1">
    <img src={img}className="logo" alt="Vite logo" />
    <p>What is your favorite programming language? </p>
    <ul>
      <li>JS</li>
      <li>Java</li>
      <li>Python</li>
    </ul>
    </card>
    </>
  )
}

export default Card