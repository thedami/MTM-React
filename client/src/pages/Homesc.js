import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homesc = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Schedule");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteSchedule = (ScheduleID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Schedule/${ScheduleID}`);
			toast.success("Schedule deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addSch">
				<button className="btn btn-contact">Add Schedule</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>ScheduleID</th>
						<th style={{textAlign: "center"}}>EventID</th>
						<th style={{textAlign: "center"}}>ArtistID</th>
						<th style={{textAlign: "center"}}>Date</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.ScheduleID}>
							<th scope='row'>{index+1}</th>
							<td>{item.EventID}</td>
							<td>{item.ArtistID}</td>
							<td>{item.Date}</td>
							<td>
								<Link to={`/updatesc/${item.ScheduleID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteSchedule(item.ScheduleID)}>Delete</button>
								<Link to={`/viewsc/${item.ScheduleID}`}>
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

export default Homesc; 