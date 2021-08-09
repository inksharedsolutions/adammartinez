import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/main_author.jpg'
import {Helmet} from 'react-helmet'

const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">THROUGH THE RAINY SEASON</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Helmet title="About the Author | Adam Martinez" />
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">
					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Adam Martinez 
					 				</span>
					 			</div>
					 			<h4>
								 “We are like the tree, all the time growing. Not always do we look right, but in every stage, we are perfect."
					 			</h4>
					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">
					 	 		<p>
								  New author Adam Martinez is a husband, father, world traveler, and dreamer. He writes, “I have basically made my living as a house painter, but my passion has always been writing.” Adam graduated with a degree in behavioral sciences, owns a small business, and actively helps those in his community.
								</p>	
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor