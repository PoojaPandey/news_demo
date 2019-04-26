import React from "react";
import SingleNewsComponent from "../Views/SingleNewsComponent.js";
import "../Views/NewsList.css";
import * as constant from "../Utility/Constant";
import PropTypes from "prop-types";

function SetupListView(prop) {
  return (
    <div className="Top" style={{ marginTop: "20px" }}>
      <img
        style={{
          marginLeft: "30px",
          marginTop: "10px"
        }}
        src={
          prop.heading === constant.TOP_STORY
            ? "../Resources/" + prop.heading + "-Icon.png"
            : require("../Resources/" + prop.heading + "-Icon.png")
        }
        hidden={prop.heading === constant.TOP_STORY ? true : false}
        alt={"icon"}
        className="Icon"
      />
      <h2
        style={{
          marginLeft: prop.heading === constant.TOP_STORY ? "40px" : "10px"
        }}
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
  // const heading = props.heading;
  return (
    <div>
      {/* {SetupListView({ heading })} */}
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
