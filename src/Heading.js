import React, { Component } from 'react'
import NewsItem from './components/NewsItem'
import Spinner from './components/Spinner';

export default class Heading extends Component {
  articles=[]
  constructor(props){
    super(props);
    console.log("neel shah");
    this.state={
      articles: this.articles,
      loading : false,
      page:1
    }
    document.title="Main Headlines- News Monkey"
  }
  
  async newsUpdate(){
    this.setState({loading : true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles,
       totalArticles: parsedData.totalResults,
        loading : false})
  }

  async componentDidMount(){
    // this.setState({loading : true})
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&pageSize=${this.props.newsSize}`;
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles: parsedData.articles,
    //    totalArticles: parsedData.totalResults,
    //     loading : false})
    this.newsUpdate();
  }

  handleNextclick=async ()=>{
    // this.setState({loading: true})
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&page=${this.state.page+1}&pageSize=${this.props.newsSize}`;
    // let data=await fetch(url);
    // let parsedData=await data.json()
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading : false
    // })
    this.setState({
        page: this.state.page + 1
    })
    this.newsUpdate();
  }
  handlePreviousClick=async ()=>{
    // this.setState({loading : true})
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.akey}&page=${this.state.page-1}&pageSize=${this.props.newsSize}`;
    // let data=await fetch(url);
    // let parsedData=await data.json()
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading : false
    // }) 
    this.setState({
        page: this.state.page - 1
    })
    this.newsUpdate();
  }


  render() {
    let {mode, mode2}=this.props
    return (
      <div className='container my-3'>
        <h2 className={`text-${mode2} text-center`} style={{margin: "40px 0px"}}>News Monkey- Top Headlines</h2>
        <div className='row'>
        {this.state.loading &&<Spinner/>}
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className={`col-md-4`}>
              <NewsItem mode={mode} mode2={mode2} target="_blank" key={element.url} title={element.title?element.title.slice(0,60)+"...":"check out the title of the story by clicking the read more"} description={element.description?element.description.slice(0,151)+"...":"check out the description of the story by clicking the read more"} imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/06/17/1600x900/Varun_Gandhi_1655465995661_1655466004449.jpg"} url={element.url?element.url:""} author={element.author?element.author: "Unknown"} source={element.source.name?element.source.name:"Unknown"} time={element.publishedAt?element.publishedAt:"Un-defined"}/>
              </div>
            })}
            <div className={`cointainer bg-${mode}`}>
            <div className="d-flex justify-content-between">
            <button type={"button bg"} disabled={this.state.page<=1} className={`btn btn-${mode} text-${mode2}`} onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={!(this.state.page+1<=Math.ceil(this.state.totalArticles/this.props.newsSize))} type="button" className={`btn btn-${mode} text-${mode2}`} onClick={this.handleNextclick}>Next &rarr;</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}