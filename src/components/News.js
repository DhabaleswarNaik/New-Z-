import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.country !== this.props.params.country || prevProps.params.category !== this.props.params.category) {
      this.setState({ page: 1, articles: [] }, this.updateNews);
    }
  }

  updateNews = async () => {
    this.props.setProgress(10);
    const { country, category} = this.props.params;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=994ae1539d2e49cc8e618122bf8da67c&page=${this.state.page}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  }
  


  fetchMoreData = async () => {
    const { country, category } = this.props.params;
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=994ae1539d2e49cc8e618122bf8da67c&page=${this.state.page + 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ color: "white",marginTop:'70px' }}>
          NewZ's - Top {this.props.params.category} Headlines
        </h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default (props) => {
  const params = useParams();
  return <News {...props} params={params} />;
};
