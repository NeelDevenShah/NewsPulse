import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles=[]
  constructor(){
    super();
    console.log("neel shah");
    this.state={
      articles: this.articles,
      loading : false,
      page:1

    }
  }
  
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=90e7f116117d4e6aa91f10765c013282&pageSize=21";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }

  handleNextclick=async ()=>{
    console.log("Next");
    if(this.state.page+1<=Math.ceil(this.state.totalArticles/20)){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=90e7f116117d4e6aa91f10765c013282&page=${this.state.page+1}&pageSize=21`;
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log("Parsed Data");
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    }
    else{

    }
  }
  handlePreviousClick=async ()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=90e7f116117d4e6aa91f10765c013282&page=${this.state.page-1}&pageSize=21`;
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log("Parsed Data");
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    }) 
  }


  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey- Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4'>
              <NewsItem target="_blank" key={element.url} title={element.title?element.title.slice(0,60)+"...":"check out the title of the story by clicking the read more"} description={element.description?element.description.slice(0,151)+"...":"check out the description of the story by clicking the read more"} imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/06/17/1600x900/Varun_Gandhi_1655465995661_1655466004449.jpg"} url={element.url?element.url:""}/>
              </div>  
            })}
            <div className="cointainer">
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
