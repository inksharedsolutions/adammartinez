import React from 'react'
import { Link } from 'gatsby'


const link = (props) =>{

 	let Listed = props.arrList.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		return (
			<li>
				<Link 
					to={filterUrl}>
					{e}
				</Link>
			</li>
		)
	})


	return (
		<>
			{Listed}
		</>
	)
}


export default link;