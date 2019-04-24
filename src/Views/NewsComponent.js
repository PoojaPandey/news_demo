import React from "react";
import "./NewsComponent.css";
import dotIcon from "../Resources/dot.png";
// import propTypes from "prop-Types";

/**
 * Method to format the Date.
 * @param {*} props
 */
const DateFormatted = props => {
  let date = new Date(props.date);
  return (
    <h6 style={{ color: "gray" }}>
      {/* Published At:{" "} */}
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(date)}
    </h6>
  );
};

// (
//   // let date = new Date(props.date);
//   <h6 style={{ color: "gray" }}>
//     {/* Published At:{" "} */}
//     {new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit"
//     }).format(new Date(props.date))}
//   </h6>
// );

/**
 * Method to setup Author and Time.
 * @param {*} props
 */
const SetupAuthorAndTime = props => (
  <div className="JustFnfo" style={{ marginTop: "0px" }}>
    <h6 style={{ color: "gray" }}>{props.authorDetail.newsItem.source.name}</h6>
    <img
      src={dotIcon}
      alt={"img"}
      style={{
        width: "5px",
        height: "3px",
        marginTop: "30px",
        marginLeft: "5px",
        marginRight: "5px"
      }}
    />
    <DateFormatted date={props.authorDetail.newsItem.publishedAt} />
  </div>
);

/* Code for creating the news list with data*/
const NewsComponent = props => (
  <div className="MainContent">
    <div className="ImageContainerStyle">
      <img
        src={props.newsItem.urlToImage}
        alt={"img"}
        className="ImageStyling"
      />
    </div>
    <div className="ContentStyle">
      <h2 style={{ marginBottom: "1px" }}>{props.newsItem.title}</h2>
      <SetupAuthorAndTime authorDetail={props} />
      {/* <h6 style={{ marginTop: "0px" }}>{}</h6> */}
      <p>{props.newsItem.description}</p>
      {/* <p>{props.newsItem.content}</p> */}

      <div className="JustFnfo">
        <h6 style={{ width: "50%" }}>Author:{props.newsItem.author}</h6>{" "}
        <DateFormatted date={props.newsItem.publishedAt} />
      </div>
    </div>
  </div>
);

export default NewsComponent;
