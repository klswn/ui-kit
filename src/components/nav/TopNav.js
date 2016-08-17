import React, { Component } from 'react';
import Radium from 'radium';
import Card from '../card/Card.js';

class TopNav extends Component {
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
    card: {
      borderRadius: '0px 0px 8px 8px',
    },
    wrapper: {
      position: this.props.fixed ? 'fixed' : 'inherit',
      left: 0,
      top: 0,
      width: '100%',
      height: 40,
      zIndex: 999,
    },
    ul: {
      listStyle: 'none',
      margin: 0,
    },
    li: {
      float: 'left',
      margin: '0px 20px',
      padding: '21px 20px 20px 20px',
      cursor: 'pointer',
    },
    a: {
      textDecoration: 'none',
      color: '#5f5f5f',
      textTransform: 'uppercase',
      fontWeight: 800,

      ':hover': {
        color: '#f00',
      },
    },
    fixedBuffer: {
      height: 40,
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: -999,
    },
  };

  renderFixedBuffer = () => {
    if (this.props.fixed) {
      return (
        <div style={ this.style.fixedBuffer }></div>
      );
    }
  };

  render() {
    const style = this.style;

    return (
      <div>
        <div style={ style.wrapper }>
          <Card style={ style.card }>
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
          </Card>
        </div>
        { this.renderFixedBuffer() }
      </div>
    );
  }
}

module.exports = Radium(TopNav);
