import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewco = () => { 
	const [user, setUser] = useState({});

	const{id:ContractID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Contract/${ContractID}`)
		.then((resp) => setUser({StartDate:resp.data.StartDate, EndDate:resp.data.EndDate, RoyaltyPercentage:resp.data.RoyaltyPercentage, ContractTerms:resp.data.ContractTerms}));
	}, [ContractID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Contract Details</p>
				</div>
				<div className="Container">
					<strong>ContractID: </strong>
					<span>{ContractID}</span>
					<br/>
					<br/>
					<strong>StartDate: </strong>
					<span>{user.StartDate}</span>
					<br/>
					<br/>
					<strong>EndDate: </strong>
					<span>{user.EndDate}</span>
					<br/>
					<br/>
					<strong>RoyaltyPercentage: </strong>
					<span>{user.RoyaltyPercentage}</span>
					<br/>
					<br/>
					<strong>Contract Terms: </strong>
					<span>{user.ContractTerms}</span>
					<br/>
					<br/>
					<Link to="/Homeco">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewco;