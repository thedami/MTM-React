import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewev = () => { 
	const [user, setUser] = useState({});

	const{id:EventID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Event/${EventID}`)
		.then((resp) => setUser({Description:resp.data.Description, Date:resp.data.Date, Time:resp.data.Time,
			Venue:resp.data.Venue, Country:resp.data.Country, Address:resp.data.Address}));
	}, [EventID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Event Details</p>
				</div>
				<div className="Container">
					<strong>EventID: </strong>
					<span>{EventID}</span>
					<br/>
					<br/>
					<strong>Description: </strong>
					<span>{user.Description}</span>
					<br/>
					<br/>
					<strong>Date: </strong>
					<span>{user.Date}</span>
					<br/>
					<br/>
					<strong>Time: </strong>
					<span>{user.Time}</span>
					<br/>
					<br/>
					<strong>Venue: </strong>
					<span>{user.Venue}</span>
					<br/>
					<br/>
					<strong>Country: </strong>
					<span>{user.Country}</span>
					<br/>
					<br/>
					<strong>Address: </strong>
					<span>{user.Address}</span>
					<br/>
					<br/>
					<Link to="/Homeev">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewev;