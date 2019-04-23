import React, { Component } from 'react';
import "../Views/MenuComponent.css";
import * as constant from '../Utility/Constant';

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
    ]
  };

  /**
   * Method for selected news Type category.
   */
  newsTypeSelected = (item) => {
    this.props.selectNews(item);
  };

  /**
   * To render
   */
  render() {
    return (
      <>
        <div>
          <div style={{ marginLeft: '10%' }}>
            {this.state.menuList.map((item) => (
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
