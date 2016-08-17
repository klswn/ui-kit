import React, { Component } from 'react';
import Card from '../card/Card.js';
import Input from '../input/Input.js';
import Select from '../select/Select.js';

export default class CardExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1,
      options: [
        {
          label: 'Option one',
          value: 1,
        },
        {
          label: 'Option two',
          value: 2,
        },
        {
          label: 'Option three',
          value: 3,
        },
        {
          label: 'Option four',
          value: 4,
        },
      ],
    };
  }

  handleChange = (name, e) => {
    this.setState({
      [`${ name }`]: e.target.value,
    });
  };

  handleValue = (name, val) => {
    this.setState({
      [`${ name }`]: val,
    });
  };

  render() {
    return (
      <div className="pure-g">
        <div
        className="
        pure-u-1
        pure-u-lg-1-3
        offset-lg-1-3
        pure-u-md-1-2
        offset-md-1-4
        pure-u-sm-2-3
        offset-sm-1-6">
          <Card title={ ' ' }>
            <Select
              label={ 'Label' }
              options={ this.state.options }
              selected={ this.state.selected }
              onChange={ this.handleValue.bind(this, 'selected') } />
          </Card>
        </div>
      </div>
    );
  }
}
