import React, { Component } from 'react';
import _ from 'lodash';

export default class Card extends Component {
    static defaultProps = {
        style: {},
    };

    style = {
        card: {
            width: '100%',
            height: '100%',
            padding: '0 20px 20px 20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            WebkitBoxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
            MozBoxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
            boxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
        },
        title: {
            fontWeight: 800,
            fontSize: '2rem',
            padding: '18px 10px 33px 10px',
            color: '#5f5f5f',
        },
    };

    renderTitle = () => {
        if (this.props.title) {
            const style = this.style;

            return (
                <div style={ style.title }>
                    { this.props.title }
                </div>
            );
        }
    };

    render() {
        const style = _.merge(this.style.card, this.props.style);

        return (
            <div style={ style }>
                { this.renderTitle() }

                { this.props.children }
            </div>
        );
    }
}
