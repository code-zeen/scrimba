export default function Card(props) {
  return (
      <div className="card">
          <div className="image">
              <img src={props.imageUrl}/>
          </div>
          <div className="text">
              <p className="location">
                  <i className="fa fa-map-marker"></i><span className="country">{props.location}</span>
                  <a className="google-maps-url" href={props.googleMapsUrl}>지도 보기</a>
              </p>
              <h1 className="title">{props.title}</h1>
              <p className="date">{props.startDate} ~ {props.endDate}</p>
              <p className="description">{props.description}</p>
          </div>
      </div>
  )
}