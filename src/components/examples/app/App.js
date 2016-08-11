import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

class App extends Component {
	style = {
		wrapper: {
			backgroundColor: '#000',
			height: '100vh',
			width: '100vw',
			overflow: 'hidden',
		},
		nav: {
			position: 'fixed',
			backgroundColor: '#404040',
			height: 50,
			width: '100vw',
			zIndex: 99,
		},
		ul: {
			listStyle: 'none',
		},
		li: {
			float: 'left',
			margin: '0 10px',
			color: '#efefef',
		},
		link: {
			color: '#efefef',
			textDecoration: 'none',

			':hover': {
				textDecoration: 'underline',
				color: 'red',
			},
		},
		router: {
			padding: '80px 20px 20px 20px',
		},
	};

	render() {
		const style = this.style;

		return (
			<div style={ style.wrapper }>
				<div className="nav" style={ style.nav }>
					<ul style={ style.ul }>
						<li style={ style.li }>
							<Link
								to="/login"
								activeClassName="active"
								style={ style.link }>
								Login
							</Link>
						</li>
						<li style={ style.li }>
							<Link
								to="/synth"
								activeClassName="active"
								style={ style.link }>
								Synth
							</Link>
						</li>
					</ul>
				</div>
				<div style={ style.router }>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

module.exports = Radium(App);
