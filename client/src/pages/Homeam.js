import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homeam = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/AManager");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteAManager = (AManagerID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/AManager/${AManagerID}`);
			toast.success("Artist Manager deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addAManager">
				<button className="btn btn-contact">Add Artist Manager</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>AManagerID</th>
						<th style={{textAlign: "center"}}>Lastname</th>
						<th style={{textAlign: "center"}}>Firstname</th>
						<th style={{textAlign: "center"}}>AsstID</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.AManagerID}>
							<th scope='row'>{index+1}</th>
							<td>{item.LastName}</td>
							<td>{item.FirstName}</td>
							<td>{item.AsstID}</td>
							<td>
								<Link to={`/updateam/${item.AManagerID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteAManager(item.AManagerID)}>Delete</button>
								<Link to={`/viewam/${item.AManagerID}`}>
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

export default Homeam; 