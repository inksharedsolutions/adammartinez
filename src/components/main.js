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
						New author Adam Martinez is a husband, father, world traveler, and dreamer. He writes, “I have basically made my living as a house painter, but my passion has always been writing.” 
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
