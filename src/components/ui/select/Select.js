import React, { Component } from 'react';
import Radium from 'radium';

class Select extends Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,
		};
	}

	renderSelected = () => {
		const props = this.props;

		return props.options.find(x => x.value === props.selected).label;
	};

	onClick = (value) => {
		if (this.state.showDropdown) {
			this.props.onChange(value);
		}
	};

	toggleDropdown = () => {
		this.setState({
			showDropdown: !this.state.showDropdown,
		}, () => {
			if (this.state.showDropdown) {
				document.addEventListener('click', this.toggleDropdown);
			} else {
				document.removeEventListener('click', this.toggleDropdown);
			}
		});
	};

	renderLabel = () => {
		if (this.props.label) {
			const style = {
				label: {
					fontSize:'0.8rem',
					position: 'absolute',
					color: '#5f5f5f',
					top: -20,
					left: 8.5,
					transition: 'all .2s ease-out'
				},
			};

			return (
				<div style={ style.label }>
					{ this.props.label }
				</div>
			);
		}
	};

	renderDropdown = () => {
		const style = {
			dropdown: {
				position: 'absolute',
				display: this.state.showDropdown ? 'block' : 'none',
				top: 0,
				zIndex: 999,
				width: '100%',
				backgroundColor: '#fff',
				border: 'solid 3.5px #efefef',
				borderRadius: '8px',
                WebkitBoxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                boxSizing: 'border-box',
			},
			option: {
				fontSize: '1.1em',
				color: 'rgba(95,95,95,0.5)',
				padding: '4%',
				cursor: 'pointer',

				':hover': {
					backgroundColor: '#efefef',
				},
			},
			selectedOption: {
				fontSize: '1.1em',
				color: 'rgb(95,95,95)',
				padding: '4%',
				cursor: 'pointer',

				':hover': {
					backgroundColor: '#efefef',
				},
			},
			hr: {
				color: '#5f5f5f',
				opacity: 0.2,
				margin: 0,
			},
		};

		const options = this.props.options.map((option, index) => {
			const s = (this.props.selected === option.value) ? style.selectedOption : style.option;

			return (
				<div
					key={ index }
					style={ s }
					onClick={ this.onClick.bind(this, option.value) }>
					{ option.label }
				</div>
			);
		});

		return (
			<div style={ style.dropdown }>
				{ options }
			</div>
		);
	};

	render() {
		const style = {
			wrapper: {
				position: 'relative',
			},
			select: {
				border: 'solid 3.5px #efefef',
				outline: 'none',
				padding: '3.5% 4%',
				width: '100%',
				cursor: 'pointer',
				maxWidth: '100%',
				fontSize: '1.1rem',
				color: '#5f5f5f',
				backgroundColor: '#efefef',
				borderRadius: '8px',
				WebkitBoxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                boxSizing: 'border-box',
                transition: 'all .1s ease-in',
			},
			arrow: {
				position: 'absolute',
				top: '43%',
				right: '5%',
				cursor: 'pointer',
				width: 0,
				height: 0,
				borderLeft: '7px solid transparent',
				borderRight: '7px solid transparent',
				borderTop: '10px solid rgba(95,95,95,0.4)',
			},
		};

		return (
			<div style={ style.wrapper } onClick={ this.toggleDropdown }>
				
				{ this.renderLabel() }

				<div style={ style.select }>
					{ this.renderSelected() }
				</div>

				<div style={ style.arrow }></div>

				{ this.renderDropdown() }
			</div>
		);
	}
}

Select.defaultProps = {
	options: [
		{
			label: 'One',
			value: 1,
		},
		{
			label: 'Two',
			value: 2,
		},
		{
			label: 'Three',
			value: 3,
		},
	],
	selected: 2,
	label: 'Select',
	onChange: () => {},
};


module.exports = Radium(Select);
