import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homeco = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/Contract");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteContract = (ContractID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/Contract/${ContractID}`);
			toast.success("Contract deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addCont">
				<button className="btn btn-contact">Add Contract</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>ContractID</th>
						<th style={{textAlign: "center"}}>Start Date</th>
						<th style={{textAlign: "center"}}>End Date</th>
						<th style={{textAlign: "center"}}>Royalty Percentage</th>
						<th style={{textAlign: "center"}}>Contract Terms</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.ContractID}>
							<th scope='row'>{index+1}</th>
							<td>{item.StartDate}</td>
							<td>{item.EndDate}</td>
							<td>{item.RoyaltyPercentage}</td>
							<td>{item.ContractTerms}</td>
							<td>
								<Link to={`/updateco/${item.ContractID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteContract(item.ContractID)}>Delete</button>
								<Link to={`/viewco/${item.ContractID}`}>
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

export default Homeco; 