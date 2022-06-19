import NewsItem from './components/NewsItem'
import Spinner from './/components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

const Heading=(props)=>{
  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)

  const updateNews=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.akey}&page=${page}&pageSize=${props.newsSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() =>{
    document.title="Main Headings - News Monkey"
    updateNews();
  },[])

  let parsedData
  const fetchMoreData = async () => {
      setPage(page+1)
      setLoading(true)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.akey}&page=${page}&pageSize=${props.newsSize}`;
    let data=await fetch(url);
    parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
  };
  // const [totalArticles, setTotalArticles]=useState(parsedData.totalResults)
    return (
      <div className='container my-3'>
        <h2 className={`text-${props.mode2} text-center`} style={{margin: "40px 0px"}}>News Monkey- {props.category} Headlines</h2>
        {loading &&<Spinner/>}
      <InfiniteScroll
       dataLength={articles.length}
       next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner/>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>}
          >
            <div className='container'>
          <div className='row'>
        {articles.map((element)=>{
            return <div className={`col-md-4`}>
              <NewsItem mode={props.mode} mode2={props.mode2} target="_blank" key={element.url} title={element.title?element.title.slice(0,60)+"..":"check out the title of the story by clicking the read more"} description={element.description?element.description.slice(0,151)+"..":"check out the description of the story by clicking the read more"} imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/06/17/1600x900/Varun_Gandhi_1655465995661_1655466004449.jpg"} url={element.url?element.url:""} author={element.author?element.author: "Unknown"} source={element.source.name?element.source.name:"Unknown"} time={element.publishedAt?element.publishedAt:"Un-defined"}/>
              </div>
          })}
           </div>
             </div>
          </InfiniteScroll>
      </div>
      )
}

export default Heading