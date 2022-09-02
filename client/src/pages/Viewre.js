import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewre = () => { 
	const [user, setUser] = useState({});

	const{id:RecommendationID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Recommendation/${RecommendationID}`)
		.then((resp) => setUser({Description:resp.data.Description, DateReceived:resp.data.DateReceived}));
	}, [RecommendationID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Recommendation Details</p>
				</div>
				<div className="Container">
					<strong>RecommendationID: </strong>
					<span>{RecommendationID}</span>
					<br/>
					<br/>
					<strong>Description: </strong>
					<span>{user.Description}</span>
					<br/>
					<br/>
					<strong>Date Received: </strong>
					<span>{user.DateReceived}</span>
					<br/>
					<br/>
					<Link to="/Homere">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewre;