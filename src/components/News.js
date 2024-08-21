import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=from=2024-08-19&to=2024-08-19&language=en&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(35);
    let response = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: response.articles,
      totalResults: this.state.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // Buttons functions for Prev & Next
  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  // handlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/everything?q=from=2024-08-19&to=2024-08-19&language=en&sortBy=popularity&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">NewsApp Top headlines</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 85)
                            : ""
                        }
                        author={element.author}
                        imgurl={element.urlToImage}
                        newsurl={element.url}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

        {/* Buttons for Previous and Next (Depreciated for Infinite scroll in use) */}

        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-info my-3"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            className="btn btn-dark my-3"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;


