import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homeev = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Event");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteEvent = (EventID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Event/${EventID}`);
			toast.success("Event deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addEvent">
				<button className="btn btn-contact">Add Event</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>EventID</th>
						<th style={{textAlign: "center"}}>Description</th>
						<th style={{textAlign: "center"}}>Date</th>
						<th style={{textAlign: "center"}}>Time</th>
						<th style={{textAlign: "center"}}>Venue</th>
						<th style={{textAlign: "center"}}>Country</th>
						<th style={{textAlign: "center"}}>Address</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.EventID}>
							<th scope='row'>{index+1}</th>
							<td>{item.Description}</td>
							<td>{item.Date}</td>
							<td>{item.Time}</td>
							<td>{item.Venue}</td>
							<td>{item.Country}</td>
							<td>{item.Address}</td>
							<td>
								<Link to={`/updateev/${item.EventID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteEvent(item.EventID)}>Delete</button>
								<Link to={`/viewev/${item.EventID}`}>
									<button className="btn btn-view">View</button>
								</Link>
							</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<Link to="/">
				<button className="btn btn-contact">Back to Home</button>
			</Link>
		</div>
	)
}

export default Homeev; 