import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Fantasy Staff",
      title: "Must-have players outside of the early rounds",
      description:
        "Our fantasy analysts provide the players they are targeting most after the early rounds of their drafts this year.",
      url: "https://www.espn.com/fantasy/football/story/_/id/40870317/2024-fantasy-football-draft-sleepers-values-breakouts",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0128%2Fr1283736_1296x729_16%2D9.jpg",
      publishedAt: "2024-08-19T11:24:03Z",
      content:
        "Aug 19, 2024, 07:00 AM ET\r\nWho is the one player you just have to have in fantasy football this season?\r\nIf you're a fantasy manager who has taken part in enough mock drafts this summer, you likely h… [+7513 chars]",
    }
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    // this.setState({loading: true});
    let url =
      "https://newsapi.org/v2/everything?q=from=2024-08-19&to=2024-08-19&language=en&sortBy=popularity&apiKey=9397bf7a878c48339cff0f0fbfef76c7 ";
    let data = await fetch(url);
    let response = await data.json();
    this.setState({ articles: response.articles });
    console.log(response);
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
// News API Key = 9397bf7a878c48339cff0f0fbfef76c7
export default News;
