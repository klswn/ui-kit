import React, { Component } from 'react';

export default class Input extends Component {
	constructor() {
		super();

		this.state = {
			focus: false,
		};
	}

	handleFocus = () => {
		this.setState({
			focus: true,
		});
	};

	handleBlur = () => {
		this.setState({
			focus: false,
		});
	};

	render() {
		const style = {
			wrapper: {
				position: 'relative',
			},
			input: {
				border: 'solid 3.5px #efefef',
				outline: 'none',
				height: '1.5rem',
				width: '100%',
				maxWidth: '100%',
				fontSize: '1.1rem',
				color: '#5f5f5f',
				padding: '6% 4%',
				backgroundColor: this.state.focus ? '#fff' : '#efefef',
				borderRadius: '8px',
				WebkitBoxSizing: 'border-box',
				MozBoxSizing: 'border-box',
				boxSizing: 'border-box',
				transition: 'all .1s ease-in',
			},
			label: {
				fontSize:'0.8rem',
				position: 'absolute',
				color: '#5f5f5f',
				opacity: this.state.focus || this.props.value ? 1 : 0,
				top: this.state.focus || this.props.value ? -20 : 0,
				left: 8.5,
				transition: 'all .2s ease-out'
			},
		};

		return (
			<div style={ style.wrapper }>
				<input
					{ ...this.props }
					style={ style.input }
					value={ this.props.value }
					placeholder={ !this.state.focus ? this.props.placeholder : null}
					onChange={ this.props.onChange }
					onFocus={ this.handleFocus }
					onBlur={ this.handleBlur } />

					<div style={ style.label }>
						{ this.props.label }
					</div>
			</div>
		);
	}
}