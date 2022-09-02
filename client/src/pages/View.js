import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const View = () => { 
	const [user, setUser] = useState({});

	const{id:NewsID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/news/${NewsID}`)
		.then((resp) => setUser({Source:resp.data.Source, Contents:resp.data.Contents, ArtistID:resp.data.ArtistID}));
	}, [NewsID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>News Detail</p>
				</div>
				<div className="Container">
					<strong>NewsID: </strong>
					<span>{NewsID}</span>
					<br/>
					<br/>
					<strong>Source: </strong>
					<span>{user.Source}</span>
					<br/>
					<br/>
					<strong>Contents: </strong>
					<span>{user.Contents}</span>
					<br/>
					<br/>
					<strong>ArtistID: </strong>
					<span>{user.ArtistID}</span>
					<br/>
					<br/>
					<Link to="/">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default View;