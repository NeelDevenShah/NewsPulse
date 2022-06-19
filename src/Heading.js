import React, { Component } from 'react'
import NewsItem from './components/NewsItem'
import Spinner from './components/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export default class Heading extends Component {
  articles=[]
  constructor(props){
    super(props);
    console.log("neel shah");
    this.state={
      articles: this.articles,
      loading : true,
      page:0
    }
    document.title="Main Headlines- News Monkey"
  }
  
  async newsUpdate(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles,
       totalArticles: parsedData.totalResults,
        loading : false})
  }

  async componentDidMount(){
    this.newsUpdate();
  }

  // handleNextclick=async ()=>{
  //   this.setState({
  //       page: this.state.page + 1
  //   })
  //   this.newsUpdate();
  // }
  // handlePreviousClick=async ()=>{
  //   this.setState({
  //       page: this.state.page - 1
  //   })
  //   this.newsUpdate();
  // }
  fetchMoreData=async()=>{
    this.setState({
      page: this.state.page+1,
      loading: false
    })
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading : false})
  }

  render() {
    let {mode, mode2}=this.props
    return (
      <div className='container my-3'>
        <h2 className={`text-${mode2} text-center`} style={{margin: "40px 0px"}}>News Monkey- Top Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !==this.state.totalArticles}
          loader={<Spinner/>}
        >
          <div className='container'>
          <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className={`col-md-4`}>
              <NewsItem mode={mode} mode2={mode2} target="_blank" key={element.url} title={element.title?element.title.slice(0,60)+"...":"check out the title of the story by clicking the read more"} description={element.description?element.description.slice(0,151)+"...":"check out the description of the story by clicking the read more"} imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/06/17/1600x900/Varun_Gandhi_1655465995661_1655466004449.jpg"} url={element.url?element.url:""} author={element.author?element.author: "Unknown"} source={element.source.name?element.source.name:"Unknown"} time={element.publishedAt?element.publishedAt:"Un-defined"}/>
              </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className={`cointainer bg-${mode}`}>
            <div className="d-flex justify-content-between">
            <button type={"button bg"} disabled={this.state.page<=1} className={`btn btn-${mode} text-${mode2}`} onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={!(this.state.page+1<=Math.ceil(this.state.totalArticles/this.props.newsSize))} type="button" className={`btn btn-${mode} text-${mode2}`} onClick={this.handleNextclick}>Next &rarr;</button>
            </div>
            </div> */}
        </div>
    )
  }
}