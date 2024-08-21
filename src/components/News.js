import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    const url = `https://newsapi.org/v2/everything?q=from=2024-08-19&to=2024-08-19&language=en&sortBy=popularity&apiKey=9397bf7a878c48339cff0f0fbfef76c7&page=${this.state.page}&pageSize=20`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let response = await data.json();
    this.setState({
      articles: response.articles,
      totalResults: this.state.totalResults,
      loading: false,
    });
    console.log(response);
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsApp Top headlines</h1>
        {this.state.loading && <Spinner />}

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
        <div className="container d-flex justify-content-between">
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
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            className="btn btn-dark my-3"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
// News API Key = 9397bf7a878c48339cff0f0fbfef76c7
export default News;
