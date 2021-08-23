import React from 'react';
import { Link } from 'gatsby';
import Navlist from './links';
import MainLogo from '../assets/img/icon-logo/logo.png';

class Navigation extends React.Component {
	constructor() {
		super();
		this.state = { screenWidth: null };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowDimensions());
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		const isMobile = window.innerWidth < 990 ? true : false;
		this.setState({ screenWidth: isMobile });
	}

	render() {
		return (
			<nav className="main-navigation">
				{this.state.screenWidth && (
					<div className="mobileNav">
						<nav role="navigation">
							<div id="menuToggle">
								<input type="checkbox" />

								<span />
								<span />
								<span />

								<ul id="menu">
									{/* <Navlist arrList={this.props.navList} /> */}
									<li>
										<Link to="/">
											Home
										</Link>
									</li>

									<li>
										<Link to="/about-the-author">
											About the Author
										</Link>
									</li>

									<li>
										<Link to="/book">
											Book
										</Link>
									</li>

									<li>
										<Link to="/contact">
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				)}

				<div className="container">
					<div className="grid-blocks-nav">
						<div className="grid-block-child">
							<div className="logo-container-fx">
								<li>
									<Link to={'/'}>
										<img src={MainLogo} />
										<h1>Adam Martinez</h1>
									</Link>
								</li>
							</div>
						</div>
						<div className="grid-block-child align-right" id="main-navigation">
							{/* <Navlist arrList={this.props.navList} /> */}
							<li>
								<Link to="/">
									Home
								</Link>
							</li>

							<li>
								<Link to="/about-the-author">
									About the Author
								</Link>
							</li>

							<li>
								<Link to="/book">
									Book
								</Link>
							</li>

							<li>
								<Link to="/contact">
									Contact
								</Link>
							</li>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
