import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewsc = () => { 
	const [user, setUser] = useState({});

	const{id:ScheduleID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Schedule/${ScheduleID}`)
		.then((resp) => setUser({EventID:resp.data.EventID, ArtistID:resp.data.ArtistID, Date:resp.data.Date}));
	}, [ScheduleID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Schedule Details</p>
				</div>
				<div className="Container">
					<strong>ScheduleID: </strong>
					<span>{ScheduleID}</span>
					<br/>
					<br/>
					<strong>EventID: </strong>
					<span>{user.EventID}</span>
					<br/>
					<br/>
					<strong>ArtistID: </strong>
					<span>{user.ArtistID}</span>
					<br/>
					<br/>
					<strong>Date: </strong>
					<span>{user.Date}</span>
					<br/>
					<br/>
					<Link to="/Homesc">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewsc;