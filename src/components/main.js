import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/main_author.jpg';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Adam Martinez
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p>
					I spent my adolescent years in South Carolina and traveling to over 15 countries. I earned a Bachelor of Science from Western Kentucky University and currently reside in Kentucky with my wife and four children.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
