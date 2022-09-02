import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import "../display/View.css";

const Viewex = () => { 
	const [user, setUser] = useState({});

	const{id:ExpenseID} = useParams();

	useEffect(() => { 
		axios.get(`http://localhost:5000/Expense/${ExpenseID}`)
		.then((resp) => setUser({Description:resp.data.Description, Amount:resp.data.Amount, IncuredBy:resp.data.IncuredBy}));
	}, [ExpenseID]);

	return (
		<div style={{marginTop: "150px"}}>
			<div className="card">
				<div className="card-header">
				<p>Expense Details</p>
				</div>
				<div className="Container">
					<strong>ExpenseID: </strong>
					<span>{ExpenseID}</span>
					<br/>
					<br/>
					<strong>Description: </strong>
					<span>{user.Description}</span>
					<br/>
					<br/>
					<strong>Amount: </strong>
					<span>{user.Amount}</span>
					<br/>
					<br/>
					<strong>IncuredBy: </strong>
					<span>{user.IncuredBy}</span>
					<br/>
					<br/>
					<Link to="/Homeex">
						<div className="btn btn-edit">Go Back</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Viewex;