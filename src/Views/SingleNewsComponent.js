import React, { useState } from "react";
import dotIcon from "../Resources/dot.png";
import "./SingleNewsComponent.css";

/**
 * Method to format the Date.
 * @param {*} props
 */
const DateFormatted = props => {
  let date = new Date(props.date);
  return (
    <h6 className="GrayColor">
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

/**
 * Method to setup Author and Time.
 * @param {*} props
 */
function SetupAuthorAndTime(props) {
  return (
    <div className="JustFnfo" style={{ margin: "0px" }}>
      <h6 className="GrayColor">{props.authorDetail.newsItem.source.name}</h6>
      <img src={dotIcon} alt={"img"} className="AuthorAndTimeStyle" />
      <DateFormatted date={props.authorDetail.newsItem.publishedAt} />
    </div>
  );
}

function SingleNewsComponent(props) {
  const [hover, setHover] = useState(false);
  const newsItem = props.newsItem;
  return (
    <div className="MainContent">
      <div className="ImageContainerStyle">
        <img src={newsItem.urlToImage} alt={"img"} className="ImageStyling" />
      </div>
      <div className="ContentStyle" style={{ margin: "0px" }}>
        <a
          href={newsItem.url}
          className={hover ? "TitleHeaderOnHover" : "TitleHeaderOfHover"}
        >
          <h3
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {newsItem.title}
          </h3>
        </a>
        {/* <h2>{props.newsItem.title}</h2> */}
        <SetupAuthorAndTime authorDetail={props} />
        {/* <h6 style={{ marginTop: "0px" }}>{}</h6> */}
        <p>{newsItem.description}</p>
        {/* <p>{props.newsItem.content}</p> */}

        {/* <div className="JustFnfo">
          <h6 style={{ width: "50%" }}>Author:{props.newsItem.author}</h6>{" "}
          <DateFormatted date={props.newsItem.publishedAt} />
        </div> */}
      </div>
    </div>
  );
}

export default SingleNewsComponent;
