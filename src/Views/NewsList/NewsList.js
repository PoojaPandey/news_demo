import React, { Component } from "react";
import * as constant from "../../Utility/Constant";
import NewsComponent from "../NewsComponent/NewsComponent";
import "../NewsList/NewsList.css";
import MenuComponent from "../Menu/MenuComponent";
import TempratureComponent from "../TempratureComponent";
import icon from "../../Resources/TGPIcon.png";
import WebService from "../../Webservice/Webservice";
import CreateApi from "../../Utility/Constant";

/**
 * News List Class
 */
class NewsList extends Component {
  /**
   * Constructo to inject props.
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isFetching: false,
      heading: constant.TOP_STORY,
      loading: false,
      selectedNews: constant.TOP_STORY
    };
  }

  /**
   * This function get call when there is successful API hit with the responce data.
   */
  setData = props => {
    this.setState({
      news: props.articles,
      isFetching: false
    });
    console.log(this.state.news);
  };

  /**
   * This function get call when there is error on API call with error code.
   */
  gotError = props => {
    console.log(props);
  };

  /**
   * Method to fetch the news.
   */
  fetchNews = url => {
    this.loading = true;
    WebService({
      url: url,
      setData: this.setData,
      gotError: this.gotError
    });
    this.loading = false;
  };

  /**
   * Life cycle method.
   */
  componentWillMount() {
    let value = localStorage.getItem(constant.SELETECTED_NEWS_CATEGORY);
    this.selectedNewsType(value);
  }

  /**
   * This function get called when the news category get selected.
   */
  selectedNewsType = props => {
    //Check if the seleted news category is Top stories
    if (props === constant.TOP_STORY) {
      this.fetchNews(constant.NEWS_URL);
    } else {
      const url = CreateApi(props);
      this.fetchNews(url);
    }
    this.setState({
      heading: props,
      selectedNews: props
    });
  };

  /**
   * This function is for setting up the top view with logo and title
   */

  TopView() {
    return (
      <div className="Top BoxShadow">
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img src={icon} alt={"icon"} className="Icon" />
          <h5 className="LogoTitle">TPG </h5>
          &nbsp;
          <h5 className="NewsTitle"> News</h5>
        </div>
      </div>
    );
  }

  /**
   * Render the UI
   */
  render() {
    return (
      <div>
        {this.TopView()}
        <div className="Base">
          <div className="Menu">
            {console.log("this.state.selectedNews ", this.state.selectedNews)}
            <MenuComponent
              selectNews={this.selectedNewsType}
              selected={this.state.selectedNews}
            />
          </div>
          <div className="List">
            <NewsComponent
              newsArray={this.state.news}
              heading={this.state.heading}
            />
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
