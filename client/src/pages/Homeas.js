import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../display/Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Homeas = () => {
	const [data, setData] = useState([]); 

	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/asst");
		setData(response.data);
	};

	useEffect(() => {         
		loadData();
	}, []);


	const deleteAsst = (AsstID) =>{
		if(window.confirm('Are you sure you want to delete that record?')){
			axios.delete(`http://localhost:5000/news/${AsstID}`);
			toast.success("Assistant deleted successfully"); 
			setTimeout(() => loadData(), 500);
		}
	}
	return(
		<div style={{marginTop:"150px"}}>
			<Link to="/addAsst">
				<button className="btn btn-contact">Add Assitant</button>
			</Link>



			<table className='styled-table'>
				<thead>
					<tr>
						<th style={{textAlign: "center"}}>AsstID</th>
						<th style={{textAlign: "center"}}>LastName</th>
						<th style={{textAlign: "center"}}>FirstName</th>
						<th style={{textAlign: "center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return(
							<tr key={item.AsstID}>
							<th scope='row'>{index+1}</th>
							<td>{item.LastName}</td>
							<td>{item.FirstName}</td>
							<td>
								<Link to={`/updateas/${item.AsstID}`}>
									<button className="btn btn-edit">Edit</button>
								</Link>
									<button className="btn btn-delete" onClick={() => deleteAsst(item.AsstID)}>Delete</button>
								<Link to={`/viewas/${item.AsstID}`}>
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

export default Homeas; 