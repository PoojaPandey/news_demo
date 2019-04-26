import React, { Component } from "react";
import "../Views/MenuComponent.css";
import * as constant from "../Utility/Constant";
import "./SingleNewsComponent.css";

/**
 * Menu Class to hold news category.
 */
class MenuComponent extends Component {
  state = {
    menuList: [
      constant.INDIA_BUSINESS,
      constant.INDIA_ENTERTAINMENT,
      constant.INDIA_HEALTH,
      constant.INDIA_SCIENCE,
      constant.INDIA_SPORTS,
      constant.INDIA_TECHNOLOGY
    ],
    hover: false
  };

  /**
   * Method for selected news Type category.
   */
  newsTypeSelected = item => {
    this.props.selectNews(item);
  };

  /**
   * To render
   */
  render() {
    return (
      <div style={{ marginLeft: "10%" }}>
        {this.state.menuList.map(item => (
          <h4
            onClick={() => this.newsTypeSelected(item)}
            key={item}
            className={
              this.state.hover ? "TitleHeaderOnHover" : "TitleHeaderOfHover"
            }
            // style={this.state.hover ? { color: "red" } : { color: "black" }}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            {item}
          </h4>
        ))}
      </div>
    );
  }
}

export default MenuComponent;
