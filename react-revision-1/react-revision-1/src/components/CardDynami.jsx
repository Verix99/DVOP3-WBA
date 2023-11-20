export default function CardDynami(props) {
    return (
        <>
          <div className="cardBody">
            <h2>{props.name}</h2>
            <p>{props.text}</p>
            <a href={props.link}>Odkaz</a>
          </div>

        </>
      )
}