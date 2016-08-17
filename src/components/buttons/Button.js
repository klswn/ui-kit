import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Button extends Component {
	render() {
		const style = {
			width: '90%',
			display: 'inline-block',
			padding: '5%',
			margin: 0,
			backgroundColor: '#2c9676',
			borderRadius: '5px',
			border: 'solid 3px #2c9676',
			fontSize: '1rem',
			fontWeight: 800,
			outline: 'none',
			textAlign: 'center',
			textDecoration: 'none',
			color: '#fffafa',
			textTransform: 'uppercase',
			fontWeight: 100,
			cursor: this.props.disabled ? 'not-allowed' : 'pointer',
			transition: 'all .1s ease',

			':hover': {
				WebkitBoxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
				MozboxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
				boxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
			},

			':focus': {
				WebkitBoxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
				MozboxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
				boxShadow: '0px 2px 0px 0px rgba(18, 61, 47, 0.6)',
			}
		};

		return (
			<a
				href={ this.props.href }
				style={ style }
				onClick={ this.props.onClick }>
				{ this.props.children }
			</a>
		);
	}
}

Button.propTypes = {
	style: PropTypes.object,
	href: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	style: {},
	href: '#',
	disabled: false,
	loading: false,
	onClick: () => {},
};

module.exports = Radium(Button);
