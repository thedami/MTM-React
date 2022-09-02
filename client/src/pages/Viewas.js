import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewas = () => { 
	const [user, setUser] = useState({});

	const{id:AsstID} = useParams();


	useEffect(() => { 
		axios.get(`http://localhost:5000/news/${AsstID}`)
		.then((resp) => setUser({LastName:resp.data.LastName, FirstName:resp.data.FirstName}));
	}, [AsstID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Assistant Details</p>
				</div>
				<div className="Container">
					<strong>AssistantID: </strong>
					<span>{AsstID}</span>
					<br/>
					<br/>
					<strong>Lastname: </strong>
					<span>{user.LastName}</span>
					<br/>
					<br/>
					<strong>Firstname: </strong>
					<span>{user.FirstName}</span>
					<br/>
					<br/>
					<Link to="/Homeas">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewas;