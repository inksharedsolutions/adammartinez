import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"
import {Helmet} from "react-helmet";

const IndexPage = () => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">THROUGH THE RAINY SEASON</span>
			<h1 className="banr-header-fx">
				A Story <span className="banr-spn-2">Out of the Floods</span>  
				<span className="banr-spn-highlight">of Addiction</span>

				<Link
					key=""
					className="btn-banner-intro" 
					to="/book">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
			  <Helmet title="Home | Adam Martinez" />
	  		 <Banner bannerContext={bannerText} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
