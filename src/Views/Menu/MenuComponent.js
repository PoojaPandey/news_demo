import React, { Component } from 'react';
import '../Menu/MenuComponent.css';
import * as constant from '../../Utility/Constant';
import '../SingleNews/SingleNewsComponent.css';

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
  newsTypeSelected = (item) => {
    this.props.selectNews(item);
  };

  // onMouseOver(e) {
  //   this.setState({
  //     hover: true
  //   });
  // }

  // onMouseOut(e) {
  //   this.setState({
  //     hover: false
  //   });
  // }

  /**
   * To render
   */
  render() {
    return (
      <div style={{ marginLeft: '10%' }}>
        {this.state.menuList.map((item) => {
          return <MenuItem item={item} onClick={() => this.newsTypeSelected(item)} key={item} />;
        })}
       
      </div>
    );
  }
}

export default MenuComponent;

class MenuItem extends React.Component {
  state = {};

  render() {
    return (
      <li
        className={
          this.state.hover
            ? 'TitleHeaderOnHover list-group-item list-group-item-action d-flex justify-content-between align-items-center'
            : 'TitleHeaderOfHover list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        }
        onClick={this.props.onClick}
        //className={this.state.hover ? 'TitleHeaderOnHover' : 'TitleHeaderOfHover'}
        // style={this.state.hover ? { color: "red" } : { color: "black" }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        // onMouseEnter={this.onMouseOver.bind(this)}
        // onMouseLeave={this.onMouseOut.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}
