
function Card(props) {
  return (
    <>
    <card className="card1">
    <img src={props.img1}/>
    <p>{props.title}</p>
    <ul>
      <li>{props.lione}</li>
      <li>{props.litow}</li>
      <li>{props.lithre}</li>
    </ul>
    </card>
    </>
  )
}

export default Card