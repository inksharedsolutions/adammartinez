import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/two_book_perspective.png'
import Book2 from '../assets/img/books/book_02.png'
import { DiscussionEmbed } from "disqus-react"
import {Helmet} from "react-helmet";

const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'adam-martinez',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">THROUGH THE RAINY SEASON</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			
			<Helmet title="Book | Adam Martinez" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
						<div className="column">
							<div className="bookImgContainer">
								<img id="snowbear" alt="main-book" src={Book2} />
							</div>
						</div>
						
						<div className="column">
							<section className="contentBook">

								<div className="title-wrapper">
									 <h1>THROUGH THE RAINY SEASON</h1>
									 <p>Out of the Floods of Addiction</p>
								</div>

								<p>
									Defeated by his obsession and addiction to OxyContin, Adam desperately flees to Guyana, South America. There, he must adapt to the difficulties of life in the rain forest while secretly battling the pain of withdrawals. Through the Rainy Season is a true detailed account of how one man's refuge helps break the chains of addiction and teaches him about life, friendship, and true growth.
								</p>

							</section>

							<nav className="booklinkBlocks">
								<span>Ebook :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.ca/Through-Rainy-Season-floods-addiction-ebook/dp/B094CKTNCZ/ref=sr_1_1?dchild=1&keywords=9781648953934&qid=1620415789&s=books&sr=1-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/through-the-rainy-season-adam-martinez/1139421661?ean=9781648953934">Barnes & Noble</a></li>
							</nav>

							<nav className="booklinkBlocks">
								<span>Paperback :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.ca/Through-Rainy-Season-floods-addiction/dp/1648953921/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1620415789&sr=1-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/through-the-rainy-season-adam-martinez/1139421661?ean=9781648953927">Barnes & Noble </a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Through-Rainy-Season/Adam-Martinez/9781648953927?id=8284931556113&_ga=2.33172542.1281045943.1628493168-1205166702.1623175305">Books A Million</a></li>
							</nav>
						</div>
					</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor