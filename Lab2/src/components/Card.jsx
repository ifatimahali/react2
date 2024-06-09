import img1 from "../components/planguage.jpg"

function Card(props) {
  return (
    <>
    <card className="card1">
    <img src={img1}/>
    <p>{props.title}</p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </card>
    </>
  )
}

export default Card