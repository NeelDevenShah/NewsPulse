
const NewsItem=(props)=>{
    return (
      <div className='my-4 d-flex justify-content-center'>
        <div className="card" style={{}}>
        <img src={props.imgUrl} className="card-img-top" alt="..."/>
        <div className={`card-body bg-${props.mode}`}>
        <span className="badge rounded-pill text-bg-secondary">{props.source}</span>
        <h5 className={`text-${props.mode2}`}>{props.title}</h5>
        <p className={`text-${props.mode2}`}>{props.description}</p>
        <p className="card-text"><small className="text-danger">By {props.author} on {new Date(props.time).toLocaleString()}</small></p>
        <a href={props.url} className={`btn btn-sm btn-${props.mode2}`} target="_blank">Read More</a>
        </div>
      </div>
      </div>
    )
}

export default NewsItem