import React, { Component } from 'react';
import Radium from 'radium';
import Input from '../../ui/input/Input.js';
import Button from '../../ui/buttons/Button.js';
import Select from '../../ui/select/Select.js';

export default class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			loading: false,
			select: 'business',
			options: [
				{
					label: 'Business',
					value: 'business',
				},
				{
					label: 'Customer',
					value: 'customer',
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

	handleButtonClick = () => {
		this.setState({
			loading: true,
		});
	};

	render() {
		const style = {
			form: {
				paddingBottom: 30,
				marginTop: 30,
				backgroundColor: '#fff',
				borderRadius: '8px',
				WebkitBoxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
				MozBoxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
				boxShadow: '0px 5px 0px -2px rgba(95, 95, 95, 0.4)',
			},
			input: {
				marginBottom: 30,
			},
			title: {
				fontWeight: 800,
				fontSize: '2rem',
				padding: '18px 10px 33px 10px',
				color: '#5f5f5f',
			},
			forgot: {
				textDecoration: 'none',
				color: '#2c9676',
				fontSize: '0.8rem',
				position: 'relative',
				top: 10,
				left: 35,

				':hover': {
					textDecoration: 'underline',
				},
			},
		};

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
				offset-sm-1-6"
				style={ style.form }>
					<div className="pure-g">
						<div
						className="
						pure-u-1
						pure-u-sm-23-24
						offset-sm-1-24">
							<div style={ style.title }>
								Sign In
							</div>
						</div>
						<div
						className="
						pure-u-1
						pure-u-sm-20-24
						offset-sm-1-12"
						style={ style.input }>
							<Input
								value={ this.state.email }
								label={ 'Email' }
								placeholder={ 'Email' }
								onChange={ this.handleChange.bind(this, 'email') } />
						</div>
						<div
						className="
						pure-u-1
						pure-u-sm-20-24
						offset-sm-1-12"
						style={ style.input }>
							<Input
								type={ 'password' }
								value={ this.state.password }
								label={ 'Password' }
								placeholder={ 'Password' }
								onChange={ this.handleChange.bind(this, 'password') } />
						</div>
						<div
							className="pure-u-1 pure-u-sm-20-24 offset-sm-1-12"
							style={ style.input }>
							<Select
								label="Account Type"
								selected={ this.state.select }
								options={ this.state.options }
								onChange={ this.handleValue.bind(this, 'select') } />
						</div>
						<div
						className="
						pure-u-1
						pure-u-sm-7-12">
							<a href="#" style={ style.forgot }>
								{ 'Forgot your password?' }
							</a>
						</div>
						<div
						className="
						pure-u-1
						pure-u-sm-1-3">
							<Button
								onClick={ this.handleButtonClick }
								loading={ this.state.loading }>
								{ 'Sign In' }
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Radium(Login);
