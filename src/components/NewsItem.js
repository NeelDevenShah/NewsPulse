import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, url, mode, mode2}= this.props;
    return (
      <div className='my-4'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className={`card-body bg-${mode}`}>
    
        <h5 className={`text-${mode2}`}>{title}</h5>
        <p className={`text-${mode2}`}>{description}</p>
        <a href={url} className={`btn btn-sm btn-${mode2}`}>Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
