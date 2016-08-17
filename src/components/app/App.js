import React, { Component } from 'react';
import TopNav from '../nav/TopNav.js';
import SideNav from '../nav/SideNav.js';

export default class App extends Component {
  render() {
    const style = {
      content: {
        paddingTop: 40,
      },
    };

		return (
      <div>
        <SideNav />

        <div style={ style.content }>
          { this.props.children }
        </div>
      </div>
		);
	}
}
