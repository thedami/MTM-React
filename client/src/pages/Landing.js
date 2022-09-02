import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../display/style.css";
const imgMyimageexample = require('../display/image.png');




function Landing() {
	
	const divStyle = {
  width: '88%',
  height: '800px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'   
};
	
	return(

			<body style={divStyle} class="back">
			<div>
			<Link to="/Home">
			<button className="btn btn-edit">News details</button>
			</Link>
			<Link to="/Homeam">
			<button className="btn btn-edit">Artist Manager details</button>
			</Link>
			<Link to="/Homeas">
			<button className="btn btn-edit">Assistant details</button>
			</Link>
			<Link to="/Homeco">
			<button className="btn btn-edit">Contract details</button>
			</Link>
			<Link to="/Homeev">
			<button className="btn btn-edit">Event details</button>
			</Link>
			<Link to="/Homeex">
			<button className="btn btn-edit">Expense details</button>
			</Link>
			<Link to="/Homere">
			<button className="btn btn-edit">Recommendations</button>
			</Link>
			<Link to="/Homesc">
			<button className="btn btn-edit">Schedule</button>
			</Link>
			<Link to="/Homear">
			<button className="btn btn-edit">Artist details</button>
			</Link>
			</div>
			</body>
	);

}



export default Landing;