import React from "react";
import SingleNewsComponent from "../SingleNews/SingleNewsComponent";
import "../NewsComponent/NewsComponent.css";
import * as constant from "../../Utility/Constant";
import PropTypes from "prop-types";

function setUpNewsTypeImage(prop) {
  if (prop !== constant.TOP_STORY) {
    return (
      <img
        src={
          prop === constant.TOP_STORY
            ? "icon"
            : require("../../Resources/" + prop + constant.ICON_PNG)
        }
        alt={"icon"}
        className="NewsTypeIcon"
      />
    );
  }
}

function SetupListView(prop) {
  return (
    <div className="Top">
      {setUpNewsTypeImage(prop.heading)}
      <h2
        className={
          prop.heading === constant.TOP_STORY
            ? "NewsTypeTitle-TopStory"
            : "NewsTypeTitle-Other"
        }
      >
        {prop.heading}
      </h2>
    </div>
  );
}

/**
 * This creating the news list with props
 * @param {*} props
 */
function NewsComponent(props) {
  const newsList = props.newsArray;
  return (
    <div>
      <SetupListView heading={props.heading} />
      {newsList.map(item => (
        <SingleNewsComponent key={item.title} newsItem={item} />
      ))}
    </div>
  );
}
NewsComponent.propTypes = {
  newsArray: PropTypes.array.isRequired
};

export default NewsComponent;
