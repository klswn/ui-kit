import React, { Component } from 'react';
import Radium from 'radium';

class SideNav extends Component {
  static defaultProps = {
    items: [
      {
        label: 'login',
        path: '/login',
      },
      {
        label: 'card',
        path: '/card',
      },
    ],
    fixed: false,
  };

  style = {
    wrapper: {
      position: 'fixed',
      height: '100vh',
      width: 200,
      backgroundColor: '#23282D',
      zIndex: 999,
    },
    ul: {
      position: 'relative',
      padding: 0,
      listStyle: 'none',
    },
    li: {
      cursor: 'pointer',
      textAlign: 'center',
      padding: '10px 0',
    },
    a: {
      textDecoration: 'none',
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 800,

      ':hover': {
        color: '#5f5f5f',
      },
    },
  };

  render() {
    const style = this.style;

    return (
      <div>
        <div style={ style.wrapper }>
          <ul style={ style.ul }>
              { 
                this.props.items.map((item, index) => {
                  return (
                    <li key={ index } style={ style.li }>
                      <a key={ index } style={ style.a } href={ item.path }>{ item.label }</a>
                    </li>
                  );
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

module.exports = Radium(SideNav);
