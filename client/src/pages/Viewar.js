import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewar = () => { 
	const [user, setUser] = useState({});

	const{id:ArtistID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Artist/${ArtistID}`)
		.then((resp) => setUser({LastName:resp.data.LastName, FirstName:resp.data.FirstName, Gender:resp.data.Gender
			,Address:resp.data.Address, Telephone:resp.data.Telephone, Email:resp.data.Email, AManagerID:resp.data.AManagerID}));
	}, [ArtistID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Artist Details</p>
				</div>
				<div className="Container">
					<strong>ArtistID: </strong>
					<span>{ArtistID}</span>
					<br/>
					<br/>
					<strong>Firstname: </strong>
					<span>{user.FirstName}</span>
					<br/>
					<br/>
					<strong>Lastname: </strong>
					<span>{user.LastName}</span>
					<br/>
					<br/>
					<strong>Gender: </strong>
					<span>{user.Gender}</span>
					<br/>
					<br/>
					<strong>Address: </strong>
					<span>{user.Address}</span>
					<br/>
					<br/>
					<strong>Telephone: </strong>Telephone
					<span>{user.Telephone}</span>
					<br/>
					<br/>
					<strong>Email: </strong>
					<span>{user.Email}</span>
					<br/>
					<br/>
					<strong>ManagerID: </strong>
					<span>{user.AManagerID}</span>
					<br/>
					<br/>
					<Link to="/Homear">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewar;