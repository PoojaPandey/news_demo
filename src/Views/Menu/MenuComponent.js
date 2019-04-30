import React, { Component } from "react";
import "../Menu/MenuComponent.css";
import * as constant from "../../Utility/Constant";
import "../SingleNews/SingleNewsComponent.css";

/**
 * Menu Class to hold news category.
 */
class MenuComponent extends Component {
  state = {
    menuList: [
      constant.TOP_STORY,
      constant.INDIA_BUSINESS,
      constant.INDIA_ENTERTAINMENT,
      constant.INDIA_HEALTH,
      constant.INDIA_SCIENCE,
      constant.INDIA_SPORTS,
      constant.INDIA_TECHNOLOGY
    ],
    hover: false,
    selectedNewsCategoty: this.props.selected
  };
  /**
   * Method for selected news Type category.
   */
  newsTypeSelected = item => {
    console.log("newsTypeSelected", item);
    this.props.selectNews(item);
    this.setState({ selectedNewsCategoty: item });
    localStorage.setItem(constant.SELETECTED_NEWS_CATEGORY, item);
  };

  /**
   * To render
   */
  render() {
    return (
      <div>
        {this.state.menuList.map(item => (
          <ul
            key={item}
            className={
              this.state.selectedNewsCategoty === item
                ? "TitleHeaderOfHover list-group-item list-group-item-action menuStyle active"
                : "TitleHeaderOnHover list-group-item list-group-item-action menuStyle "
            }
            onClick={() => this.newsTypeSelected(item)}
          >
            {item}
          </ul>
        ))}
      </div>
    );
  }
}

export default MenuComponent;
