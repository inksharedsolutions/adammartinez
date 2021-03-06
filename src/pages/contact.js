import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Inputs from "../components/Inputs/inputs"
import {Helmet} from "react-helmet";

const Contact = () =>{

	const bannerText = (
		<>
			<span className="banr-tagline-fx">THROUGH THE RAINY SEASON</span>
			<h1 className="banr-header-fx">
				Get In
				<span className="banr-spn-highlight" id="span-non-front">Touch</span>
			</h1>
		</>
	)

	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
	}

	return (

		<Layout>

			<Helmet title="Contact | Adam Martinez" />
			<Banner bannerContext={bannerText} />
			<main className="flexMainContainer">
				<div className="flex-container-fx">

						<p className="contactMessage">
							Hello! Are you having a good day? Anyway, if you have any concerns or you just want to 
							share something, please feel free to drop me a line. I would love to hear anything from you.
						</p>

						<form 
							onSubmit={OnSubmitForm}
							action="https://formspree.io/f/mbjqoneo"
							method="POST">

						<div className="columns" id="form-wrapper">
							<div className="column is-half">
								<Inputs 
									name="author" 
									type="text" hidden
								/>
								<Inputs 
									name="fullname" 
									type="text" />

								<Inputs
									name="phone" 
									type="text" />

							</div>

							<div className="column is-half">

								<Inputs 
									name="email"
									type="email" />

								<Inputs 
									name="address" 
									type="text" />

							</div>
						</div>

						<div className="columns">
							<div className="column is-full" id="textAreaContainer">
								<label> Message	</label>
						          <textarea type="text" name='message' 
							           className="textArea"
							           placeholder='Message'
							           required />
		

						        <div className="buttonContainer">
									<input 
										className="abtiaryButton" 
										value="Submit"
										type="submit" />
								</div>
							</div>
						</div>

					</form>


					<div className="info-section-address">
						<span>
						  	<h5>Address</h5>
							831 N Tatnall Street, Suite M #188 Wilmington,
							DE 19801
						</span>

						<span>
							<h5>Phone</h5>
							888-323-7009
						</span>

						<span>
							<h5>Email</h5>
							publish@stratton-press.com
						</span>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default Contact