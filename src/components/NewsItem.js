// Time, source, author
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, url, mode, mode2, time, source, author}= this.props;
    return (
      <div className='my-4 d-flex justify-content-center'>
        <div className="card" style={{}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className={`card-body bg-${mode}`}>
        <span className="badge rounded-pill text-bg-secondary">{source}</span>
        <h5 className={`text-${mode2}`}>{title}</h5>
        <p className={`text-${mode2}`}>{description}</p>
        <p className="card-text"><small className="text-danger">By {author} on {new Date(time).toLocaleString()}</small></p>
        <a href={url} className={`btn btn-sm btn-${mode2}`}>Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
