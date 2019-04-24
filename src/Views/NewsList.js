import React, { Component } from "react";
import * as constant from "../Utility/Constant";
import NewsComponent from "./NewsComponent";
import "../Views/NewsList.css";
import MenuComponent from "../Views/MenuComponent";
import TempratureComponent from "./TempratureComponent";
import icon from "../Resources/TGPIcon.png";
// import WebService from "../Webservice/Webservice";
import CreateApi from "../Utility/Constant";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isFetching: false,
      heading: constant.TOP_STORY
    };
  }

  /*
  setData = props => {
    this.setState({
      news: props.articles,
      isFetching: false
    });
  };

  gotError = props => {
    console.log(props);
  };
  */

  fetchNews = url => {
    this.setState({ ...this.state, isFetching: true });
    fetch(url)
      .then(response => response.json())
      .then(result =>
        this.setState({
          news: result.articles,
          isFetching: false
        })
      )
      .catch(e => console.log(e));
      
    // <WebService url={constant.NEWS_URL} setData={this.setData} gotError={this.gotError}></WebService>
  };

  componentDidMount() {
    this.fetchNews(constant.NEWS_URL);
  }

  selectedNewsType = props => {
    console.log("passed selected news", props);
    const url = CreateApi(props);
    this.fetchNews(url);
    this.setState({
      heading: props
    });
  };

  /**
   * This function is for setting up the top view with logo and title
   */
  TopView = () => (
    <div className="Top" style={{ boxShadow: "1px 1px 5px #9E9E9E" }}>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <img src={icon} alt={"icon"} className="Icon" />
        <h3 className="LogoTitle">TPG News</h3>
      </div>
    </div>
  );

  /**
   * This function is for setting up the uper view of news list view
   */
  SetupListView = () => (
    <div className="Top" style={{ marginTop: "20px" }}>
      <img
        style={{
          marginLeft: "30px",
          marginTop: "10px"
        }}
        src={
          this.state.heading === constant.TOP_STORY
            ? `../Resources/${this.state.heading}-Icon.png`
            : require(`../Resources/${this.state.heading}-Icon.png`)
        }
        hidden={this.state.heading === constant.TOP_STORY ? true : false}
        alt={"icon"}
        className="Icon"
      />
      <h2
        style={{
          marginLeft:
            this.state.heading === constant.TOP_STORY ? "40px" : "10px"
        }}
      >
        {this.state.heading}
      </h2>
    </div>
  );

  render() {
    return (
      <div>
        <this.TopView />
        <div className="Base">
          <div className="Menu">
            <MenuComponent selectNews={this.selectedNewsType} />
          </div>
          <div className="List">
            <this.SetupListView />
            {this.state.news.map(item => (
              <NewsComponent key={item.title} newsItem={item} />
            ))}
          </div>
          <div className="Temp">
            <TempratureComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsList;
