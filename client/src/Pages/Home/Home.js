import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";
import './Home.css'

export default class Main extends Component {
  state = {
    makeschool: [],
    ycombinator: [],
    newsycombinator: []
  };
  componentDidMount = () => {
    // this.getTweets("muneebwasikhan");
    // this.getTweets("osamakhan220");
    // this.getTweets("najamshehzad_B");
    this.getTweets("makeschool");
    this.getTweets("ycombinator");
    this.getTweets("newsycombinator");
  };
  getTweets = name => {
    fetch(
      `http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=${name}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ [name]: res });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { makeschool, newsycombinator, ycombinator } = this.state;
    return (
      <Grid>
        { !makeschool.length && !ycombinator.length && !ycombinator.length && <Loader/>}
        <Row className="show-grid">
          <Col xs={6} md={4}>
            {makeschool.map(({ id_str }, index) => {
              return <TwitterTweetEmbed tweetId={id_str} key={index} />;
            })}
          </Col>
          <Col xsHidden md={4}>
            {newsycombinator.map(({ id_str }, index) => {
              return <TwitterTweetEmbed tweetId={id_str} key={index} />;
            })}
          </Col>
          <Col xs={6} md={4}>
            {ycombinator.map(({ id_str }, index) => {
              return <TwitterTweetEmbed tweetId={id_str} key={index} />;
            })}
          </Col>
        </Row>
      </Grid>
    );
  }
}



const Loader = () => {
  return (
    <div className="LoaderContainer">
      <div className="loader">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};