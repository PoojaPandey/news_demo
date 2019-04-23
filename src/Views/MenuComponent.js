import React, { Component } from "react";
import "../Views/MenuComponent.css";
import * as constant from "../Utility/Constant";

class MenuComponent extends Component {
  state = {
    menuList: [
      constant.INDIA_BUSINESS,
      constant.INDIA_ENTERTAINMENT,
      constant.INDIA_HEALTH,
      constant.INDIA_SCIENCE,
      constant.INDIA_SPORTS,
      constant.INDIA_TECHNOLOGY
    ]
  };

  newsTypeSelected = item => {
    this.props.selectNews(item);
  };

  render() {
    return (
      <>
        <div>
          <div style={{ marginLeft: "10%" }}>
            {this.state.menuList.map(item => (
              <h4 onClick={() => this.newsTypeSelected(item)} key={item.title}>
                {item}
              </h4>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MenuComponent;
