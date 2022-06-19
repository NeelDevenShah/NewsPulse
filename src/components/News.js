import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {
  articles=[]
  constructor(props){
    super(props);
    console.log("neel shah");
    this.state={
      articles: this.articles,
      loading : true,
      page:1,
      totalResults : 0
    }
    document.title=this.props.category+"- News Monkey"
  }
  
  async updateNews(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.akey}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles,
    totalArticles: parsedData.totalResults,
    loading : false})
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState(
      {page: this.state.page+1}
      )
      this.setState({loading : true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.akey}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalArticles: parsedData.totalResults,
    loading : false})
  };


  render() {
    let {mode, mode2}=this.props
    return (
      <div className='container my-3'>
        <h2 className={`text-${mode2} text-center`} style={{margin: "40px 0px"}}>News Monkey- {this.props.category} Headlines</h2>
        {this.state.loading &&<Spinner/>}
      <InfiniteScroll
       dataLength={this.state.articles.length}
       next={this.fetchMoreData}
      hasMore={this.state.articles.length !== this.state.totalResults}
      loader={<Spinner/>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>}
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
      </div>
      )
  }
}
