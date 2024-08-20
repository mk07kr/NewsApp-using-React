import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="Sports" description="Hello news World" imgurl =" " />
          </div>
          <div className="col-md-3">
          <NewsItem title="Country" description="Hello news World" imgurl =" " />
          </div>
          <div className="col-md-3">
          <NewsItem title="State" description="Hello news World" imgurl =" " />
          </div>
        </div>
        <NewsItem/>
        <NewsItem/>
      </div>
    );
  }
}
// News API Key = 9397bf7a878c48339cff0f0fbfef76c7
export default News;
