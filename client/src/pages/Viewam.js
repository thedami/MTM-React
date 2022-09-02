import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewam = () => { 
	const [user, setUser] = useState({});

	const{id:AManagerID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/AManager/${AManagerID}`)
		.then((resp) => setUser({LastName:resp.data.LastName, FirstName:resp.data.FirstName, AsstID:resp.data.AsstID}));
	}, [AManagerID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Artist Manager Details</p>
				</div>
				<div className="Container">
					<strong>ManagerID: </strong>
					<span>{AManagerID}</span>
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
					<strong>Assistant ID: </strong>
					<span>{user.AsstID}</span>
					<br/>
					<br/>
					<Link to="/Homeam">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewam;