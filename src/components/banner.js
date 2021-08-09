import React from 'react'
import Igloo from '../assets/img/banner/forest.svg'

const banner = (props) => {


	return(
		<section className="web-banner">
			<div className="container">
				<div className="columns">
					 <div className="column first-banner-column">
					 	<div className="banner-ext-stream">
						 	<img 
						 		alt="igloo-ext" 
						 		src={Igloo}
						 	/>
						 </div>
					  </div>

					  <div className="column is-three-fifths banr-foxtrot-heading">
					  	 <div className="wrapper-banner">
							{props.bannerContext}
					     </div>
					  </div>
				</div>
			</div>
		</section>
	)
}

export default banner